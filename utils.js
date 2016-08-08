module.exports.urlEncode = function urlEncode(obj) {
  var str = [];
  for (var p in obj) {	
    if (obj.hasOwnProperty(p)) {
		if(obj[p] instanceof Array)
		{
			var arrToUri = "";
			
			for(var i in obj[p]) {						
				arrToUri += p + "[]" + "=" + obj[p][i] + "&";
			}
			
			str.push(arrToUri.substring(0, arrToUri.length - 1));
		}
		else 
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
}
