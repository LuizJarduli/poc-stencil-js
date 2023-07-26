// Libs
import { RuleTester } from '@typescript-eslint/rule-tester/dist';

// Regras do teste
import enforceComponentSuffixRule, { RULE_NAME, MessageIds } from './enforce-component-suffix';

// Configura o test-runner do eslint
const ruleTester = new RuleTester({
	parser: require.resolve('@typescript-eslint/parser'),
});

const messageId: MessageIds = 'messageIdForMissingSuffix';

ruleTester.run(
	RULE_NAME, // nome da regra
	enforceComponentSuffixRule, // código fonte da regra
	{
		// 'valid' checks cases that should pass
		valid: [
			{
				name: 'should validate and enforce suffix when is a component decorated class',
				code: `
                    @Component()
                    export class HangarButtonComponent {}
                `,
			},
			{
				name: 'should not enforce suffix when isn\'t a component decorated class',
				code: `
                    export class StringUtils {}
                `,
			}
		],
		// 'invalid' checks cases that should not pass
		invalid: [{
			name: 'should not validate a decorated component class when is missing the suffix',
			code: `
                @Component()
                export class HangarButton {}
            `,
			errors: [{ messageId }],
		}],
	}
);
