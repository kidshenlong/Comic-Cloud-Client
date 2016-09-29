var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('mock-upstream/db.json');
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(function (req, res, next) {
    if (isAuthorised(req.headers)) {
        if (req.method === 'POST') {
            res.sen
        } else next();
    } else {
        res.sendStatus(401)
    }
});
server.use(router);
server.listen(3000, function () {
    console.log('Mock Comic Cloud Server is running')
});
function isAuthorised(headers){
    return true;//headers.hasOwnProperty('authorization')
}

//watching in module https://github.com/typicode/json-server/issues/327