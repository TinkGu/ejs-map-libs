var fs = require('fs');

function mapLibs(dirname, publicPath){
    return fs.readdirSync(dirname).map(function(lib){
        return '<script src=\"' + publicPath + lib + '\"></script>'
    }).join('\n');
}

module.exports = function (dirname, publicPath){
    return function(req, res, next) {
        res.locals.libs = mapLibs(dirname, publicPath);
        next();
    }
}
