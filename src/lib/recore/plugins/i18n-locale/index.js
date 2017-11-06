import i18nHelper from 'i18n-helper';

export default function (app, { translations }) {
  const i18n = i18nHelper(translations);
  app.set('i18n', i18n);
}
