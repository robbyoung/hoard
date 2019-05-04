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
        "sourceType": "module"
    },
    "plugins": [
        "react"
	],
	"settings": {
		"react": {
			"version": "detect",
		}
	},
    "rules": {
		"@typescript-eslint/indent": "off",
		"indent": [2, "tab"]
    }
};