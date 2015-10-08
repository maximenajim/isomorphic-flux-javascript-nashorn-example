var Application = require('../app/main');

export default function (path) {
    var bootstrap = {
        path: path
    };
    return Application.start(bootstrap);
};