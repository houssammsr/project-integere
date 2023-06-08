import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Allocate.css";

const Allocate = () => {
  const navigate = useNavigate();

  const [allocatedAmount, setAllocatedAmount] = useState(0);
  const [chaptername, setChapterName] = useState("");
  const [balances, setBalances] = useState([]);
  const [newBalances, setNewBalances] = useState([]);
  const [chapterId, setChapterId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch chapter ID from the database
        const chapterIdResponse = await fetch("/api/chapterId");
        const chapterIdData = await chapterIdResponse.json();
        setChapterId(chapterIdData.chapterId);

        // Fetch chapter
        const chapterResponse = await fetch('/api/chapters/${chapterIdData.chapterId}');
        const chapterData = await chapterResponse.json();
        setChapterName(chapterData.name);

        // Fetch balances
        const balancesResponse = await fetch('/api/balances?chapterId=${chapterIdData.chapterId}');
        const balancesData = await balancesResponse.json();
        setBalances(balancesData.balances);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onValidateButtonClick = useCallback(async () => {
    try {
      const updatedBalances = balances.map((balance, index) => {
        const newBalance = newBalances[index] || 0;
        // Save newBalance in the database
        fetch('/api/balances/${balance.id}' , {
          method: "PUT",
          body: JSON.stringify({ newBalance }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        return {
          ...balance,
          remainingAmount: balance.remainingAmount - newBalance,
        };
      });

      setBalances(updatedBalances);
      setNewBalances([]);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }, [balances, newBalances]);

  const onGoBackButtonClick = useCallback(() => {
    navigate("/admin/Funds");
  }, [navigate]);

  const handleBalanceChange = (index, value) => {
    const updatedNewBalances = [...newBalances];
    updatedNewBalances[index] = value;
    setNewBalances(updatedNewBalances);
  };

  useEffect(() => {
    if (chapterId !== null) {
      // Calculate the total allocated amount
      const totalAllocatedAmount = balances.reduce((total, balance) => total + balance.allocatedAmount, 0);
      setAllocatedAmount(totalAllocatedAmount);
    }
  }, [chapterId, balances]);

  if (chapterId === null) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  return (
    <div className="allocate5">
      <div className="allocate-and-button-container">
        <div className="allocate-container1">
          <div className="section-details5">
            <div className="section-name-container1">
              <div className="section-name-title1">Chapter name</div>
              <div className="section-name6">{chaptername}</div>
            </div>
            <div className="section-amount-details1">
              <div className="section-name-title1">Allocated Amount</div>
              <div className="section-amount-container1">
                <div className="amount-and-dzd-container15">
                  <div className="section-name-title1">{allocatedAmount}</div>
                  <div className="dzd15">DZD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="articles-container1">
            <div className="articles-details-titles1">
              <div className="articlestitle2">Articles</div>
              <div className="allocated-amounttitle2">Allocated Amount</div>
              <div className="remaining-allocated-amounttit2">Remaining Allocated Amount</div>
              <div className="add-new-balancetitle">Add New Balance</div>
            </div>
            <div className="articles-details1">
              {balances.map((balance, index) => (
                <div className="article-and-input" key={index}>
                  <div className="article-name-container2">
                    <div className="icsection2">
                      <img className="vector-icon22" alt="" src="/vector1fun.svg" />
                    </div>
                    <div className="div">{balance.article}</div>
                  </div>
                  <div className="article-allocated-amount-conta2">
                    <div className="ic-amount-grey2">
                      <img className="vector-icon23fun" alt="" src="/vector2.svg" />
                    </div>
                    <div className="amount-and-dzd-container16">
                      <div className="section-name-title1">{balance.allocatedAmount}</div>
                      <div className="section-name-title1">DZD</div>
                    </div>
                  </div>
                  <div className="article-allocated-amount-conta2">
                    <div className="icamount7">
                      <img className="vector-icon23fun" alt="" src="/vector2.svg" />
                    </div>
                    <div className="amount-and-dzd-container16">
                      <div className="section-name-title1">{balance.remainingAmount}</div>
                      <div className="section-name-title1">DZD</div>
                    </div>
                  </div>
                  <input
                    className="article-new-balance-input"
                    type="text"
                    value={newBalances[index] || ""}
                    onChange={(e) => handleBalanceChange(index, parseInt(e.target.value))}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="validate-buttonallo" onClick={onValidateButtonClick}>
          <img className="vector-icon37" alt="" src="/vector31.svg" />
          <div className="validate">VALIDATE</div>
        </button>
      </div>
      <button className="go-back-button2" onClick={onGoBackButtonClick}>
        <img className="vector-icon38" alt="" src="/vector3.svg" />
      </button>
    </div>
  );
};

export default Allocate;
