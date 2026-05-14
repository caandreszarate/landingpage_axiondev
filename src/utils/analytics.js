import { track } from '@vercel/analytics';

export const trackCalClick = (location, lang) =>
  track('cal_click', { location, lang });

export const trackWhatsAppClick = (location, lang) =>
  track('whatsapp_click', { location, lang });

export const trackPricingCTAClick = (pkg, lang) =>
  track('pricing_cta_click', { package: pkg, lang });

export const trackFormStart = (lang) =>
  track('form_start', { lang });

export const trackFormSubmit = (projectType, budget, lang) =>
  track('form_submit', { project_type: projectType, budget, lang });

export const trackLangSwitch = (from, to) =>
  track('lang_switch', { from, to });

export const trackSectionView = (eventName, lang) =>
  track(eventName, { lang });
