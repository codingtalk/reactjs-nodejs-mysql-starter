import configUrl from '../config/url';
import httpUtil from '../utils/httpUtil';

export default class Request {

    _getRequestBaseUrl(url) {
        let finalBaseUrl = url.dev;

        if (process.env.NODE_ENV === 'local') {
            finalBaseUrl = url.lcoal;
        }

        if (process.env.NODE_ENV === 'test') {
            finalBaseUrl = url.test;
        }

        if (process.env.NODE_ENV === 'production') {
            finalBaseUrl = url.prod;
        }

        return finalBaseUrl;
    }

    _getConfig(app, domain, method) {
        return {
            fullUrl: this._getRequestBaseUrl(configUrl[app].url) + configUrl[app].domain[domain][method].url
        };
    }

    do(app, domain, method, form, config = {}) {
        const { params, data } = form;
        let url = ''
        try {
            url = configUrl[app].domain[domain][method].url;
        } catch (e) {
            $log4js.error(`
      Request.js =====> api json configure is error
      full path ======> ${app}/${domain}/${method}
      `);
        }
        if (config.showLoading) {
        }
        return httpUtil.request({
            baseURL: this._getRequestBaseUrl(configUrl[app].url),
            url,
            params,
            data
        }).finally(() => {

        });
    }
}