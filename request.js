module.exports = function request(options, cb) {
  var xhr = new XMLHttpRequest()
  xhr.addEventListener('progress', cb);
  xhr.addEventListener('load', cb);
  xhr.addEventListener('error', cb);
  xhr.addEventListener('abort', cb);
  xhr.open(options.method, 
    options.url.indexOf('http') > -1 
      ? options.url
      : options.baseUrl + options.url
  )
  options.onRequest(xhr, options)
  return xhr
}
