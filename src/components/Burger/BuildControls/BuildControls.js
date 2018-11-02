import React from 'react';

import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl.js'

const controls = [
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}/>
        ))}
    </div>
);


export default buildControls;