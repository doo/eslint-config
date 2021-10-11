import { LintingLevel } from './constants';
declare const _default: {
    '@typescript-eslint/indent': LintingLevel;
    'max-len': (LintingLevel | {
        code: number;
        tabWidth: number;
        ignoreStrings: boolean;
        ignoreComments: boolean;
        ignoreTemplateLiterals: boolean;
    })[];
    'no-tabs': LintingLevel;
    'no-console': LintingLevel;
};
export default _default;
