import axios from 'axios';

import { configApp } from '@/config/app';

axios.defaults.timeout = 1000 * 60 * 5;

class HttpUtil {
    constructor() {
        this.queue = {};
    }

    getInsideConfig(options) {
        const { data } = options;
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post'
        };
        return config;
    }

    destroy(url) {
        delete this.queue[url];
    }

    interceptors(instance, url) {
        instance.interceptors.request.use(config => {
            if (sessionLib.get()) {
                config.headers[configApp.tokenKey] = sessionLib.get();
            }
            this.queue[url] = true;
            return config;
        }, error => {
            return Promise.reject(error);
        });
        instance.interceptors.response.use(res => {
            this.destroy(url);
            const { data } = res;
            return data;
        }, error => {
            this.destroy(url);
            return Promise.reject(error);
        });
    }

    request(options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(options), options);
        this.interceptors(instance, options.url);
        return instance(options);
    }
}

export default new HttpUtil();