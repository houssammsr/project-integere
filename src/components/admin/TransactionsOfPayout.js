import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionsOfPayout.css";
const TransactionsOfPayout = () => {
  const navigate = useNavigate();

  const onIncomeButtonClick = useCallback(() => {
    navigate("/admin/transactionsofincome");
  }, [navigate]);

  const onAllocationButtonClick = useCallback(() => {
    navigate("/admin/transactionsofallocation");
  }, [navigate]);

  const onTransferButtonClick = useCallback(() => {
    navigate("/admin/transactionsoftransfer");
  }, [navigate]);

  const onBtnPreviousClick = useCallback(() => {
    //TODO: go to previous
  }, []);

  const onBtnNextClick = useCallback(() => {
    //TODO: go to next
  }, []);

  return (
    <div className="transactions-of-payout">
      <div className="transactions-payout-container">
        <div className="buttonsbalancecontainersearc1">
          <div className="buttonsbalancecontainersear1">
            <div className="buttonsbalancecontainer1">
              <div className="transaction-types-buttons2">
                <button className="payout-button2">
                  <div className="payout2">Payout</div>
                </button>
                <button
                  className="income-button2"
                  onClick={onIncomeButtonClick}
                >
                  <div className="income2">Income</div>
                </button>
                <button
                  className="allocation-button2"
                  onClick={onAllocationButtonClick}
                >
                  <div className="income2">Allocation</div>
                </button>
                <button
                  className="transfer-button2"
                  onClick={onTransferButtonClick}
                >
                  <div className="income2">Transfer</div>
                </button>
              </div>
              <div className="balancecontainer1">
                <div className="text5">Total Withdraw Payout(s) balance</div>
                <div className="balance1">
                  <div className="amount-and-dzd-container13">
                    <div className="total-payout-balance">2,000,000</div>
                    <div className="dzd13">DZD</div>
                  </div>
                </div>
              </div>
            </div>
            <input
              className="search-input2"
              type="text"
              placeholder="search here..."
            />
          </div>
          <div className="transactions-container2">
            <div className="t-head2">
              <div className="transaction-id-title2">
                <div className="section-name-tit">Transaction ID</div>
              </div>
              <div className="full-name-title2">
                <div className="section-name-tit">Full Name</div>
              </div>
              <div className="article-name-title2">
                <div className="section-name-tit">Article Name</div>
              </div>
              <div className="section-name-title">
                <div className="section-name-tit">Section Name</div>
              </div>
              <div className="type-title2">
                <div className="section-name-tit">Type</div>
              </div>
              <div className="payment-method-title2">
                <div className="section-name-tit">Payment methode</div>
              </div>
              <div className="creation-date-title2">
                <div className="section-name-tit">Date</div>
              </div>
              <div className="amount-title2">
                <div className="section-name-tit">Amount</div>
              </div>
            </div>
            <div className="transactions-listing2">
              <div className="t-head2">
                <div className="transaction-id-title2">
                  <div className="section-name-var">#TR-0002</div>
                </div>
                <div className="full-name-title2">
                  <div className="section-name-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="section-name-var">منحة الوفاة</div>
                </div>
                <div className="section-name-title">
                  <div className="section-name-var">المساعدات الإجتماعية</div>
                </div>
                <div className="type-title2">
                  <div className="section-name-var">Payout</div>
                </div>
                <div className="payment-method-title2">
                  <div className="section-name-var">Cash</div>
                </div>
                <div className="creation-date-title2">
                  <div className="section-name-var">May 1, 2023</div>
                </div>
                <div className="amount-title2">
                  <div className="amount-and-dzd-container13">
                    <div className="section-name-var">400,000</div>
                    <div className="dzd14">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head2">
                <div className="transaction-id-title2">
                  <div className="section-name-var">#TR-0002</div>
                </div>
                <div className="full-name-title2">
                  <div className="section-name-var">Farouk bensoukehal</div>
                </div>
                <div className="article-name-title2">
                  <div className="section-name-var">
                    منحة ختان المولود الجديد
                  </div>
                </div>
                <div className="section-name-title">
                  <div className="section-name-var">المساعدات الإجتماعية</div>
                </div>
                <div className="type-title2">
                  <div className="section-name-var">Payout</div>
                </div>
                <div className="payment-method-title2">
                  <div className="section-name-var">Cash</div>
                </div>
                <div className="creation-date-title2">
                  <div className="section-name-var">May 1, 2023</div>
                </div>
                <div className="amount-title2">
                  <div className="amount-and-dzd-container13">
                    <div className="section-name-var">400,000</div>
                    <div className="dzd14">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head2">
                <div className="transaction-id-title2">
                  <div className="section-name-var">#TR-0002</div>
                </div>
                <div className="full-name-title2">
                  <div className="section-name-var">Moulay zakaria</div>
                </div>
                <div className="article-name-title2">
                  <div className="section-name-var">منحة الوفاة</div>
                </div>
                <div className="section-name-title">
                  <div className="section-name-var">المساعدات الإجتماعية</div>
                </div>
                <div className="type-title2">
                  <div className="section-name-var">Payout</div>
                </div>
                <div className="payment-method-title2">
                  <div className="section-name-var">Cash</div>
                </div>
                <div className="creation-date-title2">
                  <div className="section-name-var">May 1, 2023</div>
                </div>
                <div className="amount-title2">
                  <div className="amount-and-dzd-container13">
                    <div className="section-name-var">400,000</div>
                    <div className="dzd14">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head2">
                <div className="transaction-id-title2">
                  <div className="section-name-var">#TR-0002</div>
                </div>
                <div className="full-name-title2">
                  <div className="section-name-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="section-name-var">
                    منحة ختان المولود الجديد
                  </div>
                </div>
                <div className="section-name-title">
                  <div className="section-name-var">المساعدات الإجتماعية</div>
                </div>
                <div className="type-title2">
                  <div className="section-name-var">Payout</div>
                </div>
                <div className="payment-method-title2">
                  <div className="section-name-var">Cash</div>
                </div>
                <div className="creation-date-title2">
                  <div className="section-name-var">May 1, 2023</div>
                </div>
                <div className="amount-title2">
                  <div className="amount-and-dzd-container13">
                    <div className="section-name-var">400,000</div>
                    <div className="dzd14">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head2">
                <div className="transaction-id-title2">
                  <div className="section-name-var">#TR-0002</div>
                </div>
                <div className="full-name-title2">
                  <div className="section-name-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="section-name-var">منحة الوفاة</div>
                </div>
                <div className="section-name-title">
                  <div className="section-name-var">المساعدات الإجتماعية</div>
                </div>
                <div className="type-title2">
                  <div className="section-name-var">Payout</div>
                </div>
                <div className="payment-method-title2">
                  <div className="section-name-var">Cash</div>
                </div>
                <div className="creation-date-title2">
                  <div className="section-name-var">May 1, 2023</div>
                </div>
                <div className="amount-title2">
                  <div className="amount-and-dzd-container13">
                    <div className="section-name-var">400,000</div>
                    <div className="dzd14">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head2">
                <div className="transaction-id-title2">
                  <div className="section-name-var">#TR-0002</div>
                </div>
                <div className="full-name-title2">
                  <div className="section-name-var">Mansour Houssam</div>
                </div>
                <div className="article-name-title2">
                  <div className="section-name-var">منحة الوفاة</div>
                </div>
                <div className="section-name-title">
                  <div className="section-name-var">المساعدات الإجتماعية</div>
                </div>
                <div className="type-title2">
                  <div className="section-name-var">Payout</div>
                </div>
                <div className="payment-method-title2">
                  <div className="section-name-var">Cash</div>
                </div>
                <div className="creation-date-title2">
                  <div className="section-name-var">May 1, 2023</div>
                </div>
                <div className="amount-title2">
                  <div className="amount-and-dzd-container13">
                    <div className="section-name-var">400,000</div>
                    <div className="dzd14">DZD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-details-container2">
          <div className="nbr-of-shows-transactions-deta2">
            <div className="section-name-tit">Showing</div>
            <div className="section-name-tit">6</div>
            <div className="section-name-tit">from</div>
            <div className="section-name-tit">160</div>
          </div>
          <div className="change-page-buttons2">
            <button className="btnprevious2" onClick={onBtnPreviousClick}>
              <div className="previous-icone2">
                <img className="back-ic-icon4" alt="" src="/backic.svg" />
                <img className="back-ic-icon4" alt="" src="/backic.svg" />
              </div>
              <div className="previous2">Previous</div>
            </button>
            <button className="btnnext2" onClick={onBtnNextClick}>
              <div className="previous2">Next</div>
              <div className="previous-icone2">
                <img className="next-ic-icon4" alt="" src="/nextic.svg" />
                <img className="next-ic-icon4" alt="" src="/nextic1.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsOfPayout;
