import React from 'react';
// import the styled components
import { Inner } from './styles/jumbotron';

// for compound components always pass down the children
export default function Jumbotron({children , direction = 'row', ...restProps }) {
    return (
        <Inner direction={direction}>
            <p>Jumbotron again</p>
        </Inner>
    );
}