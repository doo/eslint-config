"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./rules/constants");
var sharedRules_1 = __importDefault(require("./rules/sharedRules"));
module.exports = {
    extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['**/*.d.ts'],
    rules: __assign(__assign({}, sharedRules_1.default), { 'import/no-extraneous-dependencies': [
            constants_1.LintingLevel.ERROR,
            {
                devDependencies: ['**/__mocks__/**', '**/*.{test,spec}.{js,ts,tsx}'],
            },
        ] })
};
//# sourceMappingURL=index.js.map