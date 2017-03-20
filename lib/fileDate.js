const moment = require('moment');
const exifProcess = require('./exifProcess');

/**
 * Get the date of the file
 * @param  {[type]}    file [description]
 * @return {Generator}      [description]
 */
module.exports = function *fileDate(file) {
  let exif = yield exifProcess().readMetadata(file);

  exif = exif.data[0];
  if(exif.error) { throw exif.error; }

  // Line up Exif dates
  const exifdates = [
    exif.FileModifyDate,
    exif.FileCreateDate,
    exif.FileAccessDate
  ]
    // Filter out falsy values
    .filter((exifdate) => !!exifdate)
    // Convert exif dates to a usable date format
    .map((exifdate) => {
      const dateParts = exifdate.split(' ');
      return `${dateParts[0].replace(/[:]+/g, '-')} ${dateParts[1]}`;
    });

  // Match up all the dates
  const date = exifdates
    // We ensure date conversion by using moment
    .map((date) => moment(date).toDate())
    // Find the earliest date and return that (or null if there are no dates)
    .reduce((earliest, curr) => {
      if(earliest === null) { return curr; }
      return Number(earliest) > Number(curr) ? curr : earliest;
    }, null);

  // If we don't have any date at the end we cannot rename the file
  if(!date) { throw new Error('Could not extract date'); }

  return date;
};
