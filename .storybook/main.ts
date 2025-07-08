import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from 'vite';
import { resolve } from 'path';
import tailwindcssPostcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

const config: StorybookConfig = {
  stories: [
    "../src/docs/**/*.mdx", 
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [
            tailwindcssPostcss,
            autoprefixer,
          ],
        },
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
          '@/components': resolve(__dirname, '../src/components'),
          '@/hooks': resolve(__dirname, '../src/hooks'),
          '@/utils': resolve(__dirname, '../src/utils'),
          '@/types': resolve(__dirname, '../src/types'),
        },
      },
      define: {
        global: 'globalThis',
      },
    });
  },
  staticDirs: ['../public'],
};

export default config; 