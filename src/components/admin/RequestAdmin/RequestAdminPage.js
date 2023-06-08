import React, { useState, useEffect } from "react";
import "./RequestAdminPage.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { FaEye } from 'react-icons/fa';
import Pagination from "./Pagination";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faTimesCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const getStatusStyles = (request_status) => {
  if (request_status === "Paid") {
    return { color: "#428777" };
  } else if (request_status === "Pending") {
    return { color: "#D3CC16" };
  } else if (request_status === "Rejected") {
    return { color: "#EE4444" };
  }
};

function RequestTable() {
  const [requests, setRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(requests.length / itemsPerPage);
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter requests based on selected filter
  const filteredRequests = requests.filter((request) => {
    if (selectedFilter === "All") {
      return true; // Show all requests
    } else {
      return request.request_status === selectedFilter; // Show requests with matching status
    }
  });

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/request/');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

 
  
  
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

  const handleAcceptedRequestsClick = () => {
    navigate('/request-admin'); 
  };

  const handlePreviewClick = (requestId, requestStatus) => {
    if (requestStatus === "Pending") {
      navigate(`/request-detail-pending/`);
    } else {
      navigate(`/request-detail/`);
    }
  };
  
  return (

    <Navbar />,

    <div className="request-table-container-adminpage">
      <div className="request-filters">
        <button
          className={`filter-button-pending ${selectedFilter === "Pending" ? "active" : ""}`}
          onClick={() => handleFilterButtonClick("Pending")}
        >
          <FontAwesomeIcon icon={faCircleMinus} className="circle-minus" /> Pending Requests
        </button>
        <button
          className={`filter-button-rejected ${selectedFilter === "Rejected" ? "active" : ""}`}
          onClick={() => handleFilterButtonClick("Rejected")}
        >
          <FontAwesomeIcon icon={faTimesCircle} className="times-circle" /> Rejected Requests
        </button>
        <button
          className={`filter-button-accepted ${selectedFilter === "Accepted" ? "active" : ""}`}
          onClick={handleAcceptedRequestsClick}
        >
          <FontAwesomeIcon icon={faCircleCheck} className="circle-check" /> Accepted Requests
        </button>
        <button
          className={`filter-button-paid ${selectedFilter === "Paid" ? "active" : ""}`}
          onClick={() => handleFilterButtonClick("Paid")}
        >
          <FontAwesomeIcon icon={faCircleCheck} className="circle-check" /> Paid Requests
        </button>
      </div>
      <table className="table">
        <thead>
          <tr className="table-title">
            <th>Request ID</th>
            <th>Employee Name</th>
            <th>Article Name</th>
            <th>Chapter Name</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Request Status</th>
          </tr>
        </thead>
        <tbody>
          {displayedRequests.map((request) => (
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
                <button className="preview-button" onClick={() => handlePreviewClick(request.request_id, request.request_status)}>
                  <FaEye className="eye" /> Preview
                </button>
              </td>
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
