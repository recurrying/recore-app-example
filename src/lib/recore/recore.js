import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import cloneDeep from 'lodash/cloneDeep';

class Recore {
  constructor(options) {
    this.__store = {
      options,
    };
    this.__config = {};
  }

  config(key, value) {
    this.__config[key] = value;
  }

  set(name, value) {
    this.__store[name] = value;
  }

  get(name) {
    const value = this.__store[name];
    if (isPlainObject(value) || isArray(value)) {
      return cloneDeep(value);
    }
    return value;
  }

  use(plugin, options = {}) {
    plugin(this, options);
  }
}

export default Recore;
