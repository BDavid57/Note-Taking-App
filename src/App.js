import React, { useState, useEffect } from 'react';
import './App.css';
// Import Components
import Popup from './popup/Popup';
import Input from './input/Input';
import ListOfNotes from './list/ListOfNotes';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [currentItem, setCurrentItem] = useState('')
  const [currentText, setCurrentText] = useState('')
  const [isolatedItem, setIsolatedItem] = useState([])
  const [listOfNotes, setListOfNotes] = useState(
    localStorage.listOfNotes ? JSON.parse(localStorage.listOfNotes) : []
  )

  useEffect(() => {
    localStorage.setItem('listOfNotes', JSON.stringify(listOfNotes))
  }, [listOfNotes])

  return (
    <div className="App">

      <div className="side-bar">
        <ListOfNotes
          listOfNotes={listOfNotes}
          setButtonPopup={setButtonPopup}
          setListOfNotes={setListOfNotes}
          isolatedItem={isolatedItem}
          setIsolatedItem={setIsolatedItem} />
      </div>

      <div className="input-area">
        <h1>Noted</h1>
        <Input
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          currentText={currentText}
          setCurrentText={setCurrentText}
          listOfNotes={listOfNotes}
          setListOfNotes={setListOfNotes} />
      </div>

      <Popup
        trigger={buttonPopup}
        setButtonPopup={setButtonPopup}
        listOfNotes={listOfNotes}
        setListOfNotes={setListOfNotes}
        isolatedItem={isolatedItem} />
    </div>
  );
}

export default App;
