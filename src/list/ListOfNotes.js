import { RiCloseCircleLine } from 'react-icons/ri';
import './ListOfNotes.css';

const ListOfNotes = (props) => {
  const deleteItemFromList = id => {
    props.setListOfNotes(props.listOfNotes.filter(el => el.id !== id))
  }
  const isolateItem = id => {
    props.setIsolatedItem(props.listOfNotes.filter(el => el.id === id))
  }
  return (
    <div>
      {props.listOfNotes.map(itemObj => {
        return <div key={itemObj.id} className="item">
          <div className="title">
            <h3>{itemObj.title}</h3>
            <RiCloseCircleLine
              onClick={() => deleteItemFromList(itemObj.id)}
              className="delete-btn" />
          </div>

          <p>
            {itemObj.body.substr(0, 30) + "..."}
          </p>

          <button
            className="preview-btn"
            onClick={() => {
              props.setButtonPopup(true)
              isolateItem(itemObj.id)
            }}>Preview</button>
        </div>
      })}
    </div>
  )
}

export default ListOfNotes;