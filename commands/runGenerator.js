const { Generator } = require("coder-js");

const path = require('path');

const createConfig =  (argv) =>{
  return {
    model: {
      path: argv.modelPath
    }, 
    extension: {
      path: argv.extensionPath
    }, 
    template: {
      path: argv.templatePath
    } 
  };
}

const runCodeGenarator = async (argv) =>{
    const output = argv.output;
    const models = argv.models[0] == null? null : argv.models;
    const templates = argv.templates[0] == null? null : argv.templates;
    const config = createConfig(argv);
    const generator = new Generator(config);

    console.log("   _____          _           ");
    console.log("  / ____|        | |          ");
    console.log(" | |     ___   __| | ___ _ __ ");
    console.log(" | |    / _ \\ / _` |/ _ \\ '__|");
    console.log(" | |___| (_) | (_| |  __/ |   ");
    console.log("  \\_____\\___/ \\__,_|\\___|_|   ");
    console.log("");
    console.log(`- models: ${models==null?'all':models.join(',')}`)
    console.log(`- templates: ${templates==null?'all':templates.join(',')}`)
    console.log(`- output: ${output}`)
    console.log("");
    const project = { 
      output: argv.output,
      entityFilter: models,
      templateFilter: templates,
      
    }
    try {
      console.log("starting code generator")
      await generator.run(project);
    } catch(err) {
      console.log(`Error: ${err.message}`)
    }
}

module.exports = runCodeGenarator;