import './Popup.css';

const Popup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">

        {props.isolatedItem.map(itemObj => {
          return <div id={itemObj.id} className="item-popup">
            <h3>{itemObj.title}</h3>
            <p>{itemObj.body}</p>
          </div>
        })}
        
        <button
          className="close-btn"
          onClick={() => props.setButtonPopup(false)}>Close</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Popup;