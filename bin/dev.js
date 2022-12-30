const webpack = require("webpack");
const webpckConfig = require("../webpack.config");
const nodemon = require("nodemon");
const path = require("path");

const compiler = webpack(webpckConfig);

compiler.run((err) => {
  if (err) {
    console.log("Компиляция не удалась ", err);
  }

  compiler.watch({}, (err) => {
    if (err) {
      console.log("Компиляция не удалась ", err);
    }
    console.log("Компиляция успешно завершина");
  });
  nodemon({
    script: path.resolve(__dirname, "../dist/server/server.js"),
    watch: [
      path.resolve(__dirname, "../dist/server"),
      path.resolve(__dirname, "../dist/client")
   ]
  })
})