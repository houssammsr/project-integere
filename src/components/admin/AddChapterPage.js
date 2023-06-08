import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddChapterPage.css';
import back_img from './images/back.svg';

const AddChapterPage = () => {
  const navigate = useNavigate();
  const [chapterName, setChapterName] = useState('');
  const [articleName, setArticleName] = useState('');
  const [description, setDescription] = useState('');

  const handleChapterNameChange = (e) => {
    setChapterName(e.target.value);
  };

  const handleArticleNameChange = (e) => {
    setArticleName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCancel = () => {
    navigate('/admin/ProgramManagementPage');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/chapters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chapterName,
          articleName,
          description,
        }),
      });

      if (response.ok) {
        navigate('/admin/ProgramManagementPage');
      } else {
        console.error('Error saving data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className="add-chapter-page-container">
      <div className="add-chapter-header">
        <button className="back-button" onClick={() => navigate('/admin/ProgramManagementPage')}>
          <img src={back_img} alt="Back" />
        </button>
        <h2>Add New Chapter</h2>
      </div>
     <div className='containe' >
      <div className="chapter-articles">
        <h3>Chapter Name</h3>
        <input
        className='inp_chap'
          type="text"
          value={chapterName}
          onChange={handleChapterNameChange}
        />

        <h3>Article Name</h3>
        <input
         className='inp_chap'
          type="text"
          value={articleName}
          onChange={handleArticleNameChange}
        />

        <h3>Description</h3>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>

      <div className="chapter-buttons">
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="validate-button" onClick={handleSubmit}>
          Validate
        </button>
      </div>
    </div>
    </div>
  );
};

export default AddChapterPage;
