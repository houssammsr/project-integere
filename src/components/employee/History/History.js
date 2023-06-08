import React, { useState, useEffect } from "react";
import axios from "axios";
import "./History.css";
import { allRequests } from "./requestData";
import Pagination from "./Pagination";
import { useNavigate } from 'react-router-dom';



const getStatusStyles = (status) => {
  if (status === "Accepted") {
    return { color: "#428777" };
  } else if (status === "Pending") {
    return { color: "#D3CC16" };
  } else if (status === "Rejected") {
    return { color: "#EE4444" };
  }
};

function RequestTable() {
  const [requests, setRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setCurrentPage(option);
    if (option === 1) {
      setRequests(allRequests);
    } else if (option === 2) {
      const today = new Date();
      const oneWeekAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
      const filteredRequests = allRequests.filter((request) => {
        const requestDate = new Date(request.date);
        return requestDate >= oneWeekAgo && requestDate <= today;
      });
      setRequests(filteredRequests);
    } else if (option === 3) {
      const today = new Date();
      const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
      const filteredRequests = allRequests.filter((request) => {
        const requestDate = new Date(request.date);
        return requestDate >= oneMonthAgo && requestDate <= today;
      });
      setRequests(filteredRequests);
    }
  };

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

  const totalPages = Math.ceil(requests.length / itemsPerPage);
  
  
  const handleCreateRequest =() => {
    navigate("/create-request")
  }

  return (
    <div className="request-table-container-historyvv">
      <div className="top-page">
        <h2 className="title">Latest Requests</h2>
        <div className="top-section">
        <button className="create" onClick={handleCreateRequest}>
  <i className="fa-solid fa-square-plus"></i>Create Request
</button>

          <div className="view-options">
            <button
              className={`view-option ${currentPage === 1 ? "active" : ""}`}
              onClick={() => handleOptionClick(1)}
            >
              All
            </button>
            <button
              className={`view-option ${currentPage === 2 ? "active" : ""}`}
              onClick={() => handleOptionClick(2)}
            >
              Weekly
            </button>
            <button
              className={`view-option ${currentPage === 3 ? "active" : ""}`}
              onClick={() => handleOptionClick(3)}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr className="table-title">
            <th>ID</th>
            <th>Date</th>
            <th>Division</th>
            <th>Amount</th>
            <th>Chapiter</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((request) => (
              <tr key={request.id} className="table-container">
                <td>{request.id}</td>
                <td>{request.date}</td>
                <td>{request.division}</td>
                <td>{request.amount}</td>
                <td>{request.chapitre}</td>
                <td>
                  <div className={`payment-cell ${request.payment ? "paid" : "not-paid"}`}>
                    <div className="status">{request.payment ? "Paid" : "Not Paid"}</div>
                  </div>
                </td>
                <td style={getStatusStyles(request.status)}>{request.status}</td>
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
