import { StoryObj, Meta } from '@storybook/web-components';
import { THangarIcon } from './../common/types/THangarIcon';

export default {
	// Por padrão é legal criar sempre dentro de uma subpasta para separar os Readmes dos stories em si
	title: 'Buttons/HangarButton',
	component: 'hangar-button',
	argTypes: {
		label: {
			defaultValue: 'Placeholder Text',
			description: 'Define a label de exibição do botão',
			type: 'string',
			required: true,
		},
		theme: {
			description: 'Aplica o tema do botão, podendo ser de cor primária ou secundária',
			options: ['primary', 'secondary'],
			type: 'string',
			defaultValue: 'primary',
			control: { type: 'radio' },
		},
		size: {
			description: 'Define o tamanho do botão. Valores possíveis: `default`, `large`, `compact`',
			options: ['large', 'default', 'compact'],
			defaultValue: 'large',
			type: 'string',
			control: { type: 'radio' },
		},
		icon_right: {
			description: 'Adiciona um ícone à direita da label do botão',
			type: 'string',
			control: {
				type: 'select',
			},
			options: [
				'Selecione',
				'hangar-icon-blog',
				'hangar-icon-home',
				'hangar-icon-newspaper',
				'hangar-icon-office',
				'hangar-icon-pen',
				'hangar-icon-pencil',
				'hangar-icon-quill',
			] as THangarIcon[],
		},
		icon_left: {
			description: 'Adiciona um ícone à esquerda da label do botão',
			type: 'string',
			control: {
				type: 'select',
			},
			options: [
				'Selecione',
				'hangar-icon-blog',
				'hangar-icon-home',
				'hangar-icon-newspaper',
				'hangar-icon-office',
				'hangar-icon-pen',
				'hangar-icon-pencil',
				'hangar-icon-quill',
			] as THangarIcon[],
		},
		disabled: {
			description: 'Define o estado do botão, por padrão o botão é habilitado (disabled: `false`)',
			defaultValue: false,
			type: 'boolean',
		},
		rounded: {
			description: 'Define se as bordas do botão serão arredondadas ou não',
			defaultValue: false,
			type: 'boolean',
		}
	}

} as Meta;

const Template = ({ label, theme, icon_left, icon_right, size, rounded, disabled }) => `
    <div class="buttons-container">
        <hangar-button label="Placeholder Text"></hangar-button>
        <hangar-button label="Placeholder Text" class="btn--rounded"></hangar-button>
        <hangar-button label="Placeholder Text" class="secondary btn--rounded"></hangar-button>
        <hangar-button label="Placeholder Text" class="secondary"></hangar-button>
        <hangar-button label="Placeholder Text" class="btn-default"></hangar-button>
        <hangar-button label="Placeholder Text" class="btn--rounded btn-default"></hangar-button>
        <hangar-button label="Placeholder Text" class="secondary btn--rounded btn-default"></hangar-button>
        <hangar-button label="Placeholder Text" class="secondary btn-default"></hangar-button>
        <hangar-button label="Placeholder Text" class="btn-compact"></hangar-button>
        <hangar-button label="Placeholder Text" class="btn--rounded btn-compact"></hangar-button>
        <hangar-button label="Placeholder Text" class="secondary btn-compact"></hangar-button>
        <hangar-button label="Placeholder Text" class="secondary btn--rounded btn-compact"></hangar-button>
        <hangar-button label="Placeholder Text" class="secondary btn-compact" disabled="true"></hangar-button>
        <hangar-button label="Placeholder Text" class="secondary btn--rounded btn-compact" disabled="true"></hangar-button>
    </div>
    <div class="customizable-button">
        <h3>Customize o botão abaixo com os controles do story!</h3>
        <hangar-button
            label="${label}"
            class="${theme} btn-${size} ${rounded ? 'btn--rounded' : ''}"
            icons=${JSON.stringify({ right: icon_right, left: icon_left})}
            disabled="${disabled}">
        </hangar-button>
    </div>
`;

export const HangarButton: StoryObj = Template.bind({});

HangarButton.args = {
	label: 'Placeholder text',
	theme: 'primary',
	icon_left: 'hangar-icon-home' as THangarIcon,
	icon_right: 'hangar-icon-pen' as THangarIcon,
	size: 'large',
	rounded: false,
	disabled: false,
};
