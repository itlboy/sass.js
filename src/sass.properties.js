var BooleanNumber = function(input) {
  // in emscripten you pass booleans as integer 0 and 1
  return Number(Boolean(input));
}

// map of arguments required by the emscripten wrapper (order relevant!)
// to not have to touch various different spots in this file,
// everything is defined here and registered in the appropriate places.
var properties = [
  {
    // char *source_string,
    type: 'string',
    source: 'func',
    // source string to compile
    key: 'text',
  },
  {
    // int output_style,
    type: 'number',
    source: 'options',
    // Output style for the generated css code
    // using Sass.style.*
    key: 'style',
    initial: 0,
    coerce: Number,
  },
  {
    // int precision,
    type: 'number',
    source: 'options',
    // Precision for outputting fractional numbers
    // 0: use libsass default
    key: 'precision',
    initial: 0,
    coerce: Number,
  },
  {
    // bool source_comments,
    type: 'number',
    source: 'options',
    // If you want inline source comments
    key: 'comments',
    initial: 0,
    coerce: BooleanNumber,
  },
  {
    // bool is_indented_syntax_src,
    type: 'number',
    source: 'options',
    // Treat source_string as SASS (as opposed to SCSS)
    key: 'indentedSyntax',
    initial: 0,
    coerce: BooleanNumber,
  },
  {
    // bool source_map_contents,
    type: 'number',
    source: 'options',
    // embed include contents in maps
    key: 'sourceMapContents',
    initial: 1,
    coerce: BooleanNumber,
  },
  {
    // bool source_map_embed,
    type: 'number',
    source: 'options',
    // embed sourceMappingUrl as data uri
    key: 'sourceMapEmbed',
    initial: 0,
    coerce: BooleanNumber,
  },
  {
    // bool omit_source_map_url,
    type: 'number',
    source: 'options',
    // Disable sourceMappingUrl in css output
    key: 'sourceMapOmitUrl',
    initial: 1,
    coerce: BooleanNumber,
  },
  {
    // char *source_map_root,
    type: 'string',
    source: 'options',
    // Pass-through as sourceRoot property
    key: 'sourceMapRoot',
    initial: 'root',
    coerce: String,
  },
  {
    // char *source_map_file,
    type: 'string',
    source: 'options',
    // Path to source map file
    // Enables the source map generating
    // Used to create sourceMappingUrl
    key: 'sourceMapFile',
    initial: 'file',
    coerce: String,
  },
  {
    // char *input_path,
    type: 'string',
    source: 'options',
    // The input path is used for source map generation.
    // It can be used to define something with string
    // compilation or to overload the input file path.
    // It is set to "stdin" for data contexts
    // and to the input file on file contexts.
    key: 'inputPath',
    initial: 'stdin',
    coerce: String,
  },
  {
    // char *output_path,
    type: 'string',
    source: 'options',
    // The output path is used for source map generation.
    // Libsass will not write to this file, it is just
    // used to create information in source-maps etc.
    key: 'outputPath',
    initial: 'stdout',
    coerce: String,
  },
  {
    // char *indent,
    type: 'string',
    source: 'options',
    // String to be used for indentation
    key: 'indent',
    initial: '  ',
    coerce: String,
  },
  {
    // char *linefeed,
    type: 'string',
    source: 'options',
    // String to be used to for line feeds
    key: 'linefeed',
    initial: '\n',
    coerce: String,
  },
  {
    // char *include_paths,
    type: 'string',
    source: 'sass',
    key: '_path',
  },
  {
    // char **source_map_string,
    type: 'i8',
    source: 'func',
    key: 'mapPointer',
  },
  {
    // char **included_files,
    type: 'i8',
    source: 'func',
    key: 'filesPointer',
  },
  {
    // char **error_message,
    type: 'i8',
    source: 'func',
    key: 'errorPointer',
  },
  {
    // char **error_json,
    type: 'i8',
    source: 'func',
    key: 'jsonPointer',
  },
];