import React, { useState } from 'react';
import './CreateRequest.css';
import { FaDownload, FaEye, FaPrint } from 'react-icons/fa';
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { divisionOptions, chapterOptions } from './Options';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreateRequestPage = () => {
  const [requestNumber, setRequestNumber] = useState('');
  const [dateSuccessive, setDateSuccessive] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('socialAssistance');
  const [selectedChapter, setSelectedChapter] = useState('retirementGrant');
  const [selectedPayment, setSelectedPayment] = useState('bankTransfer');
  const navigate = useNavigate();
  const handleRequestNumberChange = (e) => {
    setRequestNumber(e.target.value);
  };

  const handleDateSuccessiveChange = (e) => {
    setDateSuccessive(e.target.value);
  };

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
  };

  const handleChapterChange = (e) => {
    setSelectedChapter(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };
  const handleCancel = () => {
    // Handle cancel button functionality
    console.log('Cancel button clicked');
  };

  const handleDownload = () => {
    // Handle download button functionality
    console.log('Download button clicked');
  };

  const handlePreview = () => {
    // Handle preview button functionality
    console.log('Preview button clicked');
  };

  const handlePrint = () => {
    // Handle print button functionality
    console.log('Print button clicked');
  };

  const handleSubmit = () => {
    // Handle submit button functionality
    console.log('Submit button clicked');
  };
  const handleFileUpload = (event) => {
    // Handle the file upload logic here
    const selectedFiles = event.target.files;
    // Perform operations with the selected files
  };
  const currentDate = new Date().toLocaleDateString();

  const handleGoBack = () => {
    navigate("/previous-page")
  };

  
  return (
    <div className="create-request-container">
      <div className="contain">
      <button className="return-back-button" onClick={handleGoBack} style={{ fontSize: '24px' }}>
      <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h1 className="create-request-title">Create Request</h1>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="requestNumber" className="form-label">
            Request Number:
          </label>
          <p className="form-input">#req 000001</p>
        </div>
        <div className="form-group">
          <label htmlFor="dateSuccessive" className="form-label">
            Date:
          </label>
         <p className="form-input">{currentDate}</p>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="division" className="form-label">
            Division:
          </label>
          <select
            id="division"
            className="form-select"
            value={selectedDivision}
            onChange={handleDivisionChange}
          >
            {divisionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="chapter" className="form-label">
            Chapter:
          </label>
          <select
            id="chapter"
            className="form-select"
            value={selectedChapter}
            onChange={handleChapterChange}
          >
            {chapterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="payment" className="form-label">
          Payment:
        </label>
        <select
          id="payment"
          className="form-select"
          value={selectedPayment}
          onChange={handlePaymentChange}
        >
          <option value="bankTransfer">Payment par virment</option>
        </select>
      </div>
      <div className="upload-documents-container">
        <span className="upload-documents-title">Uploading documents:</span>
        <div className="upload-documents">
          <AiOutlineCloudUpload className="upload" />
          <div className="upload-documents-content">
            <p className="select-file">Select a file or drag and drop here</p>
            <p className="file-size">Docs or PDF, file size no more than 10 MB</p>
          </div>
          <input type="file" className="choose-file" onChange={handleFileUpload} multiple />

        </div>
      </div>
      <div className="buttons-container">
        <div className="right-buttons">
          <button className="download-button" onClick={handleDownload}>
            <FaDownload className="download" />
            Download
          </button>
          <button className="button" onClick={handlePreview}>
            <FaEye className="eye" />
            Preview
          </button>
          <button className="button" onClick={handlePrint}>
            <FaPrint className="print" />
            Print
          </button>
        </div>
        <div className="bottom-buttons">
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRequestPage;
