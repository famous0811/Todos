import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

List.propTypes = {
    state:PropTypes.object
};

const Lists =styled.div`
    display:${(props)=>props.show ? 'block' :"none"};
    text-decoration:${(props)=> props.clear ? "line-through" : "none"};
`;

function List(props) {
    const state = props.state;
    return (
        <Lists show={state.show} clear={state.clear} onClick={()=>props.clearlist(state.id)} onDoubleClick={()=>props.deletelist(state.id)}>
            {state.text}
            {state.month}/{state.day}
        </Lists>
    );
}

export default List;