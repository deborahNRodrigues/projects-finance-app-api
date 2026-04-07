import js from "@eslint/js";
import globals from "globals";

export default [
  // 1. Aplica as regras recomendadas do ESLint
  js.configs.recommended,

  // 2. Aplica as suas personalizações
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node, // Adiciona variáveis globais do Node.js
        ...globals.browser, // Adiciona globais do Browser (se necessário)
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      semi: [error, "always"], // Exemplo: obriga ponto e vírgula
    },
  },
];
