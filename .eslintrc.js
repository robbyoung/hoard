module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
	},
	"parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
		"sourceType": "module",
		"project": "./tsconfig.json",
    },
    "plugins": [
        "react",
		"import",
		"@typescript-eslint",
		"ban",
	],
	"settings": {
		"react": {
			"version": "detect",
		}
	},
    "rules": {
		"@typescript-eslint/indent": "off",
        "indent": [2, "tab", {"SwitchCase": 1}],
		"import/order": "error",
		"func-call-spacing": "off",
		"@typescript-eslint/func-call-spacing": "error",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"ban/ban": [
            "error",
            {"name": "cloneDeep", "message": "Don't use cloneDeep"}
        ]
    }
};