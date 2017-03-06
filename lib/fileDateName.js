const nPath = require('path');
const moment = require('moment');

const fileDate = require('./fileDate');

module.exports = function *fileDateName(file, dateFormat = 'YYYY-MM-DD_HH-mm-ss') {
  let { name, ext } = nPath.parse(file);
  let regEx = dateFormat.replace(/([a-z]{2,4})/ig, (m, chars) => `(\\d{${chars.length}})`);
  regEx = new RegExp(`^${regEx}(_\\d+)?$`);

  try {
    // If the file has not already a correct name,
    // rename by using its earliest date
    if(!regEx.test(name)) {
      const date = yield fileDate(file);
      // Otherwise transform the date into a file name
      name = moment(date).format(dateFormat);
    } else {
      name = name.replace(/_\d+$/, '');
    }

    ext = ext.toLowerCase();

    return { name, ext, file() { return `${this.name}${this.ext}`; } };
  } catch(ex) {
    console.error(ex.toString(), ex.stack || '');
    return null;
  }
};
