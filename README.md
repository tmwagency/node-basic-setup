Node Basic Structure
====================

This is a 'Hello World' node application, designed to show how to get started with stucturing your code in Node.js, using the Express framework.

It has a very basic structure, uses the [http module]() and includes a route to serve a single webpage.

It also separates out our concerns to a basic level by separating the config, express configuration and the application routes.

## Running the Application

Obviously, the first thing you’ll need to do is install [Node.js](http://nodejs.org/).

Once you’ve done that, run the application by traversing to the folder in Terminal, or Command prompt, and type `node index.js`.

When running in development, a handy tool to install and use is [Nodemon](https://github.com/remy/nodemon).  When you make changes to your Node application, Nodemon restarts your Node application automatically, rather than having to do this manually every time you make a change.  When Nodemon is installed, run this example with `nodemon index.js`.

## Structure of the Application

The application has two main files; the `package.json` and `index.js`.

### `package.json`

This file handles the dependencies that our Node application requires to work.  Any dependencies that your application relies on in production should be stored in the `dependencies` object in this file.

This application has a few dependencies to help it setup, such as jade which node uses as our front-end templating language, and [Express](http://expressjs.com/), which is a web development framework for Node.

### `index.js`

This is the base file of our Node application and is the file we call when we run `node index.js`.  This file 'requires' other modules and dependencies in our application and so is the entry point into our application code.

### The rest…

The rest of the application is structured simply to what I consider to be logical convention.

Front-end related code (such as CSS and JS) is stored in the `public` folder, while application modules we write should be in the `app` and `core` folders.


## Basic Grunt setup included

I’ve included a simple Grunt setup that if run with `grunt watch` will automatically compile your CSS and JS for you.

This setup is taken from a front-end framework I help maintain called [Kickoff](http://tmwagency.github.io/kickoff/) – if you want to see how Grunt or any of this setup works, check out [Kickoff’s documentation](http://tmwagency.github.io/kickoff/).


## Have a play around

If you’re new to Node, or vastly experienced with it, I’d love to [hear your feedback](hello@ashleynolan.co.uk).

Likewise, if you have any problems running the application, get in touch or raise an issue.