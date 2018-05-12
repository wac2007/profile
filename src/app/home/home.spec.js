import React from 'react';
import { shallow } from 'enzyme';

import Home from './home';

describe('Home Component', () => {
  it('Should render component with success', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
