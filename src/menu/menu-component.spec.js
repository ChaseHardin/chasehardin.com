import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from './menu-component';
import { BrowserRouter } from 'react-router-dom';

const expect = require('chai').expect;

configure({ adapter: new Adapter() });

describe('Menu', () => {
    it('should have link configurations', () => {
        expect(getLink("[to='/']").length).eql(1);
        expect(getLink("[to='/blog']").length).eql(1);
        expect(getLink("[to='/tutorials']").length).eql(1);
        expect(getLink("[to='/contact']").length).eql(1);
    });

    function getLink(path) {
        return render().find(path);
    }

    function render() {
        return mount(
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        );
    }
});