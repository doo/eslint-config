"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.default = {
    'react-hooks/rules-of-hooks': constants_1.LintingLevel.ERROR,
    'react-hooks/exhaustive-deps': constants_1.LintingLevel.ERROR,
    'react/jsx-indent-props': constants_1.LintingLevel.OFF,
    'react/jsx-indent': constants_1.LintingLevel.OFF,
    'import/no-extraneous-dependencies': [
        constants_1.LintingLevel.ERROR,
        {
            devDependencies: [
                './e2e/**',
                '**/__mocks__/**',
                '**/*.{test,spec,stories}.{js,ts,tsx}',
            ],
        },
    ],
    'react/require-default-props': constants_1.LintingLevel.OFF,
    'react/prop-types': constants_1.LintingLevel.OFF,
    'react/react-in-jsx-scope': constants_1.LintingLevel.OFF, // with react-jsx in tsconfig this is not needed anymore
};
//# sourceMappingURL=react.js.map