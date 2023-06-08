import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Funds.css";

const Funds = () => {
  const navigate = useNavigate();
  const [allocatedAmount, setAllocatedAmount] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [chapterData, setChapterData] = useState([]);

  const fetchChapterData = async () => {
    try {
      const response = await fetch("your-django-api-url");
      const data = await response.json();
      setChapterData(data);
    } catch (error) {
      console.error("Error fetching chapter data:", error);
    }
  };

  useEffect(() => {
    fetchChapterData();
    // Fetch allocated amount separately and set it using setAllocatedAmount
    const fetchAllocatedAmount = async () => {
      try {
        const response = await fetch("your-django-allocated-amount-url");
        const data = await response.json();
        setAllocatedAmount(data.allocatedAmount);
      } catch (error) {
        console.error("Error fetching allocated amount:", error);
      }
    };
    fetchAllocatedAmount();
    // Fetch total budget and remaining budget separately and set them using setTotalBudget and setRemainingBudget
    const fetchBudgetData = async () => {
      try {
        const response = await fetch("your-django-budget-data-url");
        const data = await response.json();
        setTotalBudget(data.totalBudget);
        setRemainingBudget(data.remainingBudget);
      } catch (error) {
        console.error("Error fetching budget data:", error);
      }
    };
    fetchBudgetData();
  }, []);

  const onViewArticlesButtonClick = useCallback(() => {
    navigate("/admin/Articles");
  }, [navigate]);

  const onAllocateButtonClick = useCallback(() => {
    navigate("/admin/Allocate");
  }, [navigate]);

  const onBudjetDetailsContainerClick = useCallback(() => {
    navigate("/admin/Budget");
  }, [navigate]);

  const onMoveFundsButtonClick = useCallback(() => {
    navigate("/admin/MoveFunds");
  }, [navigate]);

  return (
    <div className="funds">
      <div className="funds-container">
        <div className="section-and-amount-container">
          <div className="allocated-sections-amount-cont">
            <b className="allocated-sections-amount">
              Allocated Sections Amount
            </b>
            <div className="alocated-sections-amount">
              <div className="amount-and-dzd-container28">
                <div className="allocated-sections-amount1">{allocatedAmount}</div>
                <div className="dzd28">DZD</div>
              </div>
            </div>
          </div>
          <div className="sections-container">
            {chapterData.map((chapter, index) => (
              <div className="section" key={index}>
                <div className="total-budjet">{chapter.title}</div>
                <div className="section-details-container">
                  <div className="section-allocated-amount-conta">
                    <div className="icamount11">
                      <img className="vector-icon41" alt="" src="/vector5.svg" />
                    </div>
                    <div className="second-section-allocated-amoun">
                      <div className="amount-and-dzd-container28">
                        <div className="allocated-sections-amount1">
                          {chapter.allocatedAmount}
                        </div>
                        <div className="allocated-sections-amount1">DZD</div>
                      </div>
                      <div className="allocated-amount2">Allocated Amount</div>
                    </div>
                  </div>
                  <button
                    className="view-articles-button"
                    onClick={onViewArticlesButtonClick}
                  >
                    <div className="icarticles">
                      <img className="vector-icon42" alt="" src="/vector6.svg" />
                    </div>
                    <div className="view-articles">View Articles</div>
                  </button>
                  <button
                    className="allocate-button"
                    onClick={onAllocateButtonClick}
                  >
                    <div className="icalocate">
                      <img
                        className="alocate-icon"
                        alt=""
                        src="/alocateicon.svg"
                      />
                    </div>
                    <div className="allocate1">Allocate</div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="budjet-and-button-container">
          <div
            className="budjet-details"
            onClick={onBudjetDetailsContainerClick}
          >
            <div className="total-budget-container1">
              <div className="allocated-sections-amount">Total Budget</div>
              <div className="total-budget-amount-container1fund">
                <div className="amount-and-dzd-container34">
                  <div className="total-budjet">{totalBudget}</div>
                  <div className="total-budjet">DZD</div>
                </div>
              </div>
            </div>
            <div className="remaining-budget-container1">
              <div className="allocated-sections-amount">Remaining Budget</div>
              <div className="total-budget-amount-container1fund">
                <div className="amount-and-dzd-container34">
                  <div className="total-budjet">{remainingBudget}</div>
                  <div className="total-budjet">DZD</div>
                </div>
              </div>
            </div>
            <div className="icamount16">
              <img className="vector-icon51" alt="" src="/vector5.svg" />
            </div>
            <button className="budget-icon">
              <img className="vector-icon52" alt="" src="/vector8.svg" />
            </button>
          </div>
          <button
            className="move-funds-button"
            onClick={onMoveFundsButtonClick}
          >
            <img className="vector-icon53" alt="" src="/vector9.svg" />
            <div className="move-funds-button1">MOVE FUNDS</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Funds;