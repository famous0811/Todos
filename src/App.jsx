import React,{useState} from 'react';
import stlyed,{createGlobalStyle} from 'styled-components';
import ControlList from './components/ControlList';
import Clalendar from './components/Clalendar';

const GolobalStyle=createGlobalStyle`
    *{
        margin: 0;
        font-size:14px;
    }
`;
function App() {
  var date=new Date();
  const [Month,setMonth]=useState(date.getMonth()+1);
  const [Day,setDay]=useState(date.getDate());

  function SetDays(time){
      setMonth(time.getMonth()+1);
      setDay(time.getDate());
  }
  return (
    <div>
      <GolobalStyle/>
      <h1>Todos</h1>
      <Clalendar setDays={SetDays}></Clalendar>
      <ControlList Month={Month} Days={Day}></ControlList>
    </div>
  );
}

export default App;
