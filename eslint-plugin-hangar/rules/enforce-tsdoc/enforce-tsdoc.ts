// Libs
import { RuleContext } from '@typescript-eslint/utils/dist/ts-eslint';

// Utils
import { createRule } from '../utils/create-rule';
import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils';

// Define o nome da regra
export const RULE_NAME = 'enforce-tsdoc';

export enum EnumMessageIds {
    MISSING_PROPERTY_COMMENT = 'messageIdForMissingCommentsOnPropertyDefinitions',
    MISSING_METHOD_COMMENT = 'messageIdForMissingCommentsOnMethodDefinitions',
    MISSING_PARAM_COMMENT = 'messageIdForMissingParamsDocsOnMethodDefinitions',
}

type EnumValues = typeof EnumMessageIds;

// Define um type para as messageIds a serem utilizadas na regra
export type MessageIds = EnumValues[keyof EnumValues];

// Opções de customização dessa regra
export type Options = [];

const enforceTSDocRule = createRule<Options, MessageIds>({
	name: RULE_NAME,
	meta: {
		type: 'problem',
		docs: {
			description: 'TSDoc é obrigatório na construção e documentação do sistema',
			recommended: 'error'
		},
		schema: [
			{
				type: 'string'
			}
		],
		messages: {
			messageIdForMissingCommentsOnMethodDefinitions: 'O método "{{ methodName }}" está sem documentação!',
			messageIdForMissingCommentsOnPropertyDefinitions: 'A propriedade {{ propertyName }} deve ser documentada!',
			messageIdForMissingParamsDocsOnMethodDefinitions: 'O parâmetro {{ paramsName }} do método {{ methodName }} não está documentado!'
		}
	},
	create: (context: Readonly<RuleContext<MessageIds, []>>) => {
		const checkNodes = (node: TSESTree.PropertyDefinition | TSESTree.MethodDefinition) => {
			const isPropertyDefinition: boolean = node.type === AST_NODE_TYPES.PropertyDefinition;
			const isMethodDefinition: boolean = node.type === AST_NODE_TYPES.MethodDefinition;

			if (!isPropertyDefinition && !isMethodDefinition) {
				return;
			}

			let messageId: MessageIds | null = null;

			if (isPropertyDefinition || isMethodDefinition) {
				const { MISSING_METHOD_COMMENT, MISSING_PROPERTY_COMMENT} = EnumMessageIds;
				const comments = context.getSourceCode().getCommentsBefore(node);

				if (!comments?.length) {
					messageId = isMethodDefinition ? MISSING_METHOD_COMMENT : MISSING_PROPERTY_COMMENT;
				}
			}

			if (messageId) {
				const identifierName: string = (node.key as TSESTree.Identifier).name;
				context.report({
					node,
					messageId,
					data: {
						...(isPropertyDefinition && { propertyName: identifierName }),
						...(isMethodDefinition && { methodName: identifierName }),
						// ...(paramsName && { paramsName }),
					}
				});
			}
		};
		return {
			'PropertyDefinition, MethodDefinition': checkNodes,
		};
	},
	defaultOptions: []
});

export default enforceTSDocRule;
