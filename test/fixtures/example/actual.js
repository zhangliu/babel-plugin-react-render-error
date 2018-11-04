import React from 'react';
import E from './e';
import App from './app';
import Father from './father';
import Son from './son';

const Index = (
    <App>
        <Father>
            <Son key='son'></Son>
        </Father>
    </App>
)

export default Index
