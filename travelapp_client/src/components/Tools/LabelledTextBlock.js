import * as React from 'react';

const LabelledTextBlock = props => {
    return (
        <ul className='ltb'>
            <li className='ltb-label'>{props.label}:</li>
            <li className='ltb-value'>{props.value}</li>
        </ul>
    );
}

export default LabelledTextBlock;