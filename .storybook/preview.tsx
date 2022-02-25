import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 11.1
import { Background } from './Background';
import { ThemeProvider } from '$application/theme/ThemeProvider';

export const decorators = [
  (Story: any, context: any) => {
    const { background } = context.parameters;

    return (
      <ThemeProvider>
        <Background noPadding={background?.noPadding}>
          <Story />
        </Background>
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  defaultLocale: 'en',
  locales: {
    en: { dir: 'ltr', name: 'English' },
    fa: { dir: 'rtl', name: 'Persian' },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};