import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";

import Input from "./Input";


const setup = (initialState={}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    return wrapper;
}

describe('render', () => {

    describe('word has not been guessed', () => {

        test('renders the component without any error', () => {

        });

        test('renders the input box', () => {

        });

        test('renders the submit button', () => {

        });

    });

    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {success: false};
            wrapper = setup(initialState);
        })

        test('renders the component without any error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });

        test('does not render the input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);
        });

        test('does not render the submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        });

    });

});

describe('update state', () => {

});
