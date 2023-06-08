import { useCallback } from "react";
import "./NewBalancePopUp.css";
const NewBalancePopUp = ({ onClose }) => {
  const onAddBalanceButtonClick = useCallback(() => {
    //TODO: add balance button
  }, []);

  return (
    <div className="newbalancepopup">
      <div className="card-bodyblur-effects1">
        <div className="new-balance-details">
          <div className="date-details1">
            <div className="new-balance">Date</div>
            <input className="date-input1" type="date" placeholder="0" />
          </div>
          <img className="date-icon1" alt="" src="/dateicon.svg" />
          <div className="new-balance-amount-details">
            <div className="new-balance">New balance</div>
            <input
              className="new-balance-input"
              type="text"
              placeholder="entre balance amount"
            />
          </div>
          <div className="recipe-designation-details">
            <div className="new-balance">Recipe Designation</div>
            <input
              className="recipe-designation-input1"
              type="text"
              placeholder="entre recipe designation"
            />
          </div>
          <img className="dollar-icon1" alt="" src="/dollaricon1.svg" />
        </div>
        <button
          className="add-balance-button"
          onClick={onAddBalanceButtonClick}
        >
          <img className="plusicon1" alt="" src="/plusicon1.svg" />
          <div className="add-balance">ADD BALANCE</div>
        </button>
        <button className="exit-button1" onClick={onClose}>
          <img className="x-icon1" alt="" src="/x.svg" />
        </button>
      </div>
    </div>
  );
};

export default NewBalancePopUp;
