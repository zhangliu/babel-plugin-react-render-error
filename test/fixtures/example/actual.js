import React from 'react';
import E from './e';
import App from './app';
import Father from './father';
import Son from './son';

const Index = (
    <App>
        <Father>
            <Son key='son1'></Son>
            <Son key='son2'></Son>
            <Son key='son3'></Son>
        </Father>
    </App>
)

export default Index
