/**
 * The remote services configuration, used by revo which is an implementation
 * of natty-fetch. The gateways should be accordinate to AECP data pool structure.
 */
export default {
  globalOptions: {
    mock: false,
    mockUrlPrefix: 'mock/',
    withCredentials: false,
    traditional: true,
  },
  api: {
    queryUserInfo: {
      url: 'http://dip.alibaba-inc.com/api/v2/services/schema/mock/68579',
      mockUrl: 'queryUserInfo.json',
      method: 'GET',
      request: 'auto',
    },
    account: {
      login: {
        url: 'http://dip.alibaba-inc.com/api/v2/services/schema/mock/68579',
        mockUrl: 'queryUserInfo.json',
        method: 'POST',
      },
    },
  },
};
