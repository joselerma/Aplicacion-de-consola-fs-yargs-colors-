const { crearTabla } = require("./helpers/logicaTablas");
const argv = require("./config/yargs");



crearTabla(argv.b, argv.l, argv.h)
  .then((message) => console.log(message))
  .catch((err) => console.log(err));


