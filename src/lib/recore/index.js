import revo from '@ali/vu-revo';
import Recore from './recore';
import i18nLegao from './plugins/i18n-legao';
import i18nMCMS from './plugins/i18n-mcms';
import i18nLocale from './plugins/i18n-locale';

const create = options => new Recore(options || {});

let defaultInstance;
const getDefaultInstance = () => {
  if (!defaultInstance) {
    defaultInstance = create();
  }

  // TODO check if in legao

  return defaultInstance;
};
export default getDefaultInstance();

export {
  create,
  i18nLegao,
  i18nMCMS,
  i18nLocale,
  revo,
};
