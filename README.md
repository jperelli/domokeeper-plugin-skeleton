# domokeeper-plugin-skeleton

This is a starter plugin for domokeeper. Use this as a base plugin to make your own. Learn how to do it in 5 minutes by reading this README.

## what is domokeeper?

domokeeper is a server and a mobile app to control your raspberry pi domotic gadgets.

Our objective is making you able to easily run and connect multiple sensors and actuators and control all of them from a nice mobile application.

We developed all interfaces, you only need to put the core control code for your sensor or actuator in the right place, and then you can enjoy controlling it from your mobile phone.

[To learn more from the server go here.](https://github.com/jperelli/domokeeper)

[To learn more from the mobile app go here](https://github.com/jperelli/domokeeper-mobile)

# domokeeper plugin system

domokeeper is built on top of expressjs. It exposes an API to
 - add a npm package from server
 - remove npm packages from server
 - give config values to those packages

domokeeper-mobile is just a GUI for that API

A domokeeper plugin is no more than an npm package that exposes some key elements through `export` (requirejs). The plugin system is managed by using npm install/remove and node's requirejs implementation.

## plugin structure

It's a npm package with an index.js. Inside that file you must export this structure:

    actions: {
      <actionName1>: {
        f: function() {
          // implementation here, use rpi-gpio node module maybe?
          // if using some extra module, add it to package.json
        },
        help: '<add a help phrase to understand what this action does>'
      },
      ....
    },
    sensors: {
      <sensorName1>: {
        f: function() {
          return <some expression>
        },
        type: 'int'/'str',
        help: '<add a help phrase to understand what this sensor is>'
      },
      ....
    },
    config: {
      <configKey1>: {
        type: 'int'/'str',
        default: 1,
        help: '<add a help phrase to understand what this config represents>'
      },
      ....
    }

Notes
 - things between `<>` are identifiers, put there a unique string.
 - types should be 'int' or 'str' for now.
 - see file index.js for a working example.

## how to develop a plugin?

Plugins can only be installed from npm registry as of now, and need to have a name starting with `domokeeper-plugin-`. So you need to create a npm package and upload it to npm registry. To do it, follow this steps:

    sudo apt install npm
    mkdir domokeeper-plugin-<your-plugin-name>  # always start it with this prefix!
    cd domokeeper-plugin-<your-plugin-name>
    npm init  # follow all the questions interactive.
              # I recommend starting with version 0.0.0
              # I recommend license "GPL-3.0"
    # create your index.js with your config
    npm adduser
    npm login  # store credentials

    # if publishing in github
    git init
    git remote add origin git@github.com:<user>/<your-plugin-name>.git

    git add .
    git commit -a -m "Initial commit"

    # to publish the package
    npm version patch  # increment patch version in package.json and create a tag in git
    # npm version minor# increment minor version in package.json and create a tag in git
    # npm version major# increment major version in package.json and create a tag in git
    git push origin master
    git push origin --tags
    npm publish

    # last four in one line (useful to have)
    npm version patch && git push origin master && git push origin --tags && npm publish

for more help on publishing packages on npm registry [go here](https://docs.npmjs.com/getting-started/publishing-npm-packages#publishing-npm-packages)

## done

Once you published your package, go to the mobile app, connect it to the server, install your package and run it.

# Authors

 - Julian Perelli

# License

GNU GPL v3