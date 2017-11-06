export default function (app) {
  const defaultLocale = window.__locale;
  const translation = window.__i18n || {};

  app.set('i18n', (key) => {
    const locale = app.config('locale') || defaultLocale;
    const items = translation[locale] || {};
    return items[key] || key;
  });
}
