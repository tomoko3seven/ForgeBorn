import js from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
    {
        ignores: ["probe/**", "node_modules/**", ".git/**"],
    },
    {
        rules: {
            "no-unused-vars": "off",
            "no-undef": "off",
            "no-var": "error",
            "no-useless-escape": "warn",
            "eqeqeq": ["error", "smart"],
        },
    },
];