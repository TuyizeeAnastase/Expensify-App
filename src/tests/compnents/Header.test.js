import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../compnents/Header';

test('should render Header corectly',()=>{
    const renderer=new ReactShallowRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
    
});

