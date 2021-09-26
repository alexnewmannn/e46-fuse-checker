import { render } from '@testing-library/react';

const Providers = ({ children }: any) => {
  return children;
};

type Test = {
  wrapper: any;
};

const customRender = (ui: any, options = {}) =>
  render(ui, <Test>{ wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
