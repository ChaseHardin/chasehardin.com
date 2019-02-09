import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from './menu-component';

const expect = require('chai').expect;

configure({ adapter: new Adapter() });

describe('Menu', () => {
    it('should render with menu options', () => {
        const menu = mount(<Menu />);
        
        expect(getNavLinkText(menu, 'home')).eql('Home');
        expect(getNavLinkText(menu, 'blog')).eql('Blog');
        expect(getNavLinkText(menu, 'tutorials')).eql('Tutorials');
        expect(getNavLinkText(menu, 'contact')).eql('Contact');
    });

    function getNavLinkText(component, name) {
        return component.find(`[name='${name}']`).text();
    }
});