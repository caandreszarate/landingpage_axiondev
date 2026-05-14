import { useParams } from 'react-router-dom';

export function useLanguage() {
  const { lang } = useParams();
  return lang === 'es' ? 'es' : 'en';
}
