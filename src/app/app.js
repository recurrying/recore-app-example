/**
 * The boot script for recore application, do your all initiation and global
 * actions here.
 */
import recore, { revo, i18nLocale } from 'recore';
import services from './services';
import i18n from '../i18n';
import './app.less';

// init revo
recore.set('revo', revo(services));

// init i18n
// recore.config('locale', 'zh-cn');
recore.use(i18nLocale, {
  translations: i18n,
});
