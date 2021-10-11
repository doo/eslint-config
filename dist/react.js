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
var sharedRules_1 = __importDefault(require("./rules/sharedRules"));
var react_1 = __importDefault(require("./rules/react"));
module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
        'prettier',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['**/*.d.ts'],
    rules: __assign(__assign({}, sharedRules_1.default), react_1.default)
};
//# sourceMappingURL=react.js.map