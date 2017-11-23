import React from 'react'
import {shallow} from 'enzyme'
import withShowOnHover from './withShowOnHover'

describe('withShowOnHover', () => {
  it('passes down props to the component to wrap', () => {
    const ComponentToWrap = ({dummyProp}) => (
      <div>{dummyProp}</div>
    )

    const EnhancedComponent = withShowOnHover(ComponentToWrap)

    const wrapper = shallow(
      <EnhancedComponent dummyProp="hello"/>
    )
    
    expect(wrapper.find('ComponentToWrap').props().dummyProp).toEqual('hello')
  })
  
  it('passes down the default hovered prop to the component to wrap', () => {
    const ComponentToWrap = ({dummyProp}) => (
      <div>{dummyProp}</div>
    )

    const EnhancedComponent = withShowOnHover(ComponentToWrap)

    const wrapper = shallow(
      <EnhancedComponent dummyProp="hello"/>
    )

    expect(wrapper.find('ComponentToWrap').props().hovered).toBe(false)
  })
  
  it('passes down a hovered prop of true on mouse enter to the component to wrap', () => {
    const ComponentToWrap = ({dummyProp}) => (
      <div>{dummyProp}</div>
    )

    const EnhancedComponent = withShowOnHover(ComponentToWrap)

    const wrapper = shallow(
      <EnhancedComponent dummyProp="hello"/>
    )

    wrapper.node.props.onMouseEnter()

    expect(wrapper.find('ComponentToWrap').props().hovered).toBe(true)
  })
  
  it('passes down a hovered prop of false on mouse enter to the component to wrap', () => {
    const ComponentToWrap = ({dummyProp}) => (
      <div>{dummyProp}</div>
    )

    const EnhancedComponent = withShowOnHover(ComponentToWrap)

    const wrapper = shallow(
      <EnhancedComponent dummyProp="hello"/>
    )

    wrapper.node.props.onMouseLeave()

    expect(wrapper.find('ComponentToWrap').props().hovered).toBe(false)
  })
})