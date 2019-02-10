import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tutorials from './tutorials-component';

const expect = require('chai').expect;

configure({ adapter: new Adapter() });

describe('Tutorials', () => {
    it('should render with menu options', () => {
        const tutorials = mount(<Tutorials />);

        expect(tutorials.length).eql(1);
    });
});