import React, { useState, useEffect } from 'react';
import './TrackRequestPage.css';
import history_img from './images-emp/history_img.svg';

const EmployeeTrackRequest = () => {
  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    
    //fetch(API_ENDPOINT)
//.then((response) => response.json())
     // .then((data) => setRequestData(data))
     // .catch((error) => console.error('Error fetching request data:', error));
  }, []);

  const renderTableRows = () => {
    return requestData.map((request) => (
      <tr key={request.id}>
        <td>{request.fullName}</td>
        <td>{request.date}</td>
        <td>{request.amount}</td>
        <td>{request.division}</td>
        <td>{request.chapter}</td>
        <td>{request.payment}</td>
        <td>{request.status}</td>
      </tr>
    ));
  };

  return (
    <div className='containerversiontrreq'>
     <div className='bar'>
      <h2>Track Your Request</h2>

      <a href="/request-history">
      <img src={history_img} />
        View Request History 
      </a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Division</th>
            <th>Chapter</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTrackRequest;
