/**
 * Summary.
 *  main test file.
 *
 * Description
 *  This is the main test file
 *
 * @file   This main test file for class .
 * @author teeeemoji.
 * @since 2019/4/12
 */

import TextAreaNoScroll from '../src';
import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon'


Enzyme.configure({
    adapter: new Adapter()
});

const setup = ({ ...props }) => {
    const wrapper = shallow(<TextAreaNoScroll {...props} />);
    return {
        props,
        wrapper,
    };
};


// 第一步：测试组件是否渲染成功
describe('test suite: Test component', () => {
    it('case: 组件render成功', () => {
        const wrapper = shallow(<TextAreaNoScroll />);

        expect(wrapper.find('.textarea-no-scroll-box').length).toEqual(1);
    });

    it('case: onChange事件被触发', () => {
        const value = 'edit';

        const {wrapper, props} = setup({
            onChange: jest.fn()
        });

        wrapper.find('textarea').simulate('change', {value});
        expect(props.onChange).toBeCalledWith({value});
    });

    it('case: limitRest正确渲染', () => {
        const value = 'edit';

        const {wrapper, props} = setup({
            value,
            limit: 100
        });

        expect(wrapper.find('.reset-number').text()).toEqual(`${props.limit - value.length}`);
    });

    it('componentDidUpdate', () => {
        const value = 'edit';

        const {wrapper, props} = setup({
            value
        });
        console.log(TextAreaNoScroll.prototype.componentDidUpdate)
        const fn = sinon.spy(TextAreaNoScroll.prototype, 'componentDidUpdate');
        // wrapper.setProps({
        //     role: 'admin'
        // });
        expect(fn.calledOnce).toBeTruthy();
    })
});