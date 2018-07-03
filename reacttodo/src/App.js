import React, { Component } from 'react';
import logo from './ToDo.png';
import Add from './Add.png';
import remove from './remove.png';
import edit from './edit.png';
import './App.css';
 
const stag = `Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text 
Text Text Text Text Text Text Text `

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App App-title">ToDo List</h1>
        </header>
        <div className="Selection BackgroundImage">
          <div id="InputBox">
            <input type="text" id="TaskInput" className="FieldInput" placeholder="Task"></input>
            <input type="datetime-local" id="DateInput" className="FieldInput"></input>
            <div className="Category">
              <div>
                <input type="checkbox" className="SingleItem" id="CbArbeit" ></input>
                <label className="Category RedFont">Arbeit</label>
              </div>
              <div>
                <input type="checkbox" className="SingleItem" id="CbSchule"></input>
                <label className="Category GreenFont">Schule</label>
              </div>
              <div>
                <input type="checkbox" className="SingleItem" id="CbPrivat"></input>
                <label className="Category BlueFont">Privat</label>
              </div>
            </div>
            <div id="AddButton" onClick={() => console.log('works!')}>
              <img src={Add} className="ButtonImage" alt="Failed" ></img>
            </div>
          </div>
          <div id="OutputBox">
              <div className="wrapper">
                <div><CreateToDoElement/></div>
                <div><CreateToDoElement/></div>
                <div><CreateToDoElement/></div>
              </div>
          </div>
        </div>
        
      </div>
    );
  }
}

class CreateToDoElement extends Component{
  render(){
    return(
      <div className="ToDoItem">
        <label id="OutputText" className="FontStyle TextField">{textFormat(stag)}</label>
        <label id="OutputDate" className="DateStyle">28.07.2018 - 18:00 Uhr</label>
        <label style={{'background-color': 'rgb(48, 142, 219)'}} className="CategoryDesign"></label>
        <div id="DelButton" className="card" onClick={() => console.log('works!')}>
          <img src={remove} className="ButtonImageDel" alt="Failed" ></img>
        </div>
        <div id="EditButton" className="card MargTop" onClick={() => console.log('works!')}>
          <img src={edit} className="ButtonImageDel" alt="Failed" ></img>
        </div>
      </div> 
  )}      
}

function textFormat(value){
  const splitted  = value.split(' ')
  let state = 0;
  let returningVal = '';
  splitted.forEach(element => {
    const elementSplit = element.split('')
    if(elementSplit.length > 20)   
    {
        console.log(elementSplit)
        elementSplit.forEach(item => {
        state++
        if( state === 20){
          returningVal += item + ' '
          state = 0
        }
        else
          returningVal+= item + ''
      })
      returningVal += ' '
    }
    else
    returningVal += element + ' '
  });

  return returningVal;
}

export default App;
