import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionsOfIncome.css";
const TransactionsOfIncome = () => {
  const navigate = useNavigate();

  const onPayoutButtonClick = useCallback(() => {
    navigate("/admin/TransactionsOfPayout");
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
    <div className="transactions-of-income">
      <div className="transactions-income-container">
        <div className="buttonsbalancecontainersearc2">
          <div className="buttonsbalancecontainersear2">
            <div className="buttonsbalancecontainer2">
              <div className="transaction-types-buttons3">
                <button
                  className="payout-button3"
                  onClick={onPayoutButtonClick}
                >
                  <div className="payout3">Payout</div>
                </button>
                <button className="income-button3">
                  <div className="income3">Income</div>
                </button>
                <button
                  className="allocation-button3"
                  onClick={onAllocationButtonClick}
                >
                  <div className="payout3">Allocation</div>
                </button>
                <button
                  className="transfer-button3"
                  onClick={onTransferButtonClick}
                >
                  <div className="payout3">Transfer</div>
                </button>
              </div>
              <div className="balancecontainer2">
                <div className="text8">Total Income Balance</div>
                <div className="balance2">
                  <div className="amount-and-dzd-container20">
                    <div className="total-income-balance">2,000,000</div>
                    <div className="dzd20">DZD</div>
                  </div>
                </div>
              </div>
            </div>
            <input
              className="search-input3"
              type="text"
              placeholder="search here..."
            />
          </div>
          <div className="transactions-container3">
            <div className="t-head3">
              <div className="transaction-id-title3">
                <div className="text8">Transaction ID</div>
              </div>
              <div className="full-name-title3">
                <div className="text8">Full Name</div>
              </div>
              <div className="related-id-title2">
                <div className="text8">Related ID</div>
              </div>
              <div className="type-title3">
                <div className="text8">Type</div>
              </div>
              <div className="payment-method-title3">
                <div className="text8">Payment methode</div>
              </div>
              <div className="creation-date-title3">
                <div className="text8">Date</div>
              </div>
              <div className="amount-title3">
                <div className="text8">Amount</div>
              </div>
            </div>
            <div className="transactions-listing3">
              <div className="t-head3">
                <div className="transaction-id-title3">
                  <div className="transaction-id-var18">#TR-0002</div>
                </div>
                <div className="full-name-title3">
                  <div className="transaction-id-var18">Mansour Houssam</div>
                </div>
                <div className="related-id-title2">
                  <div className="transaction-id-var18">NULL</div>
                </div>
                <div className="type-title3">
                  <div className="transaction-id-var18">Income</div>
                </div>
                <div className="payment-method-title3">
                  <div className="transaction-id-var18">Cash</div>
                </div>
                <div className="creation-date-title3">
                  <div className="transaction-id-var18">May 1, 2023</div>
                </div>
                <div className="amount-title3">
                  <div className="amount-and-dzd-container20">
                    <div className="transaction-id-var18">400,000</div>
                    <div className="dzd21">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head3">
                <div className="transaction-id-title3">
                  <div className="transaction-id-var18">#TR-0002</div>
                </div>
                <div className="full-name-title3">
                  <div className="transaction-id-var18">Mansour Houssam</div>
                </div>
                <div className="related-id-title2">
                  <div className="transaction-id-var18">NULL</div>
                </div>
                <div className="type-title3">
                  <div className="transaction-id-var18">Income</div>
                </div>
                <div className="payment-method-title3">
                  <div className="transaction-id-var18">Cash</div>
                </div>
                <div className="creation-date-title3">
                  <div className="transaction-id-var18">May 1, 2023</div>
                </div>
                <div className="amount-title3">
                  <div className="amount-and-dzd-container20">
                    <div className="transaction-id-var18">400,000</div>
                    <div className="dzd21">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head3">
                <div className="transaction-id-title3">
                  <div className="transaction-id-var18">#TR-0002</div>
                </div>
                <div className="full-name-title3">
                  <div className="transaction-id-var18">Mansour Houssam</div>
                </div>
                <div className="related-id-title2">
                  <div className="transaction-id-var18">NULL</div>
                </div>
                <div className="type-title3">
                  <div className="transaction-id-var18">Income</div>
                </div>
                <div className="payment-method-title3">
                  <div className="transaction-id-var18">Cash</div>
                </div>
                <div className="creation-date-title3">
                  <div className="transaction-id-var18">May 1, 2023</div>
                </div>
                <div className="amount-title3">
                  <div className="amount-and-dzd-container20">
                    <div className="transaction-id-var18">400,000</div>
                    <div className="dzd21">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head3">
                <div className="transaction-id-title3">
                  <div className="transaction-id-var18">#TR-0002</div>
                </div>
                <div className="full-name-title3">
                  <div className="transaction-id-var18">Mansour Houssam</div>
                </div>
                <div className="related-id-title2">
                  <div className="transaction-id-var18">NULL</div>
                </div>
                <div className="type-title3">
                  <div className="transaction-id-var18">Income</div>
                </div>
                <div className="payment-method-title3">
                  <div className="transaction-id-var18">Cash</div>
                </div>
                <div className="creation-date-title3">
                  <div className="transaction-id-var18">May 1, 2023</div>
                </div>
                <div className="amount-title3">
                  <div className="amount-and-dzd-container20">
                    <div className="transaction-id-var18">400,000</div>
                    <div className="dzd21">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head3">
                <div className="transaction-id-title3">
                  <div className="transaction-id-var18">#TR-0002</div>
                </div>
                <div className="full-name-title3">
                  <div className="transaction-id-var18">Mansour Houssam</div>
                </div>
                <div className="related-id-title2">
                  <div className="transaction-id-var18">NULL</div>
                </div>
                <div className="type-title3">
                  <div className="transaction-id-var18">Income</div>
                </div>
                <div className="payment-method-title3">
                  <div className="transaction-id-var18">Cash</div>
                </div>
                <div className="creation-date-title3">
                  <div className="transaction-id-var18">May 1, 2023</div>
                </div>
                <div className="amount-title3">
                  <div className="amount-and-dzd-container20">
                    <div className="transaction-id-var18">400,000</div>
                    <div className="dzd21">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head3">
                <div className="transaction-id-title3">
                  <div className="transaction-id-var18">#TR-0002</div>
                </div>
                <div className="full-name-title3">
                  <div className="transaction-id-var18">Mansour Houssam</div>
                </div>
                <div className="related-id-title2">
                  <div className="transaction-id-var18">NULL</div>
                </div>
                <div className="type-title3">
                  <div className="transaction-id-var18">Income</div>
                </div>
                <div className="payment-method-title3">
                  <div className="transaction-id-var18">Cash</div>
                </div>
                <div className="creation-date-title3">
                  <div className="transaction-id-var18">May 1, 2023</div>
                </div>
                <div className="amount-title3">
                  <div className="amount-and-dzd-container20">
                    <div className="transaction-id-var18">400,000</div>
                    <div className="dzd21">DZD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-details-container3">
          <div className="nbr-of-shows-transactions-deta3">
            <div className="text8">Showing</div>
            <div className="text8">6</div>
            <div className="text8">from</div>
            <div className="text8">160</div>
          </div>
          <div className="change-page-buttons3">
            <button className="btnprevious3" onClick={onBtnPreviousClick}>
              <div className="previous-icone3">
                <img className="back-ic-icon6" alt="" src="/backic.svg" />
                <img className="back-ic-icon6" alt="" src="/backic.svg" />
              </div>
              <div className="previous3">Previous</div>
            </button>
            <button className="btnnext3" onClick={onBtnNextClick}>
              <div className="previous3">Next</div>
              <div className="previous-icone3">
                <img className="next-ic-icon6" alt="" src="/nextic.svg" />
                <img className="next-ic-icon6" alt="" src="/nextic1.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsOfIncome;
