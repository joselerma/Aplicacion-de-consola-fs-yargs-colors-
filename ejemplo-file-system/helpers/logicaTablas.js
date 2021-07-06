const fs = require("fs");
const colors = require("colors");

const crearTabla = async (base, listar, hasta) => {
  let consola =
    "====================\n".random +
    "Tabla del ".rainbow +
    colors.bgRed(base)+
    "\n=====================\n".random;
  let salida = "";
  try {
    for (let i = 1; i <= hasta; i++) {
      consola +=
        `${base}`.green +
        `x`.dim.brightCyan +
        `${i}`.grey +
        `=`.red +
        `${base * i}`.blue +
        `\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    if (listar) {
      console.log(consola);
    }
    return `tabla del ${base} creada`.zebra.bgMagenta;
  } catch (err) {
    throw err;
  }
};

module.exports = { crearTabla };
