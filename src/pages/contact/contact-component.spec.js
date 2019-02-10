import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Contact from './contact-component';

const expect = require('chai').expect;

configure({ adapter: new Adapter() });

describe('Contact', () => {
    it('should render with menu options', () => {
        const contact = mount(<Contact />);

        expect(contact.length).eql(1);
    });
});