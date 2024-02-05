import type { Meta, StoryObj } from '@storybook/react';
import { HeroContent } from '@Components/index';

const meta = {
    title: 'App/Hero',
    parameters: {
        layout: 'centered',
    },
    component: HeroContent,
    tags: ['autodocs'],
    argTypes: {
        title: ['Titulo'],
        subtitle: ['Subtitulo'],
        msg: ['Mensaje'],
    },
} satisfies Meta<typeof HeroContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        title: 'Titulo',
        subtitle: 'Subtitulo',
        msg: 'Mensaje',
    },
};
