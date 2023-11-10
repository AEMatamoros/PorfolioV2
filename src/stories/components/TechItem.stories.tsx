import type { Meta, StoryObj } from '@storybook/react';
import { TechItem } from '../../components/Techs';

const meta = {
    title: 'App/TechItem',
    parameters: {
        layout: 'centered',
    },
    component: TechItem,
    tags: ['autodocs'],
    argTypes: {
        tec: {
            name: 'React',
            icon: 'fa-brands fa-react',
            hoverColor: 'blue',
        },
    },
} satisfies Meta<typeof TechItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        tec: {
            name: 'React',
            icon: 'fa-brands fa-react',
            hoverColor: 'text-blue-500',
        },
    },
};
