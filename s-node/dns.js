var dns = require('dns');

var options = { all: true };

dns.lookup('www.baidu.com', options, function (err, address, family) {
  if (err) throw err;
  console.log(address);
});
