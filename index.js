#!/usr/bin/env node
const runGenarator = require("./commands/runGenerator");

require('yargs')
  .usage('$0 <command> [args]')
  .command('run', 'Generate code', (yargs) => {
    yargs.options({
        output: {
          alias: 'o',
          default: './',
          global: false,
          requiresArg: true,
          type: 'string'
        },
        templates: {
          alias: 't',
          default: null,
          global: false,
          requiresArg: false,
          type: 'array'
        },
        templatePath: {
          alias: 'T',
          default: "./templates",
          global: false,
          requiresArg: false,
          type: 'string'
        },
        models: {
          alias: 'm',
          default: null,
          global: false,
          requiresArg: false,
          type: 'array'
        },
        modelPath: {
          alias: 'M',
          default: "./models",
          global: false,
          requiresArg: false,
          type: 'string'
        },
        extensionPath: {
          alias: 'E',
          default: "./extensions",
          global: false,
          requiresArg: false,
          type: 'string'
        }

      }
    );
  }, runGenarator)
  
  .help('h')
  .alias('h', 'help')
  .wrap(null)
  .argv

