# hangar-button



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute  | Description                                                                                                                                                                           | Type                                                     | Default     |
| -------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------- |
| `disabled`           | `disabled` | Define o estado do botão, por padrão o botão é habilitado (disabled: `false`)                                                                                                         | `boolean`                                                | `false`     |
| `icons`              | `icons`    | Define se terá um ou mais ícones sendo exibidos na esquerda ou direita do botão. Se deseja apenas um ícone (por padrão do lado direito), pode apenas passar a string e não um objeto. | `string \| { left?: THangarIcon; right?: THangarIcon; }` | `undefined` |
| `label` _(required)_ | `label`    | Define a label de exibição do botão                                                                                                                                                   | `string`                                                 | `undefined` |
| `size`               | `size`     | Define o tamanho do botão. Valores possíveis: `default`, `large`, `compact`                                                                                                           | `"compact" \| "default" \| "large"`                      | `'default'` |


## Events

| Event         | Description                                                                                        | Type                      |
| ------------- | -------------------------------------------------------------------------------------------------- | ------------------------- |
| `buttonClick` | Define um evento a ser emitido no momento do clique do botão, fazendo assim o one-way data-binding | `CustomEvent<MouseEvent>` |


## Shadow Parts

| Part      | Description |
| --------- | ----------- |
| `"theme"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
