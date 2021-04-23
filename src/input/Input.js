import uuid from 'react-uuid';
import './Input.css';

const Input = (props) => {
  const addNoteToList = () => {
    const newNote = {
      id: uuid(),
      title: props.currentItem,
      body: props.currentText,
    }

    props.setListOfNotes([...props.listOfNotes, newNote])
    props.setCurrentItem('')
    props.setCurrentText('')
  }

  const addOnKeyPress = e => (e.key === 'Enter' ? addNoteToList() : null)

  return (
    <div>
      <div className="input-title">
        <input
          placeholder="Add A Title"
          value={props.currentItem}
          onChange={e => props.setCurrentItem(e.target.value)}
          onKeyDown={addOnKeyPress} />
        <button 
          className="add-btn"
          onClick={addNoteToList}>Add Note</button>
      </div>
      
      <div className="input-text">
        <textarea
          placeholder="Add Your Text Here"
          value={props.currentText}
          onChange={e => props.setCurrentText(e.target.value)}
          onKeyDown={addOnKeyPress}
          cols="95"
          rows="25" />
      </div>
    </div>
  );
}

export default Input;