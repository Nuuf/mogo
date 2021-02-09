/* eslint-disable */
const version = require('./package.json').version;

module.exports = function () {
  return [
    '/**',
    '* @package     mogo',
    "* @author      Gustav 'Nuuf' Åberg <gustavrein@gmail.com>",
    '* @version     ' + version,
    "* @copyright   (C) 2021 Gustav 'Nuuf' Åberg",
    '* @license     {@link https://github.com/Nuuf/mogo/blob/main/LICENSE}',
    '*/',
  ].join('\n');
};