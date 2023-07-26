import type { Preview } from '@storybook/web-components';
import { defineCustomElements } from '../loader';
import '../src/style/global.scss';
import './custom-styles.scss';

defineCustomElements();

const preview: Preview = {
    parameters: {
        layout: 'centered',
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
