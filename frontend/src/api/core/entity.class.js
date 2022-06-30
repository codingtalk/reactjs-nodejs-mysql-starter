import Request from './request';
import entitySet from './entity';
import Vue from 'vue';
const _ = require('lodash');

const _baseTableField = {
    id: {
        type: 'int',
        default: 0
    },
    sn: {
        type: 'int',
        default: 0
    },
    status: {
        type: 'int',
        default: 0
    },
    isDelete: {
        type: 'int',
        default: 0
    },
    createTime: {
        type: 'string',
        default: ''
    },
    updateTime: {
        type: 'string',
        default: ''
    },
    deleteTime: {
        type: 'string',
        default: ''
    }
};

class Entity {
    _tableField = []
    request = null
    _raw = null
    constructor(entity, { _tableField }) {
        this._tableField = Object.assign(_.cloneDeep(_baseTableField), _tableField);
        for (const i in this._tableField) {
            if (entity && this._tableField[i].isEntity) {
                const v = _.get(entity, i);
                this[i] = Array.isArray(v) ? v.map(j => new entitySet[this._tableField[i].type](j)) : new entitySet[this._tableField[i].type](v);
                continue;
            }
            this[i] = entity ? this._fieldDo(entity, i) : _.get(this._tableField, `${i}.default`);
            this._raw = entity;
        }
    }

    _fieldDo(entity, i) {
        if (!this._tableField[i].do) {
            return _.get(entity, i);
        }
        const { parse } = this._tableField[i].do;
        if (parse) {
            return (_.get(entity, i) || '{}').toParse();
        }
    }


    static sendApi(method, form = { params: {}, data: {} }, config = { errorTip: '', parse4Entity: false, showLoading: false }) {
        const { app, domain } = this._requestConfig;
        return new Request().do(app, domain, method, form, { showLoading: config.showLoading }).then(res => {
            const { status } = res;
            if (!status && config.errorTip) {
                if (typeof config.errorTip === 'function') {
                    config.errorTip(res);
                } else {
                    Vue.prototype.$message.error(config.errorTip);
                }
            }
            if (config.parse4Entity) {
                res.data = Array.isArray(res.data) ? res.data.map(i => new this(i)) : new this(res.data);
            }
            return res;
        });
    }

}

export default Entity;