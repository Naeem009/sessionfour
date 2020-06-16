import React from 'react';

export function Message(props){
    return (
        <h3>{props.name} has clicked this button {props.counter} times</h3>
    );
}