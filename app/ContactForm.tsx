'use client';

import { FormEvent, useState } from 'react';

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

  function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = ['Olá, gostaria de entrar em contato com a Visio IT.','',`Nome: ${form.get('nome')}`,`CNPJ: ${cnpj}`,`Telefone: ${phone}`,`E-mail: ${form.get('email')}`].join('\n');
    window.open(`https://wa.me/5516997113481?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
  }

  return <section className="contact" id="contato">
    <div className="contact-form-intro"><p className="overline"><span /> Entre em contato</p><h2>Queremos te conhecer.</h2><p>Preencha os dados e fale com a equipe da Visio IT.</p></div>
    <form className="contact-form" onSubmit={submit}>
      <label><span>Nome</span><input name="nome" type="text" autoComplete="name" required /></label>
      <label><span>CNPJ</span><input name="cnpj" type="text" inputMode="numeric" placeholder="00.000.000/0000-00" value={cnpj} onChange={event => setCnpj(formatCnpj(event.target.value))} minLength={18} maxLength={18} pattern="\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}" required /></label>
      <label><span>Telefone</span><input name="telefone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="(00) 00000-0000" value={phone} onChange={event => setPhone(formatPhone(event.target.value))} minLength={14} maxLength={15} pattern="\(\d{2}\) \d{4,5}-\d{4}" required /></label>
      <label><span>E-mail</span><input name="email" type="email" autoComplete="email" required /></label>
      <button className="contact-submit" type="submit">Entre em contato <span aria-hidden="true">↗</span></button>
    </form>
    <div className="contact-data"><a href="tel:+5516997113481">16 99711-3481</a><a href="mailto:atendimento@visioit.com.br">atendimento@visioit.com.br</a></div>
  </section>;
}
