import fr from './locales/fr.js';
import sl from './locales/sl.js';

function getTranslate({ locale }) {
  let dict;
  if (locale === 'fr') {
    dict = fr;
  }
  if (locale === 'sl') {
    dict = sl;
  }
  if (dict) {
    return (str) => dict[str] || str;
  }
  return (str) => str;
}

export default getTranslate;
