import React from 'react';
import styled from 'styled-components';

const Fotters =styled.div`
    display:${(props)=>props.show ? 'block' :"none"};
`;

const Contents=styled.div`
    border: ${(props)=>props.nowstate ? "solid 1px pink" : "none"};
&:hover{
        border:solid 1px pink;
    }
`;

function Fotter(props) {
    var all,clear,active=false;

    switch(props.nowstate){
        case "all":{
            all=true;
            break;
        }
        case "clear":{
            clear=true;
            break;
        }
        case "active":{
            active=true;
            break;
        }
    }
    return (
        <Fotters show={props.leight}>
            <div>{props.leight} items left</div>
            <Contents id="all" nowstate={all} onClick={()=>props.showListSet("all")}>all</Contents>
            <Contents nowstate={clear} onClick={()=>props.showListSet("clear")}>clear</Contents>
            <Contents nowstate={active} onClick={()=>props.showListSet("active")}>active</Contents>
            <Contents onClick={()=>props.showListSet("allclear")}>clear completed</Contents>
        </Fotters>
    );
}

export default Fotter;