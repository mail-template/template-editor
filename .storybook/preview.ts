import { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT } from '@storybook/addon-viewport';

export const preview = {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
        defaultViewport: DEFAULT_VIEWPORT,
        viewports: INITIAL_VIEWPORTS,
    },
    options: {
        storySort: {
            order: [
                // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
                '*',
            ],
        },
    },
};
