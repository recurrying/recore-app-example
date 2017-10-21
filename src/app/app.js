/**
 * The boot script for recore application, do your all initiation and global
 * actions here.
 */
import nattyFetch from 'natty-fetch';

import './app.less';
import services from './services';

// TODO: should use revo instead
const Context = nattyFetch.context(services.options);
const gateways = {};
services.gateways.forEach((item) => {
  gateways[item.name] = {
    url: item.url,
    mockUrl: item.mockUrl,
  };
});
Context.create('recore', gateways);

window.revo = Context.api.recore;
