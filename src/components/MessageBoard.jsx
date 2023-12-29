import { useSelector, useDispatch } from "react-redux";
import { getText, addList, deleteList } from "../slices/messageBoardSlice";

function MessageBoard() {
  const stateText = useSelector((state) => {
    return state.stateText;
  });

  const dispatch = useDispatch();

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => {
              dispatch(getText(event.target.value));
            }}
            value={stateText.text}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => {
            dispatch(addList());
          }}
        >
          Submit
        </button>
      </div>
      <div className="board">
        {stateText.textList.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  dispatch(deleteList(index));
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
