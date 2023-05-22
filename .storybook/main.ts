const config = {
    core: {
        // https://storybook.js.org/docs/react/builders/vite
        builder: '',
    },
    stories: ['../src/**/*.stories.@(ts|tsx)', '../src/**/*.stories.mdx'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
        '@storybook/addon-actions',
    ],

    docs: {
        autodocs: 'tag',
    },
};

module.exports = config;
