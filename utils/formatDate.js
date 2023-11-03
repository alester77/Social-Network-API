const moment = require('moment');
const formatDate = (date) => {
  return moment(date).format('MMM Do, YYYY [at] hh:mm a');
};
module.exports = formatDate;