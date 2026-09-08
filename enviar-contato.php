<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, max-age=0');
header('X-Content-Type-Options: nosniff');

function respond(int $status, bool $success, string $message, array $extra = []): void
{
    http_response_code($status);
    echo json_encode(
        array_merge(['success' => $success, 'message' => $message], $extra),
        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
    );
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false, 'Método não permitido.');
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, ['https://visioit.com.br', 'https://www.visioit.com.br'], true)) {
    respond(403, false, 'Origem não autorizada.');
}

if (($_COOKIE['visioit_contact_sent'] ?? '') === '1') {
    respond(429, false, 'Uma mensagem já foi enviada por este navegador.', ['blocked' => true]);
}

// Bots costumam preencher campos visualmente ocultos. Para eles, simulamos
// sucesso sem enviar a mensagem nem revelar a proteção.
if (trim((string) ($_POST['empresa_site'] ?? '')) !== '') {
    respond(200, true, 'Mensagem recebida.');
}

$nome = trim((string) ($_POST['nome'] ?? ''));
$cnpj = trim((string) ($_POST['cnpj'] ?? ''));
$telefone = trim((string) ($_POST['telefone'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));

if ($nome === '' || mb_strlen($nome) > 120) {
    respond(422, false, 'Informe um nome válido.');
}

$cnpjDigits = preg_replace('/\D+/', '', $cnpj) ?? '';
if (strlen($cnpjDigits) !== 14) {
    respond(422, false, 'Informe um CNPJ válido.');
}

$phoneDigits = preg_replace('/\D+/', '', $telefone) ?? '';
if (!in_array(strlen($phoneDigits), [10, 11], true)) {
    respond(422, false, 'Informe um telefone válido.');
}

if (strlen($email) > 160 || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    respond(422, false, 'Informe um e-mail válido.');
}

$to = 'atendimento@visioit.com.br';
$from = 'atendimento@visioit.com.br';
$subject = 'Novo contato pelo site — ' . $nome;
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$body = implode("\r\n", [
    'Novo contato recebido pelo site da Visio IT',
    '',
    'Nome: ' . $nome,
    'CNPJ: ' . $cnpj,
    'Telefone: ' . $telefone,
    'E-mail: ' . $email,
    '',
    'Data: ' . date('d/m/Y H:i:s'),
]);
$headers = implode("\r\n", [
    'From: Visio IT <' . $from . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . PHP_VERSION,
]);

if (!mail($to, $encodedSubject, $body, $headers, '-f' . $from)) {
    respond(500, false, 'Não foi possível enviar a mensagem.');
}

$cookieLifetime = time() + (60 * 60 * 24 * 30);
setcookie('visioit_contact_sent', '1', [
    'expires' => $cookieLifetime,
    'path' => '/',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Lax',
]);
setcookie('visioit_contact_status', 'sent', [
    'expires' => $cookieLifetime,
    'path' => '/',
    'secure' => true,
    'httponly' => false,
    'samesite' => 'Lax',
]);

respond(200, true, 'Mensagem enviada com sucesso.');
