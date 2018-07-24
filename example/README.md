# OST GraphQL Example Usage

GraphQL (and specifically Apollo) make it easy to get into your front end service.

Included is a simple one-page app that should display a list of your OST users when loaded.  

**The page needs to be served.**

## Usage
```bash
cd ost-graphql-server
npm install -g http-server # or put it on an existing server (such as nginx, etc)
http-server example
```

*If you encounter a 405 error, make sure that server.js includes the URL you are loading from in the cors whitelist. (such as http://localhost:8080)
