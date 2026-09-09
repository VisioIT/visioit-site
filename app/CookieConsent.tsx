'use client';

import { useEffect, useState } from 'react';

const CONSENT_COOKIE = 'visioit_cookie_consent';
const SIX_MONTHS = 60 * 60 * 24 * 180;

type Consent = 'accepted' | 'essential';

function updateAnalyticsConsent(value: Consent) {
  const analyticsWindow = window as typeof window & {
    gtag?: (...args: unknown[]) => void;
  };

  analyticsWindow.gtag?.('consent', 'update', {
    analytics_storage: value === 'accepted' ? 'granted' : 'denied',
  });
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const preference = document.cookie
      .split('; ')
      .find(cookie => cookie.startsWith(`${CONSENT_COOKIE}=`))
      ?.split('=')[1] as Consent | undefined;

    if (preference) updateAnalyticsConsent(preference);
    setVisible(!preference);
  }, []);

  function savePreference(value: Consent) {
    document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${SIX_MONTHS}; Path=/; Secure; SameSite=Lax`;
    updateAnalyticsConsent(value);
    window.dispatchEvent(new CustomEvent('visioit:cookie-consent', { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="cookie-consent" aria-label="Preferências de cookies">
      <div className="cookie-consent-copy">
        <span aria-hidden="true">COOKIES / 01</span>
        <p>
          Usamos cookies essenciais para o funcionamento do site e, com sua autorização,
          o Google Analytics para entender a navegação. Você pode aceitar ou manter somente os essenciais.
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
