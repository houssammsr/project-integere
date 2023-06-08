import { useCallback , useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MoveFunds.css";
const MoveFunds = () => {
  const navigate = useNavigate();

  const [moveFromValue, setMoveFromValue] = useState("");

  const [moveToValue, setMoveToValue] = useState("");

  const onCancelButtonClick = useCallback(() => {
    navigate("/admin/Funds");
  }, [navigate]);

  const onMoveFromInputChange = useCallback((event) => {
    const value = event.target.value;
    setMoveFromValue(value);
    setMoveToValue(value);
  }, []);
  
  const onMoveFundButtonClick = useCallback(() => {
    //TODO: Move funds Button
  }, []);

  return (
    <div className="move-funds">
      <div className="move-funds-container">
        <div className="move-from-and-move-to-containe">
          <div className="move-from-container">
            <div className="select-section-and-article-con">
              <div className="select-section-container">
                <div className="select-section">Select Section</div>
                <select className="select-section1">
                  <option value="المساعدات الإجتماعية">
                    المساعدات الإجتماعية
                  </option>
                  <option value="الخدمات الصحية">الخدمات الصحية</option>
                  <option value="التضامن">التضامن</option>
                  <option value="السلف الإجتماعية">السلف الإجتماعية</option>
                  <option value="النشاطات الثقافية">النشاطات الثقافية</option>
                </select>
              </div>
              <div className="select-section-container">
                <div className="select-section">Select Article</div>
                <select className="select-section1">
                  <option value="المساعدات الإجتماعية">
                    المساعدات الإجتماعية
                  </option>
                  <option value="الخدمات الصحية">الخدمات الصحية</option>
                  <option value="التضامن">التضامن</option>
                  <option value="السلف الإجتماعية">السلف الإجتماعية</option>
                  <option value="النشاطات الثقافية">النشاطات الثقافية</option>
                </select>
              </div>
            </div>
            <div className="article-and-title-container">
              <div className="article-details-titles">
                <div className="articlestitle">Articles</div>
                <div className="allocated-amounttitle">Allocated Amount</div>
                <div className="remaining-allocated-amounttit">
                  Remaining Allocated Amount
                </div>
                <div className="move-fromtitle">Move from</div>
              </div>
              <div className="article-details-and-input">
                <div className="article-name-container">
                  <div className="icsection">
                    <img className="vector-icon13" alt="" src="/vector1fun.svg" />
                  </div>
                  <div className="article-name">منحة التقاعد</div>
                </div>
                <div className="article-allocated-amount-conta">
                  <div className="ic-amount-grey">
                    <img className="vector-icon14" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container8">
                    <div className="article-allocated-amount">80,000</div>
                    <div className="article-allocated-amount">DZD</div>
                  </div>
                </div>
                <div className="article-allocated-amount-conta">
                  <div className="ic-amount">
                    <img className="vector-icon14" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container8">
                    <div className="article-allocated-amount">20,000</div>
                    <div className="article-allocated-amount">DZD</div>
                  </div>
                </div>
  
                <input className="move-from-input" type="text" value={moveFromValue} onChange={onMoveFromInputChange} />
              </div>
            </div>
          </div>
          <div className="move-from-container">
            <div className="select-section-and-article-con">
              <div className="select-section-container">
                <div className="select-section">Select Section</div>
                <select className="select-section1">
                  <option value="المساعدات الإجتماعية">
                    المساعدات الإجتماعية
                  </option>
                  <option value="الخدمات الصحية">الخدمات الصحية</option>
                  <option value="التضامن">التضامن</option>
                  <option value="السلف الإجتماعية">السلف الإجتماعية</option>
                  <option value="النشاطات الثقافية">النشاطات الثقافية</option>
                </select>
              </div>
              <div className="select-section-container">
                <div className="select-section">Select Article</div>
                <select className="select-section1">
                  <option value="المساعدات الإجتماعية">
                    المساعدات الإجتماعية
                  </option>
                  <option value="الخدمات الصحية">الخدمات الصحية</option>
                  <option value="التضامن">التضامن</option>
                  <option value="السلف الإجتماعية">السلف الإجتماعية</option>
                  <option value="النشاطات الثقافية">النشاطات الثقافية</option>
                </select>
              </div>
            </div>
            <div className="article-and-title-container">
              <div className="article-details-titles">
                <div className="articlestitle">Articles</div>
                <div className="allocated-amounttitle">Allocated Amount</div>
                <div className="remaining-allocated-amounttit">
                  Remaining Allocated Amount
                </div>
                <div className="move-totitle">Move to</div>
              </div>
              <div className="article-details-and-input">
                <div className="article-name-container">
                  <div className="icsection">
                    <img className="vector-icon13" alt="" src="/vector1fun.svg" />
                  </div>
                  <div className="article-name">منحة التقاعد</div>
                </div>
                <div className="article-allocated-amount-conta">
                  <div className="ic-amount-grey">
                    <img className="vector-icon14" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container8">
                    <div className="article-allocated-amount">80,000</div>
                    <div className="article-allocated-amount">DZD</div>
                  </div>
                </div>
                <div className="article-allocated-amount-conta">
                  <div className="ic-amount">
                    <img className="vector-icon14" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container8">
                    <div className="article-allocated-amount">20,000</div>
                    <div className="article-allocated-amount">DZD</div>
                  </div>
                </div>
                <input  className="move-to-input" type="text"  value={moveToValue}  readOnly />
              </div>
            </div>
          </div>
        </div>
        <div className="move-funds-buttons">
          <button className="cancel-buttonmvf" onClick={onCancelButtonClick}>
            <img className="cancel-buttonmvf-child" alt="" src="/line-13.svg" />
            <div className="cancel">CANCEL</div>
          </button>
          <button className="move-fund-button" onClick={onMoveFundButtonClick}>
            <img className="vector-icon19" alt="" src="/vector4.svg" />
            <div className="cancel">MOVE FUNDS</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoveFunds;
