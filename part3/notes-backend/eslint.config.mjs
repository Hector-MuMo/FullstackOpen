import globals from "globals";
import stylisticJs from '@stylistic/eslint-plugin-js'
import js from '@eslint/js'


//The globals property specifies global variables that are predefined. The spread operator applied here tells ESLint to include all global variables defined in the globals.node settings such as the process. In the case of browser code we would define here globals.browser to allow browser specific global variables like window, and document.

//The @eslint/js package we installed earlier provides us with predefined configurations for ESLint. We'll import it and enable it in the configuration file
//We've added the js.configs.recommended to the top of the configuration array, this ensures that ESLint's recommended settings are applied first before our own custom options.

//The plugins property provides a way to extend ESLint's functionality by adding custom rules, configurations, and other capabilities that are not available in the core ESLint library. We've installed and enabled the @stylistic/eslint-plugin-js, which adds JavaScript stylistic rules for ESLint. In addition, rules for indentation, line breaks, quotes, and semicolons have been added. These four rules are all defined in the Eslint styles plugin.

export default [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "commonjs",
            globals: {
                ...globals.node,
            },
            ecmaVersion: "latest",
        },
        plugins: {
            '@stylistic/js': stylisticJs
        },
        rules: {
            '@stylistic/js/indent': [
                'error',
                2
            ],
            '@stylistic/js/linebreak-style': [
                'error',
                'unix'
            ],
            '@stylistic/js/quotes': [
                'error',
                'single'
            ],
            '@stylistic/js/semi': [
                'error',
                'never'
            ],
            'eqeqeq': 'error',
            'no-trailing-spaces': 'error',
            'object-curly-spacing': [
                'error', 'always'
            ],
            'arrow-spacing': [
                'error', { 'before': true, 'after': true },
            ],
            'no-console': 'off',
        },
    },
    {
        ignores: ["dist/**", "build/**"],
    },
]