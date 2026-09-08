'use client';

import { useEffect, useState } from 'react';

const CONSENT_COOKIE = 'visioit_cookie_consent';
const SIX_MONTHS = 60 * 60 * 24 * 180;

type Consent = 'accepted' | 'essential';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasPreference = document.cookie
      .split('; ')
      .some(cookie => cookie.startsWith(`${CONSENT_COOKIE}=`));

    setVisible(!hasPreference);
  }, []);

  function savePreference(value: Consent) {
    document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${SIX_MONTHS}; Path=/; Secure; SameSite=Lax`;
    window.dispatchEvent(new CustomEvent('visioit:cookie-consent', { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="cookie-consent" aria-label="Preferências de cookies">
      <div className="cookie-consent-copy">
        <span aria-hidden="true">COOKIES / 01</span>
        <p>
          Usamos cookies essenciais para o funcionamento e a segurança do formulário.
          Você pode aceitar a experiência completa ou manter somente os essenciais.
        </p>
      </div>
      <div className="cookie-consent-actions">
        <button type="button" className="cookie-consent-secondary" onClick={() => savePreference('essential')}>
          Somente essenciais
        </button>
        <button type="button" className="cookie-consent-primary" onClick={() => savePreference('accepted')}>
          Aceitar
        </button>
      </div>
    </aside>
  );
}
