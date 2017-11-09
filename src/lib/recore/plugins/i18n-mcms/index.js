import i18nHelper from 'i18n-helper';

export default function (app, { appPrefix = 'appPrefix' }) {
  const mcmsLangs = window.__mcms || {};
  const i18nFunc = i18nHelper(mcmsLangs);

  app.set('i18n', (key, ...args) => {
    const searchKey = `${appPrefix}.${key}`;

    let text = i18nFunc(searchKey, ...args);
    if (text === searchKey) {
      text = i18nFunc(`common.${key}`, ...args);
    }

    return text;
  });
}
