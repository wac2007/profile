import React from 'react';
import { shallow } from 'enzyme';

import Title from './title';

describe('Title Component', () => {
  it('Should match title snapshot', () => {
    const titleComponent = shallow(<Title title="Hello World" icon="profile" />);
    expect(titleComponent).toMatchSnapshot();
  });
});
