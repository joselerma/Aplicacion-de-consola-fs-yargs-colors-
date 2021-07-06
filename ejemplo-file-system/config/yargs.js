const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Lista la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Numero limite de multiplicaciones",
  })
  .check((argv, options) => {
    if (isNaN(argv.b) || isNaN(argv.h)) {
      throw "La base y el limite tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
