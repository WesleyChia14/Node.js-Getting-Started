const http = require('http');

const requestListener = (req, res) => {
  res.write('Hello Worlddd\n');
  console.dir(res , {depth : 0} );
  res.end();
}
const server = http.createServer();
server.on('request', requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});
