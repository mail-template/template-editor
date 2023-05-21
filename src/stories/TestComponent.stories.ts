import type { Meta, StoryObj } from '@storybook/react';
import TestComponent from '../components/TestComponent/index';

type Story = StoryObj<typeof meta>;

const meta = {
    component: TestComponent,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof TestComponent>;

export const Primary: Story = {};

export default meta;
