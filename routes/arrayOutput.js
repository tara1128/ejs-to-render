/*
  routes/arrayOutput.js
  2017-12-18 16:06
*/

/* Global function, output paragraph by paragraph from an array: */
exports.paragraphs = function(array, htmlTag, htmlCloseTag) {
  if (array.length < 1 || !array) return;
  var result = '';
  if (!htmlTag) htmlTag = '<span>';
  if (!htmlCloseTag) htmlCloseTag = '</span>';
  array.forEach(function(text){
    result += (htmlTag + text + htmlCloseTag);
  });
  return result;
};
