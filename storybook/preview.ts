import type { Preview } from '@storybook/react';
import '../src/index.css'; // ou o caminho correto para seus estilos globais

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true, // Habilita table of contents
    },
  },
};

export default preview;
