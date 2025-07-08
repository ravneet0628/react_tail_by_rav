declare module 'jest-axe' {
  import { MatcherFunction } from 'expect';
  import { Element } from 'domhandler/lib/node';

  export interface AxeResults {
    violations: any[];
    passes: any[];
    incomplete: any[];
    inapplicable: any[];
  }

  export const axe: (html: HTMLElement | string, options?: any) => Promise<AxeResults>;
  export const toHaveNoViolations: {
    toHaveNoViolations: MatcherFunction<AxeResults>;
  };
}

declare global {
  namespace jest {
    interface Matchers<R = void, T = {}> {
      toHaveNoViolations(): R;
    }
  }
}