import { newSpecPage } from '@stencil/core/testing';
import { HangarButtonComponent } from '../hangar-button';

describe('hangar-button', () => {
	it('renders', async () => {
		const page = await newSpecPage({
			components: [HangarButtonComponent],
			html: '<hangar-button></hangar-button>',
		});
		expect(page.root).toEqualHtml(`
            <hangar-button>
                <mock:shadow-root>
                <slot></slot>
                </mock:shadow-root>
            </hangar-button>
        `);
	});
});
