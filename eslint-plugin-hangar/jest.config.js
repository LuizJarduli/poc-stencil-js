/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
module.exports = {
	testEnvironment: 'node',
	transform: { '^.+\\.tsx?$': 'ts-jest' },
	moduleDirectories: [
		'node_modules',
		'src'
	],
	moduleNameMapper: {
		'^@typescript-eslint/rule-tester/dist$':  '<rootDir>/node_modules/@typescript-eslint/rule-tester/dist/index.js',
		'^@typescript-eslint/utils/dist$': '<rootDir>/node_modules/@typescript-eslint/utils/dist/index.js',
	}
};
