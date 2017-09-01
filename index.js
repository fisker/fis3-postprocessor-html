/*
 * fis3-postprocessor-html
 * fisker Cheung<lionkay@gmail.com>
 */

'use strict';

var jsbeautifier = require('js-beautify').html;
var log = (global.fis && fis.log) || console;

module.exports = function(content, file, conf){
  content = content.replace(/__relative\("(.*?)"\)/g, '"__relative_fn1_start__$1__relative_fn1_end__"');
  content = content.replace(/__relative<<<"(.*?)">>>/g, '"__relative_fn2_start__$1__relative_fn2_end__"');

  content = jsbeautifier(content, conf);

  content = content.replace(/"__relative_fn2_start__(.*?)__relative_fn2_end__"/g, '__relative<<<"$1">>>');
  content = content.replace(/"__relative_fn1_start__(.*?)__relative_fn1_end__"/g, '__relative("$1")');
  return content;
};


module.exports.defaultOptions = {
  "indent_size": 2,
  "indent_char": " ",
  "eol": "\n",
  "indent_level": 0,
  "indent_with_tabs": false,
  "preserve_newlines": true,
  "max_preserve_newlines": 10,
  "jslint_happy": false,
  "space_after_anon_function": false,
  "brace_style": "collapse",
  "keep_array_indentation": false,
  "keep_function_indentation": false,
  "space_before_conditional": true,
  "break_chained_methods": false,
  "eval_code": false,
  "unescape_strings": false,
  "wrap_line_length": 0,
  "wrap_attributes": "auto",
  "wrap_attributes_indent_size": 4,
  "end_with_newline": false
};

