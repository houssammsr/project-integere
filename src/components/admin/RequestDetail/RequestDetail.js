import React, { useState, useEffect } from "react";
import axios from "axios";
import './RequestDetail.css'; // Import the CSS file for styling

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPrint, faDownload, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const getStatusStyles = (status) => {
  if (status === "Paid") {
    return { color: "#428777" };
  } else if (status === "Accepted") {
    return { color: "#428777" };
  } else if (status === "Rejected") {
    return { color: "#EE4444" };
  }
};

const RequestDetailPage = () => {
  const [request, setRequest] = useState(null);
  const { requestId } = useParams();
 
 
  
  const navigate = useNavigate();
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/'request/details/<str:pk>/${requestId}`);
        setRequest(response.data);
      } catch (error) {
        console.error('Error fetching request:', error);
      }
    };

    fetchRequest();
  }, [requestId]);

  if (!request) {
    return <div>Loading...</div>;
  }

  


  const getRequestStatus = (status) => {
    if (status === "Pending") {
      return <span className="requests-status-pending">{status}</span>;
    } else if (status === "Rejected") {
      return <span className="requests-status-rejected">{status}</span>;
    } else if (status === "Paid") {
      return <span className="requests-status-paid">{status}</span>;
    } else {
      return <span className="requests-status">{status}</span>;
    }
  };

  const handleGoBack = () => {
    navigate("/previous-page")
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Assuming you have the file URL available
    const fileUrl = "https://example.com/file.pdf";
  
    // Create a hidden <a> element
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = "filename.pdf";
  
    // Append the link to the DOM and simulate a click
    document.body.appendChild(downloadLink);
    downloadLink.click();
  
    // Clean up the temporary element
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="request-detail-pageversionfinal">
      <div className="top-page">
      <button className="return-back-button" onClick={handleGoBack} style={{ fontSize: '24px' }}>
      <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h1 className="request-detail-title">Request Detail</h1>
      </div>
      <div className="request-sous-title">
        <span className="request-label">Request</span>
        <span className="request-id"> / {request.requestId}</span>
      </div>
      
      <div className="big-border">
        <div className="buttons-container">
          <p className="request-date">May 07, 2023</p>
          <div className="button-container">
            <button className="print-button" onClick={handlePrint}><FontAwesomeIcon icon={faPrint} /> Print</button>
            <button className="download-button" onClick={handleDownload}><FontAwesomeIcon icon={faDownload} className="fa-download"/> Download</button>
          </div>
        </div>
        <div className="employee-container">
          <div className="employee-container-name">
        <h3 className="employee-title">Employee</h3>
        <h4 className="contact-title">Contact</h4>
        </div>
        <div className="employee-container-name">
        <p className="employee-name">{request.employeeName}</p>
        <div className="contact-name">
        <p className="phone-number">{request.phoneNumber}</p>
        <p className="gmail">{request.email}</p>
        </div>
        </div>
        </div>
        <div className="small-border">
          <div className="chapter-contain">
          <h3 className="chapter-title">Chapter</h3>
          <h4 className="chapter-title-id">Chapter ID</h4>
          </div>
          <div className="chapter-name-contain">
          <p className="chapter-name">{request.chapterName}</p>
          <p className="chapter-id">{request.chapterId}</p>
          </div>
          <div className="line"></div>
          <div className="article-contain">
          <h3 className="article-title">Article</h3>
          <h3 className="article-id-title">Article Id</h3>
          </div>
          <div className="article-name-contain">
          <p className="article-name">{request.articleName}</p>
          <p className="article-id">{request.articleId}</p>
          </div>
          <div className="payment-contain">
          <h4 className="payment-title">Payment Amount</h4>
          <p className="payment-amount">{request.paymentAmount}</p>
          </div>
        </div>
        <div className="request-button">
        <h2 className="request-title">Request Status</h2>
        <button className="show-document-button"><FontAwesomeIcon icon={faFileLines} className="fa-file"/> Show Document</button>
        </div>
        <div className="request-status">
        <span style={getStatusStyles(request.status)} className="status-request">{request.status}</span>
        </div>
      </div>
    </div>
  );
}

export default RequestDetailPage;
