import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExperienceCard } from '@Components/index';

const meta = {
    title: 'App/ExpCard',
    parameters: {
        layout: 'centered',
    },
    component: ExperienceCard,
    tags: ['autodocs'],
    argTypes: {
        place: {},
        currentLanguaje: ['ES'],
    },
} satisfies Meta<typeof ExperienceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        place: {
            name: 'WorkPlace',
            descriptionEN: 'Programing Teacher - FullStack',
            descriptionES: 'Maestro de programacion - FullStack',
            time: 'December 31, 2022 23:59:59',
            tecs: ['HTML', 'CSS', 'REACT', 'NodeJS', 'Figma'],
            current: true,
        },
        currentLanguaje: 'ES',
    },
    decorators: [
        StoryE => (
            <div style={{ width: '100%' }}>
                <StoryE />
            </div>
        ),
    ],
};
