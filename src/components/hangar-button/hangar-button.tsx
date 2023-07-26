// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Event, EventEmitter, Prop, Watch, h } from '@stencil/core';
import { THangarIcon } from '../common/types/THangarIcon';

export type ButtonSizes = 'default' | 'large' | 'compact';

export interface IHangarButtonProperties {
	label: string;
	size?: ButtonSizes;
	disabled?: boolean;
	icons?: string | Partial<Record<'left' | 'right', THangarIcon>>;
}

@Component({
	tag: 'hangar-button',
	styleUrls: ['hangar-button.scss', '../../style/_buttons.scss'],
	shadow: true,
})
export class HangarButtonComponent implements IHangarButtonProperties {

	/** Define a label de exibição do botão */
	@Prop() public label!: IHangarButtonProperties['label'];
	/** Define o tamanho do botão. Valores possíveis: `default`, `large`, `compact` */
	@Prop() public size: IHangarButtonProperties['size'] = 'default';
	/** Define se terá um ou mais ícones sendo exibidos na esquerda ou direita do botão. Se deseja apenas um ícone (por padrão do lado direito), pode apenas passar a string e não um objeto. */
	@Prop() public icons: IHangarButtonProperties['icons'];
	/** Define o estado do botão, por padrão o botão é habilitado (disabled: `false`) */
	@Prop() public disabled: IHangarButtonProperties['disabled'] = false;
	/** Define um evento a ser emitido no momento do clique do botão, fazendo assim o one-way data-binding */
	@Event() public buttonClick: EventEmitter<MouseEvent>;

	/**
	 * parseIcons
	 *
	 * Método que intercepta os valores atribuídos à propriedade `icons` do componente
	 * e converte para o objeto que o botão espera.
	 *
	 * OBS: O decorador `watch` marca esse método que faz com que ele haja como um setter para a propriedade pois
	 * o decorador '@Prop()` Não reconhece setters
	 *
	 * @param icons - String (stringfied object) ou objeto contendo informações sobre os ícones a serem exibidos.
	 */
	@Watch('icons') private parseIcons(icons: string | IHangarButtonProperties['icons']): void {
		if (!icons) {
			return;
		}

		this.icons = typeof icons === 'string' ? JSON.parse(icons) : icons;
	}

	/**
	 * componentWillLoad
	 *
	 * Ciclo de vida executado no momento em que o componente é inserido no DOM, antes de sua renderização completa
	 */
	public componentWillLoad(): void {
		this.parseIcons(this.icons);
	}

	/**
	 * handleClick
	 *
	 * Emite o clique do botão
	 *
	 * @param event - Evento padrão de cliques/ponteiros capturados no browser
	 */
	public handleClick(event: MouseEvent): void {
		this.buttonClick.emit(event);
	}

	/**
	 * render
	 *
	 * Renderiza o component
	 */
	public render() {
		return (
			<button class="hangar-button" part="theme" onClick={this.handleClick.bind(this)} disabled={this.disabled}>
				<i class={ (this.icons as Partial<Record<'left' | 'right', THangarIcon>>)?.left ?? 'hidden' }></i>
				<span class="hangar-button__label">{this.label}</span>
				<i class={ (this.icons as Partial<Record<'left' | 'right', THangarIcon>>)?.right ?? 'hidden' }></i>
			</button>
		);
	}
}
