import React, { useState } from "react";
import "./RequestAdmin.css";
import { allRequests } from "./RequestData";
import { FaEye } from 'react-icons/fa';
import Pagination from "./Pagination";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faTimesCircle, faCircleCheck, faEllipsisVertical, faSearch } from '@fortawesome/free-solid-svg-icons';


const getStatusStyles = (request_status) => {
  if (request_status === "Paid") {
    return { color: "#428777" };
  } else if (request_status === "Pending") {
    return { color: "#D3CC16" };
  } else if (request_status === "Rejected") {
    return { color: "#EE4444" };
  } else if (request_status === "Accepted") {
    return { color: "#428777"}
  }
};

function RequestTable() {
  const [requests, setRequests] = useState(allRequests);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(requests.length / itemsPerPage);
  const navigate = useNavigate();
  
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter requests based on selected filter
  const filteredRequests = requests.filter((request) => {
    const isFilterMatched = selectedFilter === "All" || request.request_status === selectedFilter;
    const isSearchMatched = request.employee_name.toLowerCase().includes(searchTerm.toLowerCase());
    return isFilterMatched && isSearchMatched;
  });
  
  // Handle filter button click
  const handleFilterButtonClick = (filter) => {
    setSelectedFilter(filter);
    setCurrentPage(1); // Reset current page when changing the filter
  };
  
  // Update the requests displayed in the table based on the filteredRequests
  const displayedRequests = filteredRequests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  
  // Handle search form submit
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(1); // Reset current page when performing a search
  };

  const handlePendingRequestsClick = () => {
    navigate("/pending-requests"); // Navigate to the "/pending-requests" route
  };

  const handleRejectedRequestsClick = () => {
    navigate("/rejected-requests"); // Navigate to the "/pending-requests" route
  };

  const handlePaidRequestsClick = () => {
    navigate("/paid-requests"); // Navigate to the "/pending-requests" route
  };

  const handlePreviewClick = (requestId, requestStatus) => {
    
      navigate(`/request-detail/`);
    
  };

  return (
    <div className="request-table-container-versionv">
      <div className="request-filters">
      <button
  className={`filter-button-pending ${selectedFilter === "Pending" ? "active" : ""}`}
  onClick={handlePendingRequestsClick}
>
<FontAwesomeIcon icon={faCircleMinus} className="circle-minus"/> Pending Requests
</button>
<button
  className={`filter-button-rejected ${selectedFilter === "Rejected" ? "active" : ""}`}
  onClick={handleRejectedRequestsClick}
>
<FontAwesomeIcon icon={faTimesCircle} className="times-circle"/> Rejected Requests
</button>
        <button className="filter-button-accepted"><FontAwesomeIcon icon={faCircleCheck} className="circle-check"/> Accepted Requests</button>
        <button
  className={`filter-button-paid ${selectedFilter === "Paid" ? "active" : ""}`}
  onClick={handlePaidRequestsClick}
>
<FontAwesomeIcon icon={faCircleCheck} className="circle-check"/> Paid Requests
</button>
<form onSubmit={handleSearchFormSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </form>
      </div>
      <table className="table">
        <thead>
          <tr className="table-title">
            <th>Request ID</th>
            <th>Employee Name</th>
            <th>Article Name</th>
            <th>Chapter Name</th>
            <th>Amount</th>
            <th>Payment Methode</th>
            <th>Request Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((request) => (
              <tr key={request.request_id} className="table-container">
                <td>{request.request_id}</td>
                <td>{request.employee_name}</td>
                <td>{request.article_name}</td>
                <td>{request.chapter_name}</td>
                <td>
                  <div className="amount-cell">{request.amount}</div>
                </td>
                <td>{request.payment_methode}</td>
                <td className="request-status-cell">
                  <span style={getStatusStyles(request.request_status)}>{request.request_status}</span>
                </td>
                <td>
                  <button className="pay-button">
                  <FontAwesomeIcon icon={faCircleCheck} className="circle-check-pay"/> Pay
                  </button>
                </td>
                <td><FontAwesomeIcon icon={faEllipsisVertical} className="ellipsis" onClick={handlePreviewClick}/></td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default RequestTable;
