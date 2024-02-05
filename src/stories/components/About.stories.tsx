import type { Meta, StoryObj } from '@storybook/react';
import { AboutContent } from '@Components/index';
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
    title: 'App/About',
    parameters: {
        layout: 'centered',
    },
    component: AboutContent,
    tags: ['autodocs'],
    argTypes: {
        subtitle: ['Subtitulo'],
        msg: ['Mensaje'],
    },
} satisfies Meta<typeof AboutContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        subtitle: 'Subtitulo',
        msg: texts.labels.mainMsg,
    },
};
