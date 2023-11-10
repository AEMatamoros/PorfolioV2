import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../../components';
const texts = {
    type: 'ES',
    labels: {
        themeDark: 'Oscuro',
        themeLight: 'Original',
        languaje: 'Idioma',
        userTitle: 'Alexis Matamoros',
        userJob: 'Desarrollador Web',
        options: 'Opciones',
        mainTitle: 'Sobre Mi',
        mainMsg: `Mi nombre es Alexis Matamoros, soy Ingeniero en Sistemas con un alma entusiasta mis
      habilidades están enfocadas en el desarrollo de aplicaciones web con
      conocimientos sobre tecnologías fullstack, poseo muy buenas habilidades blandas
      , como buena capacidad de intercomunicación, trabajo en equipo,
      organización, creatividad y además de adapto fácilmente a cualquier
      situación o trabajo, te invito a conocerme un poco.`,
        mainHero: `¡Hola!, bienvenido a mi mundo`,
        cvButton: 'Descargar CV',
        frase: `"No importa que tan alta es la montaña, siempre hay un camino a la cima."`,
        homeTitle: 'Inicio',
        blogTitle: 'Blog',
        tecnologiesTitle: 'Tecnologias',
        contactTitle: 'Contacto',
        proyectsTitle: 'Proyectos',
        techsTitle: 'Tecnologias',
        experience: 'Experiencia',
        footerText: 'Generado con REACT, TailwindCSS, VSCode y mucho amor.',
    },
};

const meta = {
    title: 'App/Header',
    component: Header,
    //   parameters: {
    //     layout: "centered",
    //   },
    tags: ['autodocs'],
    argTypes: {
        currentTheme: {
            options: ['dark', 'light'],
            control: { type: 'radio' },
        },
        texts: {},
        handleTheme: () => {},
        handleLanguaje: () => {},
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        currentTheme: 'dark',
        texts: texts,
        handleTheme: () => {
            alert('Funcion para cambiar el tema');
        },
        handleLanguaje: () => {
            alert('Funcion para cambiar el idioma');
        },
    },
    decorators: [
        StoryE => (
            <div className="dark">
                <StoryE />
            </div>
        ),
    ],
};

export const Light: Story = {
    args: {
        currentTheme: 'light',
        texts: texts,
        handleTheme: () => {},
        handleLanguaje: () => {},
    },
};
