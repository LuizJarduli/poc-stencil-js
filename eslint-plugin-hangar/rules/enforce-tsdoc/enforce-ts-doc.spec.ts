// Libs
import { RuleTester } from '@typescript-eslint/rule-tester/dist';

// Regras do teste
import enforceTSDocRule, { RULE_NAME, EnumMessageIds } from './enforce-tsdoc';

// Configura o test-runner do eslint
const ruleTester = new RuleTester({
	parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run(
	RULE_NAME, // nome da regra
	enforceTSDocRule, // código fonte da regra
	{
		// 'valid' checks cases that should pass
		valid: [
			{
				name: 'should validate properties with jsDoc comments on class properties',
				code: `
                    @Component()
                    export class HangarButtonComponent {
                        /**
                         * @author Luiz Miguel
                         * Define uma label
                         */
                        public label: string;
                    }
                `,
			},
			{
				name: 'should validate methods that have jsDoc comments',
				code: `
                    @Component()
                    export class HangarButtonComponent {

                        /**
                         * sum
                         *
                         * Efetua a soma de dois números e retorna seu resultado.
                         *
                         * @param a - primeiro número
                         *
                         * @param b - segundo número
                         *
                         * @returns resultado numérico da soma
                         */
                        public sum(a: number, b: number): number {
                            return a + b;
                        }
                    }
                `,
			},
		],
		// 'invalid' checks cases that should not pass
		invalid: [
			{
				name: 'should not validate properties with jsDoc comments missing',
				code: `
                    @Component()
                    export class HangarButton {
                        public label: string;
                    }
                `,
				errors: [{ messageId: EnumMessageIds.MISSING_PROPERTY_COMMENT }],
			},
			{
				name: 'should not validate methods that  doesn\'t have jsDoc comments',
				code: `
                    @Component()
                    export class HangarButtonComponent {
                        public sum(a: number, b: number): number {
                            return a + b;
                        }
                    }
                `,
				errors: [{ messageId: EnumMessageIds.MISSING_METHOD_COMMENT }],
			},
		],
	}
);
