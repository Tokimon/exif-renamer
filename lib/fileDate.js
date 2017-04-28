const fs = require('fs-promise');
const moment = require('moment');
const exifProcess = require('./exifProcess');

/**
 * Get the date of the file
 * @param  {[type]}    file [description]
 * @return {Generator}      [description]
 */
module.exports = function *fileDate(file, useFsDate) {
  let exif = yield exifProcess().readMetadata(file);

  exif = exif.data[0] || {};
  if(exif.error) { throw exif.error; }

  // Line up Exif dates
  let dates = [
    exif.FileModifyDate,
    exif.FileCreateDate,
    exif.FileAccessDate
  ]
    // Filter out falsy values
    .filter((date) => !!date)
    // Convert exif dates to a usable date format
    .map((date) => {
      const dateParts = date.split(' ');
      return `${dateParts[0].replace(/[:]+/g, '-')} ${dateParts[1]}`;
    });

  // Fallback to File System date if there are no Exif dates
  if(useFsDate && !dates.length) {
    const { ctime, birthtime, mtime } = yield fs.stat(file);
    dates = [birthtime, ctime, mtime].filter((date) => !!date);
  }

  // Match up all the dates
  const date = dates
    // We ensure date conversion by using moment
    .map((date) => moment(date).toDate())
    // Find the earliest date and return that (or null if there are no dates)
    .reduce((earliest, curr) => {
      if(!curr) { return earliest || null; }
      if(!earliest) { return curr || null; }
      return Number(earliest) > Number(curr) ? curr : earliest;
    });

  // If we don't have any date at the end we cannot rename the file
  if(!date) { throw new Error('Could not extract date'); }

  return date;
};
