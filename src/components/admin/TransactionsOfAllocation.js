import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TransactionsOfAllocation.css";
const TransactionsOfAllocation = () => {
  const navigate = useNavigate();

  const onPayoutButtonClick = useCallback(() => {
    navigate("/admin/TransactionsOfPayout");
  }, [navigate]);

  const onIncomeButtonClick = useCallback(() => {
    navigate("/admin/transactionsofincome");
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
    <div className="transactions-of-allocation">
      <div className="transactions-allocation-contai">
        <div className="buttonsbalancecontainersearc">
          <div className="buttonsbalancecontainersear">
            <div className="buttonsbalancecontainer">
              <div className="transaction-types-buttons1">
                <button
                  className="payout-button1"
                  onClick={onPayoutButtonClick}
                >
                  <div className="payout1">Payout</div>
                </button>
                <button
                  className="income-button1"
                  onClick={onIncomeButtonClick}
                >
                  <div className="payout1">Income</div>
                </button>
                <button className="allocation-button1">
                  <div className="allocation1">Allocation</div>
                </button>
                <button
                  className="transfer-button1"
                  onClick={onTransferButtonClick}
                >
                  <div className="payout1">Transfer</div>
                </button>
              </div>
              <div className="balancecontainer">
                <div className="text2">Total allocated balance</div>
                <div className="balance">
                  <div className="amount-and-dzd-container6">
                    <div className="total-allocated-balance">2,000,000</div>
                    <div className="dzd6">DZD</div>
                  </div>
                </div>
              </div>
            </div>
            <input
              className="search-input1"
              type="text"
              placeholder="search here..."
            />
          </div>
          <div className="transactions-container1">
            <div className="t-head1">
              <div className="transaction-id-title1">
                <div className="text2">Transaction ID</div>
              </div>
              <div className="related-id-title1">
                <div className="text2">Related ID</div>
              </div>
              <div className="full-name-title1">
                <div className="text2">Full Name</div>
              </div>
              <div className="article-name-title1">
                <div className="text2">Article Name</div>
              </div>
              <div className="type-title1">
                <div className="text2">Type</div>
              </div>
              <div className="payment-method-title1">
                <div className="text2">Payment methode</div>
              </div>
              <div className="creation-date-title1">
                <div className="text2">Date</div>
              </div>
              <div className="amount-title1">
                <div className="text2">Amount</div>
              </div>
            </div>
            <div className="transactions-listing1">
              <div className="t-head1">
                <div className="transaction-id-title1">
                  <div className="transaction-id-var6">#TR-0002</div>
                </div>
                <div className="related-id-title1">
                  <div className="transaction-id-var6">2</div>
                </div>
                <div className="full-name-title1">
                  <div className="transaction-id-var6">Mansour Houssam</div>
                </div>
                <div className="article-name-title1">
                  <div className="transaction-id-var6">منحة الوفاة</div>
                </div>
                <div className="type-title1">
                  <div className="transaction-id-var6">Allocation</div>
                </div>
                <div className="payment-method-title1">
                  <div className="transaction-id-var6">NULL</div>
                </div>
                <div className="creation-date-title1">
                  <div className="transaction-id-var6">May 1, 2023</div>
                </div>
                <div className="amount-title1">
                  <div className="amount-and-dzd-container6">
                    <div className="transaction-id-var6">400,000</div>
                    <div className="dzd7">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head1">
                <div className="transaction-id-title1">
                  <div className="transaction-id-var6">#TR-0002</div>
                </div>
                <div className="related-id-title1">
                  <div className="transaction-id-var6">2</div>
                </div>
                <div className="full-name-title1">
                  <div className="transaction-id-var6">Mansour Houssam</div>
                </div>
                <div className="article-name-title1">
                  <div className="transaction-id-var6">منحة الوفاة</div>
                </div>
                <div className="type-title1">
                  <div className="transaction-id-var6">Allocation</div>
                </div>
                <div className="payment-method-title1">
                  <div className="transaction-id-var6">NULL</div>
                </div>
                <div className="creation-date-title1">
                  <div className="transaction-id-var6">May 1, 2023</div>
                </div>
                <div className="amount-title1">
                  <div className="amount-and-dzd-container6">
                    <div className="transaction-id-var6">400,000</div>
                    <div className="dzd7">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head1">
                <div className="transaction-id-title1">
                  <div className="transaction-id-var6">#TR-0002</div>
                </div>
                <div className="related-id-title1">
                  <div className="transaction-id-var6">2</div>
                </div>
                <div className="full-name-title1">
                  <div className="transaction-id-var6">Mansour Houssam</div>
                </div>
                <div className="article-name-title1">
                  <div className="transaction-id-var6">منحة الوفاة</div>
                </div>
                <div className="type-title1">
                  <div className="transaction-id-var6">Allocation</div>
                </div>
                <div className="payment-method-title1">
                  <div className="transaction-id-var6">NULL</div>
                </div>
                <div className="creation-date-title1">
                  <div className="transaction-id-var6">May 1, 2023</div>
                </div>
                <div className="amount-title1">
                  <div className="amount-and-dzd-container6">
                    <div className="transaction-id-var6">400,000</div>
                    <div className="dzd7">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head1">
                <div className="transaction-id-title1">
                  <div className="transaction-id-var6">#TR-0002</div>
                </div>
                <div className="related-id-title1">
                  <div className="transaction-id-var6">2</div>
                </div>
                <div className="full-name-title1">
                  <div className="transaction-id-var6">Mansour Houssam</div>
                </div>
                <div className="article-name-title1">
                  <div className="transaction-id-var6">منحة الوفاة</div>
                </div>
                <div className="type-title1">
                  <div className="transaction-id-var6">Allocation</div>
                </div>
                <div className="payment-method-title1">
                  <div className="transaction-id-var6">NULL</div>
                </div>
                <div className="creation-date-title1">
                  <div className="transaction-id-var6">May 1, 2023</div>
                </div>
                <div className="amount-title1">
                  <div className="amount-and-dzd-container6">
                    <div className="transaction-id-var6">400,000</div>
                    <div className="dzd7">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head1">
                <div className="transaction-id-title1">
                  <div className="transaction-id-var6">#TR-0002</div>
                </div>
                <div className="related-id-title1">
                  <div className="transaction-id-var6">2</div>
                </div>
                <div className="full-name-title1">
                  <div className="transaction-id-var6">Mansour Houssam</div>
                </div>
                <div className="article-name-title1">
                  <div className="transaction-id-var6">منحة الوفاة</div>
                </div>
                <div className="type-title1">
                  <div className="transaction-id-var6">Allocation</div>
                </div>
                <div className="payment-method-title1">
                  <div className="transaction-id-var6">NULL</div>
                </div>
                <div className="creation-date-title1">
                  <div className="transaction-id-var6">May 1, 2023</div>
                </div>
                <div className="amount-title1">
                  <div className="amount-and-dzd-container6">
                    <div className="transaction-id-var6">400,000</div>
                    <div className="dzd7">DZD</div>
                  </div>
                </div>
              </div>
              <div className="t-head1">
                <div className="transaction-id-title1">
                  <div className="transaction-id-var6">#TR-0002</div>
                </div>
                <div className="related-id-title1">
                  <div className="transaction-id-var6">2</div>
                </div>
                <div className="full-name-title1">
                  <div className="transaction-id-var6">Mansour Houssam</div>
                </div>
                <div className="article-name-title1">
                  <div className="transaction-id-var6">منحة الوفاة</div>
                </div>
                <div className="type-title1">
                  <div className="transaction-id-var6">Allocation</div>
                </div>
                <div className="payment-method-title1">
                  <div className="transaction-id-var6">NULL</div>
                </div>
                <div className="creation-date-title1">
                  <div className="transaction-id-var6">May 1, 2023</div>
                </div>
                <div className="amount-title1">
                  <div className="amount-and-dzd-container6">
                    <div className="transaction-id-var6">400,000</div>
                    <div className="dzd7">DZD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-details-container1">
          <div className="nbr-of-shows-transactions-deta1">
            <div className="text2">Showing</div>
            <div className="text2">6</div>
            <div className="text2">from</div>
            <div className="text2">160</div>
          </div>
          <div className="change-page-buttons1">
            <button className="btnprevious1" onClick={onBtnPreviousClick}>
              <div className="previous-icone1">
                <img className="back-ic-icon2" alt="" src="/backic.svg" />
                <img className="back-ic-icon2" alt="" src="/backic.svg" />
              </div>
              <div className="previous1">Previous</div>
            </button>
            <button className="btnnext1" onClick={onBtnNextClick}>
              <div className="previous1">Next</div>
              <div className="previous-icone1">
                <img className="next-ic-icon2" alt="" src="/nextic.svg" />
                <img className="next-ic-icon2" alt="" src="/nextic1.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsOfAllocation;
