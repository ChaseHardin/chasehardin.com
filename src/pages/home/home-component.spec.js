import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './home-component';

const expect = require('chai').expect;

configure({ adapter: new Adapter() });

describe('Home', () => {
    it('should render with menu options', () => {
        const contact = mount(<Home />);

        expect(contact.length).eql(1);
    });
});