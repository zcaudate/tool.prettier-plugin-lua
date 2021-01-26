const plugin = require("@prettier/plugin-lua");
const prettier = require("prettier");

function format_lua(s) {
  return prettier.format(s, { parser: "lua" });
}

format_lua("1 + 1")