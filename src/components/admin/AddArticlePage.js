import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './AddArticlePage.css';
import back_img from './images/back.svg';

const AddArticlePage = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  const [articleName, setArticleName] = useState('');
  const [articleDescription, setArticleDescription] = useState('');
  const [grant, setGrant] = useState('');
  
  const handleArticleNameChange = (event) => {
    setArticleName(event.target.value);
  };
  const handleGrantChange = (event) => {
    setGrant(event.target.value);
  };
  const handleArticleDescriptionChange = (event) => {
    setArticleDescription(event.target.value);
  };

  const handleCancel = () => {
    navigate(`/admin/ProgramManagementPage/chapter/${chapterId}/articles`);
  };

  const handleValidate = async () => {
    console.log(grant);
    try {
      const response = await fetch(`/api/chapters/${chapterId}/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: articleName,
          description: articleDescription,
          GRNT:grant,
        }),
      });

      if (response.ok) { 
        navigate(`/admin/ProgramManagementPage/chapter/${chapterId}/articles`);
      } else {
        console.error('Error saving article data:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving article data:', error);
    }
  };

  return (
    <div className="add-article-page-container">
      <div className="add-article-header">
        <Link to={`/admin/ProgramManagementPage/chapter/${chapterId}/articles`} className="back-button">
          <img src={back_img} alt="Back" />
        </Link>

       
        <h2>{/* Chapter Name */}</h2>
        <h3>Add New Article</h3>
      </div>
      <div className='containe'>
      <div className="article-details">
        <label htmlFor="article-name">Article Name:</label>
        <input
         className='inp_art'
          type="text"
          id="article-name"
          value={articleName}
          onChange={handleArticleNameChange}
        />

        <label htmlFor="grant">Grant:</label>
        <input
         className='inp_art'
          type="text"
          id="grant"
          value={grant}
          onChange={handleGrantChange}
        />

        <label htmlFor="article-description">Article Description:</label>
        <textarea
          id="article-description"
          value={articleDescription}
          onChange={handleArticleDescriptionChange}
        ></textarea>
      </div>

      <div className="article-buttons">
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="validate-button" onClick={handleValidate}>
          Validate
        </button>
      </div>
    </div>
    </div>
  );
};

export default AddArticlePage;
