import { useCallback } from "react";
import "./ResudialBalancePopUp.css";
const ResudialBalancePopUp = ({ onClose }) => {
  const onResudialExerciseButtonClick = useCallback(() => {
    //TODO: add resudial exercise button
  }, []);

  return (
    <div className="resudialbalancepopup">
      <div className="card-bodyblur-effects">
        <div className="resudial-balance-details">
          <div className="date-details">
            <div className="dateresu">Date</div>
            <input className="date-input" type="date" placeholder="0" />
          </div>
          <img className="date-icon" alt="" src="/dateicon.svg" />
          <div className="resudial-exercise-details">
            <div className="dateresu">Resudial exercise</div>
            <input
              className="resudial-exercise-input"
              type="text"
              placeholder="entre balance amount"
            />
          </div>
          <div className="recipe-designation">
            <div className="dateresu">Recipe Designation</div>
            <input
              className="recipe-designation-input"
              type="text"
              placeholder="entre recipe designation"
            />
          </div>
          <img className="dollar-icon" alt="" src="/dollaricon.svg" />
        </div>
        <button
          className="resudial-exercise-button"
          onClick={onResudialExerciseButtonClick}
        >
          <img className="plusicon" alt="" src="/plusicon2.svg" />
          <div className="resudial-exercise1">RESUDIAL EXERCISE</div>
        </button>
        <button className="exit-button" onClick={onClose}>
          <img className="x-icon" alt="" src="/x.svg" />
        </button>
      </div>
    </div>
  );
};

export default ResudialBalancePopUp;
