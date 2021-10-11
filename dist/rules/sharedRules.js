"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    '@typescript-eslint/indent': constants_1.LintingLevel.OFF,
    'max-len': [
        constants_1.LintingLevel.ERROR,
        {
            code: 100,
            tabWidth: 2,
            ignoreStrings: true,
            ignoreComments: true,
            ignoreTemplateLiterals: true,
        },
    ],
    'no-tabs': constants_1.LintingLevel.ERROR,
    'no-console': constants_1.LintingLevel.OFF
};
//# sourceMappingURL=sharedRules.js.map