import React from 'react';
import { render } from '@testing-library/react';

// COMPONENTS
import Text from './Text';

let component;

describe('Text component', () => {
  beforeAll(() => {
    component = (props) => {
      return <Text {...props} />;
    };
  });

  it('should render text prop', () => {
    const props = {
        text: 'Hello Basic',
        size: 'm',
    }
    const { getByText } = render(component(props));

    expect(getByText('Hello Basic').textContent).toBeTruthy();
  });
});