fis3-postprocessor-html
a css formatter of fis3 based on stylefmt

[![npm](https://img.shields.io/npm/v/fis3-postprocessor-htmlt.svg?style=flat-square)](https://www.npmjs.com/package/fis3-postprocessor-html) 
[![npm](https://img.shields.io/npm/dt/fis3-postprocessor-html.svg?style=flat-square)](https://www.npmjs.com/package/fis3-postprocessor-html) 
[![npm](https://img.shields.io/npm/dm/fis3-postprocessor-html.svg?style=flat-square)](https://www.npmjs.com/package/fis3-postprocessor-html)

## usage

    $ npm i -g fis3-postprocessor-html

```
// fis-conf.js
var config = {
  "indent_size": 4,
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

fis.match('*.html}', {
  postprocessor: fis.plugin('html', config)
});
```

## links
fis3: [http://fis.baidu.com/]

js-beautify: [https://github.com/beautify-web/js-beautify]
