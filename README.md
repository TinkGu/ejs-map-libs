# ejs-map-libs
Map your static libs, add them as scripts tags to your ejs template.

## Installation
$ npm install ejs-map-libs

## API
> mapLibsTag(dirname, publicPath)

- `dirname`: your libs dir, **absolute** path.
- publicPath:  a string, `<script src="publicPath/lib.js"></script>`

## Usage
express
```
var mapLibsTag = require('ejs-map-libs')
app.use(mapLibsTag('absolute path', 'public path'))
```

ejs
```
<% libs %>
```

libs dir
```
-libs
    - aa.min.js
    - bb.min.js
    - ...
```

output
```
<script src="/public/aa.min.js"></script>
<script src="/public/bb.min.js"></script>
...
```

## Note
- please pre-install ejs, express...
- No test.
