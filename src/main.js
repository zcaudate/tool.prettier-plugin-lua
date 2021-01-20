const plugin = require("@prettier/plugin-lua");
const prettier = require("prettier");

function format_lua(s) {
  return prettier.format(s, { parser: "lua" });
}

const MODULE = { format_lua: format_lua };

module.exports=MODULE