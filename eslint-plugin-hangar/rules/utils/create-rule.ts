import { ESLintUtils } from '@typescript-eslint/utils';

/** Define a criação de uma regra de linting para o plugin hangar */
export const createRule = ESLintUtils.RuleCreator(
	(ruleName) => ruleName,
);
