/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IHangarButtonProperties } from "./components/hangar-button/hangar-button";
export { IHangarButtonProperties } from "./components/hangar-button/hangar-button";
export namespace Components {
    interface HangarButton {
        /**
          * Define o estado do botão, por padrão o botão é habilitado (disabled: `false`)
         */
        "disabled": IHangarButtonProperties['disabled'];
        /**
          * Define se terá um ou mais ícones sendo exibidos na esquerda ou direita do botão. Se deseja apenas um ícone (por padrão do lado direito), pode apenas passar a string e não um objeto.
         */
        "icons": IHangarButtonProperties['icons'];
        /**
          * Define a label de exibição do botão
         */
        "label": IHangarButtonProperties['label'];
        /**
          * Define o tamanho do botão. Valores possíveis: `default`, `large`, `compact`
         */
        "size": IHangarButtonProperties['size'];
    }
}
export interface HangarButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLHangarButtonElement;
}
declare global {
    interface HTMLHangarButtonElement extends Components.HangarButton, HTMLStencilElement {
    }
    var HTMLHangarButtonElement: {
        prototype: HTMLHangarButtonElement;
        new (): HTMLHangarButtonElement;
    };
    interface HTMLElementTagNameMap {
        "hangar-button": HTMLHangarButtonElement;
    }
}
declare namespace LocalJSX {
    interface HangarButton {
        /**
          * Define o estado do botão, por padrão o botão é habilitado (disabled: `false`)
         */
        "disabled"?: IHangarButtonProperties['disabled'];
        /**
          * Define se terá um ou mais ícones sendo exibidos na esquerda ou direita do botão. Se deseja apenas um ícone (por padrão do lado direito), pode apenas passar a string e não um objeto.
         */
        "icons"?: IHangarButtonProperties['icons'];
        /**
          * Define a label de exibição do botão
         */
        "label": IHangarButtonProperties['label'];
        /**
          * Define um evento a ser emitido no momento do clique do botão, fazendo assim o one-way data-binding
         */
        "onButtonClick"?: (event: HangarButtonCustomEvent<MouseEvent>) => void;
        /**
          * Define o tamanho do botão. Valores possíveis: `default`, `large`, `compact`
         */
        "size"?: IHangarButtonProperties['size'];
    }
    interface IntrinsicElements {
        "hangar-button": HangarButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hangar-button": LocalJSX.HangarButton & JSXBase.HTMLAttributes<HTMLHangarButtonElement>;
        }
    }
}
