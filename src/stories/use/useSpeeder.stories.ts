import type { Meta, StoryObj } from '@storybook/react';
import { UseSpeederPage } from './useSpeeder.page';


const meta = {
    title: 'Use/useSpeeder',
    component: UseSpeederPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof UseSpeederPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UseSpeeder: Story = {
    args: {
        sparator: "-"
    }
};
