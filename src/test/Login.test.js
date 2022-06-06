import React from 'react';
import {shallow,configure} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Login from '../Login';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../Navbar'
configure({adapter:new Adapter()})
configure({adapter:new ReactSixteenAdapter()})

let wrapper;

describe('App component is rendering',()=>
{
    it ('should render 2 <label>',()=>{
        wrapper=shallow(<Login/>);
        expect(wrapper.find('label')).toHaveLength(2)
    })

    it ('should render 1 <Navbar>',()=>{
        wrapper=shallow(<Login/>);
        expect(wrapper.find(Navbar)).toHaveLength(1)
    })
    it ('should render 1 <h1>',()=>{
        wrapper=shallow(<Login/>);
        expect(wrapper.find('h1')).toHaveLength(1)
        
    })
}

)
describe('Email test suite',()=>
{
    it ('state should be changed',()=>{
       const wrapper=shallow(<Login/>)
        wrapper.find('#name').simulate('change',{
           target:{name:'name',value:'sample@xyz.com'} 
        })
        expect(wrapper.state('name')).toEqual('sample@xyz.com');

    })
    it ('should show text',()=>{
        const wrapper =shallow(<Login/>)
        const mytext=wrapper.find('button')
        expect(mytext.text()).toBe('Login')
    })
});

