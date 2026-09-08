'use client';

import { FormEvent, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const CONTACT_COOKIE = 'visioit_contact_status=sent';
const THIRTY_DAYS = 60 * 60 * 24 * 30;

const digitsOnly = (value:string) => value.replace(/\D/g,'');

function formatCnpj(value:string) {
  return digitsOnly(value).slice(0,14).replace(/^(\d{2})(\d)/,'$1.$2').replace(/^(\d{2})\.(\d{3})(\d)/,'$1.$2.$3').replace(/\.(\d{3})(\d)/,'.$1/$2').replace(/(\d{4})(\d)/,'$1-$2');
}

function formatPhone(value:string) {
  const digits = digitsOnly(value).slice(0,11);
  if (digits.length <= 10) return digits.replace(/^(\d{0,2})(\d{0,4})(\d{0,4}).*/,(_,ddd,first,last) => `${ddd ? `(${ddd}` : ''}${ddd.length === 2 ? ') ' : ''}${first}${last ? `-${last}` : ''}`);
  return digits.replace(/^(\d{2})(\d{5})(\d{0,4}).*/,'($1) $2-$3');
}

export function ContactForm() {
  const [cnpj,setCnpj] = useState('');
  const [phone,setPhone] = useState('');
  const [status,setStatus] = useState<'checking'|'idle'|'sending'|'success'|'error'>('checking');

  useEffect(() => {
    const alreadySent = document.cookie.split('; ').some(cookie => cookie === CONTACT_COOKIE);
    setStatus(alreadySent ? 'success' : 'idle');
  }, []);

  function rememberSubmission() {
    document.cookie = `${CONTACT_COOKIE}; Max-Age=${THIRTY_DAYS}; Path=/; Secure; SameSite=Lax`;
  }

  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setStatus('sending');

    try {
      const response = await fetch('/enviar-contato.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: form,
      });
      const result = await response.json().catch(() => null);
      if (result?.blocked) {
        rememberSubmission();
        setStatus('success');
        return;
      }
      if (!response.ok || !result?.success) throw new Error('Falha no envio');
      formElement.reset();
      setCnpj('');
      setPhone('');
      rememberSubmission();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return <section className="contact" id="contato">
    <div className="contact-form-intro"><p className="overline"><span /> Entre em contato</p><h2>Queremos te conhecer.</h2><p>Preencha os dados e fale com a equipe da Visio IT.</p></div>
    <div className="contact-form-stage">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ? (
          <motion.div
            className="contact-form-success"
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .2, ease: [0.23, 1, 0.32, 1] }}
            role="status"
            aria-live="polite"
          >
            <p>Mensagem enviada. Em breve entraremos em contato.</p>
          </motion.div>
        ) : status === 'checking' ? (
          <div className="contact-form-placeholder" key="checking" aria-hidden="true" />
        ) : (
          <motion.form
            className="contact-form"
            key="form"
            onSubmit={submit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .2, ease: [0.23, 1, 0.32, 1] }}
          >
            <label><span>Nome</span><input name="nome" type="text" autoComplete="name" maxLength={120} disabled={status === 'sending'} required /></label>
            <label><span>CNPJ</span><input name="cnpj" type="text" inputMode="numeric" placeholder="00.000.000/0000-00" value={cnpj} onChange={event => setCnpj(formatCnpj(event.target.value))} minLength={18} maxLength={18} pattern="\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}" disabled={status === 'sending'} required /></label>
            <label><span>Telefone</span><input name="telefone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="(00) 00000-0000" value={phone} onChange={event => setPhone(formatPhone(event.target.value))} minLength={14} maxLength={15} pattern="\(\d{2}\) \d{4,5}-\d{4}" disabled={status === 'sending'} required /></label>
            <label><span>E-mail</span><input name="email" type="email" autoComplete="email" maxLength={160} disabled={status === 'sending'} required /></label>
            <label className="contact-honeypot" aria-hidden="true"><span>Site da empresa</span><input name="empresa_site" type="text" tabIndex={-1} autoComplete="off" /></label>
            <button className="contact-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : 'Enviar por e-mail'} <span aria-hidden="true">↗</span></button>
            <p className={`contact-form-status is-${status}`} role="status" aria-live="polite">
              {status === 'error' && 'Não foi possível enviar agora. Tente novamente ou escreva para atendimento@visioit.com.br.'}
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
    <div className="contact-data"><a href="tel:+5516997113481">16 99711-3481</a><a href="mailto:atendimento@visioit.com.br">atendimento@visioit.com.br</a></div>
  </section>;
}
