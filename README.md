Node Basic Structure
====================

This shows a 'Hello World' node app, built using the express framework.

It has a very basic structure, uses the http module and basic routing to serve a minimal homepage.

It also separates our concerns to a basic level by separating out our config, express files and routes.

Run the node application by traversing to the folder in Terminal and, running `node index.js` (assuming node is installed on your machine, if not [see the documentation](http://nodejs.org/))

When running in development, I'd suggest using [Nodemon](https://github.com/remy/nodemon), which monitors any changes in your application and restarts your node server automatically, rather than having to do it yourself every time you change a file.  If installed, run this example with `nodemon index.js`.