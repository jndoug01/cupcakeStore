# cupcakeStore
To run locally
Run npm install && bower install from your git cli
Run mongodb on its default port 
add your a file named local.env.js to cupcakeStore\server\config with this code.
in your cli run 'grunt serve' to spin up the serve and run the program

'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'cupcakestore-secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
