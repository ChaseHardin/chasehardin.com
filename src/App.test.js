import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Menu from './menu/menu-component';

const expect = require('chai').expect;

configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render menu', () => {
      const menu = render().find(Menu);

      expect(menu.length).eql(1);
  });

  function render() {
    return mount(<App />);
  }
});
