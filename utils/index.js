import { email, phone } from './constant';
import moment from 'moment';

const Utils = {
  isObj(o) {
    return Object.prototype.toString.call(o) == '[object Object]';
  },
  isArray(o) {
    return Object.prototype.toString.call(o) == '[object Array]';
  },
  isEmail(v) {
    return email.test(v);
  },
  isPhone(v) {
    return phone.test(v);
  },
  isString(v) {
    return Object.prototype.toString.call(v) === '[object String]';
  },
  isObject(v) {
    return Object.prototype.toString.call(v) === '[object Object]';
  },
  isEmptyString(v) {
    if (this.isString(v) && !v) {
      return true;
    }
    if (this.isString(v) && !v.length) {
      return true;
    }
    return false;
  },
  isEmpty(v) {
    if (!v) {
      return true;
    }
    if (!v.length) {
      return true;
    }
    return false;
  },
  decodeUserName(val) {
    let resVal = '';
    if (this.isEmpty(val)) {
      return resVal;
    }
    let middleNum = Math.floor(val.length / 2);
    if (val.indexOf('@') > -1) {
      let mailPre = val.split('@')[0];
      if (mailPre.length <= 3) {
        resVal = '***' + '@' + val.split('@')[1];
      } else {
        resVal = mailPre.slice(0, 3) + '****@' + val.split('@')[1];
      }
    } else {
      resVal = val.slice(0, middleNum - 2) + '****' + val.slice(middleNum + 2);
    }

    return resVal;
  },
  // 去除两边的空格
  trim(name = '') {
    return name.replace(/(^\s*)|(\s*$)/g, '');
  },
  // 去重数组对象
  unique(arr, name) {
    let hash = {};
    return arr.reduce(function(item, next) {
      hash[next[name]] ? '' : (hash[next[name]] = true && item.push(next));
      return item;
    }, []);
  },
  // 首字母大写转换
  titleCase(str) {
    var array = str.toLowerCase().split(' ');
    for (var i = 0; i < array.length; i++) {
      array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);

      //array[i][0] = array[i][0] + 'A' - 'a';
    }
    var string = array.join(' ');

    return string;
  },
};
export default Utils;
