// Recupera as regras
import enforceComponentSuffixRule from './enforce-component-suffix/enforce-component-suffix';
import enforceTSDocRule from './enforce-tsdoc/enforce-tsdoc';

// Monta o objeto de regras do plugin
export const rules = {
	'enforce-component-suffix': enforceComponentSuffixRule,
	'enforce-tsdoc': enforceTSDocRule,
};
