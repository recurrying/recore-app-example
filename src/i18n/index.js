/*
 * I18n language exporter for recore application, comes along with MEDUSA
 * languages if you have attached it to window with variable name __mcms
 */

/* eslint-disable */
import i18nHelper from 'i18n-helper';

const localLangs = require(`./${locale}`);
const { __mcms: mcmsLangs } = window;

let fromMcms = false;
let langs = localLangs;
if (mcmsLangs) {
  fromMcms = true;
  langs = mcmsLangs;
}

let i18n = i18nHelper(langs);
if (fromMcms) {
  const i18nFunc = i18nHelper(langs);

  i18n = (key, ...args) => {
    let searchKey = `appPrefix.${key}`;

    let text = i18nFunc(searchKey, ...args);
    if (text === searchKey) {
      text = i18nFunc(`common.${key}`, ...args);
    }

    return text;
  };
}

export default i18n;
/* eslint-enable */
