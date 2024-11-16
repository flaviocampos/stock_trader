module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    plugins: [
        'vue'
    ],
    rules: {
        // Permite console.warn, console.error e console.info, mas gera um aviso para console.log
        'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
        'no-debugger': 'warn',
        'vue/max-attributes-per-line': ['error', { singleline: 3 }]
    }
};
