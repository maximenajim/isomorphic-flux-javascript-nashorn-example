isomorphic-flux-javascript-nashorn-example
===============================

Example of server-side rendering of flux hello world application using Nashorn.

# Nashorn

Nashorn is Java’s embedded JavaScript engine that comes part of Java 8.  Nashorn will compile JavaScript to Java bytecode providing interoperability between Java and JavaScript code.  

This repo demonstrates running server-side render of a react component using Java.  It uses maven and spring-boot to compile and launch an embedded web server (but, in general, these are not required for doing server-side rendering of reactJS components using Nashorn)

# Isomorphic Flux

"Isomorphic JavaScript" describes JS applications that run on both the client and the server. 

This takes the hello world flux application from [ssr-demo-kit](https://github.com/zertosh/ssr-demo-kit) by Andres Suarez and renders it server-side using Nashorn.

# Installation instructions

```
npm install
```

```
npm run build
```

To run:

```
mvn spring-boot:run
```

Then go to: http://localhost:8080/

To turn off server-side rendering, pass _ssr_ parameter as _false_:

http://localhost:8080/?ssr=false