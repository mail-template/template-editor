import type { Meta, StoryObj } from '@storybook/react';
import { TestComponent } from './TestComponent';

const meta = {
    title: 'Example/Page',
    component: TestComponent,
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
