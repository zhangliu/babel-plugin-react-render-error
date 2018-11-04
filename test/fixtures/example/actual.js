import React from 'react';
import E from './e';
import App from './app';
import Father from './father';
import Son from './son';

class FF extends React.Component {
    render() {
        return <Father>{ this.props.children || null }</Father>
    }
}

const Index = (
    <div>
        {[1, 2].map(v => (
            <FF key={v}>
                <span key='son1'>3333</span>
            </FF>
        ))}
    </div>
)

export default <Index />
