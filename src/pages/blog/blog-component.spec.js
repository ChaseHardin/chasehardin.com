import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Blog from './blog-component';

const expect = require('chai').expect;

configure({ adapter: new Adapter() });

describe('Blog', () => {
    it('should render with menu options', () => {
        const blog = mount(<Blog />);

        expect(blog.length).eql(1);
    });
});