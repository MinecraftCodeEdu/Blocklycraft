
var addr = unescape(location.href);
param = addr.slice(addr.indexOf('?')+1,addr.length);

document.write(param);
