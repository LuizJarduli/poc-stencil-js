// Libs
import { RuleContext } from '@typescript-eslint/utils/dist/ts-eslint';

// Utils
import { createRule } from '../utils/create-rule';
import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/typescript-estree';

// Define o nome da regra
export const RULE_NAME = 'enforce-component-suffix';

// Define um type para as messageIds a serem utilizadas na regra
export type MessageIds = 'messageIdForMissingSuffix';

// Opções de customização dessa regra
export type Options = [];

const enforceComponentSuffixRule = createRule<Options, MessageIds>({
	name: RULE_NAME,
	meta: {
		type: 'problem',
		docs: {
			description: 'Todos os componentes criados devem conter o sufixo `Component` atrelado na declaração de nome da classe.',
			recommended: 'error'
		},
		schema: [
			{
				type: 'string'
			}
		],
		messages: {
			messageIdForMissingSuffix: 'Nome de classe "{{ className }}" deve ter sufixo Component ao final'
		}
	},
	create: (context: Readonly<RuleContext<MessageIds, []>>) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const checkClassName = (node: TSESTree.Decorator) => {
			const parent = node.parent;

			// Valida se é uma classe decorada
			if (parent?.type !== AST_NODE_TYPES.ClassDeclaration) {
				return;
			}

			const className = parent?.id?.name;

			if (!className?.endsWith('Component')) {
				context.report({
					node,
					messageId: 'messageIdForMissingSuffix',
					data: {
						className
					}
				});
			}
		};
		return {
			'ClassDeclaration > Decorator:matches([expression.callee.name="Component"])': checkClassName,
		};
	},
	defaultOptions: []
});

export default enforceComponentSuffixRule;
