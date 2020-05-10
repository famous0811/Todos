import React from 'react';
import styled from 'styled-components';

function Getlist(props) {
    return (
        <div>
            <input type="text" placeholder="what needs to be done?" onKeyUp={props.Addlist}/>
            <button onClick={props.Download}>download</button>
        </div>
    );
}

export default Getlist;