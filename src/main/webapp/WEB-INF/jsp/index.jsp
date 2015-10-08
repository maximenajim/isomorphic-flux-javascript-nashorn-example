<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Nashorn Flux Hello World Demo</title>
        <link rel="icon" href="about:blank">
        <link rel="stylesheet" href="/main.css">
    </head>
    <body>
        <div id="ReactRootElement">${content}</div>
        <script src="/bundle.js"></script>
        <script>Application.start({"path":"${path}"});</script>
    </body>
</html>