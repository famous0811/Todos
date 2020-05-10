import React, { useState,useEffort, useEffect} from 'react';
import styled from 'styled-components';
import Fotter from './Fotter';
import Getlist from './Getlist';
import List from './List';

let id=3;

function ControlList(props) {
    var days=props.Days;
    var Month=props.Month;
    var list;
    var length=0;

    useEffect(()=>{
        showListSet(nowstate);
    },[days]);

    const [nowstate,setnowstate]=useState("all");

    const [ListDatas,SetListDatas] = useState([{
        id:0,
        text:"일하기 싫당",
        clear:false,
        show:true,
        month:5,
        day:3
    },
    {
        id:1,
        text:"일하고 싶다",
        clear:true,
        show:true,
        month:5,
        day:30
    },
    {
        id:2,
        text:"일하기 싫어",
        clear:false,
        show:true,
        month:5,
        day:4
    }   
    ]);

    function Download(){
        var value=ListDatas.map((info)=>{return info.text+info.month+"/"+info.day});
        var element = document.createElement('a'); 
        element.setAttribute('href', 'data:text/plain;charset=utf-8,'+ encodeURIComponent(value.join('\n'))); 
        element.download="Todos.txt";
        element.click();
    }
    function clearlist(id){
        SetListDatas(ListDatas.map((info)=>info.id==id ? ({...info,clear:!info.clear}) : info));    
    }

    function deletelist(id){
        SetListDatas(ListDatas.filter((element) =>{return element.id!==id}));
    }

    list=ListDatas.map((info)=>{if(info.show || (info.month==Month && info.day==days))++length; return<List key={info.id} state={info} clearlist={clearlist} deletelist={deletelist}></List>});

    function Addlist(event){
        var value=event.target.value;
        if(event.keyCode!=13 || value=="") 
            return;

        event.target.value="";
        SetListDatas(ListDatas.concat({id:id++,text:value,clear:false,show:true,month:Month,day:days}));
    }

    function showListSet(showData){
        switch(showData){
            case "all":{
                SetListDatas(ListDatas.map((info)=>info.month==Month && info.day==days ? ({...info,show:true}) : ({...info,show:false})));
                setnowstate("all");
                break;
            }
            case "clear":{
                SetListDatas(ListDatas.map((info)=>info.clear && info.month==Month && info.day==days ? ({...info,show:true}) : ({...info,show:false})));
                setnowstate("clear");
                break;
            }
            case "active":{
                SetListDatas(ListDatas.map((info)=>!info.clear && info.month==Month && info.day==days ? ({...info,show:true}) : ({...info,show:false})));
                setnowstate("active");
                break;
            }
            case "allclear":{
                SetListDatas([]);
                break;
            }
        }
    }
    return (
        <div>
            <Getlist Addlist={Addlist} Download={Download}></Getlist>
            <div>
                {list}
            </div>
            <Fotter leight={length} nowstate={nowstate} showListSet={showListSet}></Fotter>
        </div>
    );
}

export default ControlList;