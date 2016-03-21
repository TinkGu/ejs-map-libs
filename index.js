var fs = require('fs');

function setEjsTag(tagName, handler){
    return function(req, res, next){
        res.locals[tagName] = handler;
        next();
    }
}

function mapLibs(dirname, publicPath){
    return fs.readdirSync(dirname).map(function(lib){
        return '<script src=\"' + publicPath + lib + '\"></script>'
    }).join('\n');
}

module.exports = setEjsTag('libs', mapLibs);
