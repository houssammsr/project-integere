import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './SectionPage.css';
import back_img from './images/back.svg';
import sections_img from './images/sections.svg';
import add_img from './images/add.svg';

const ArticlePage = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [chapterName, setChapterName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chapterResponse = await fetch(`/api/chapters/${chapterId}`);
        const chapterData = await chapterResponse.json();
        setChapterName(chapterData.name);

        const articlesResponse = await fetch(`/api/chapters/${chapterId}/articles`);
        const articlesData = await articlesResponse.json();
        setArticles(articlesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [chapterId]);

  const handleAddArticle = () => {
    navigate(`/admin/ProgramManagementPage/chapter/${chapterId}/add-article`);
  };

  return (
    <div className="section-page-container">
      <div className="section-header">
        <Link to="/admin/programmanagementpage" className="back-button">
          <img src={back_img} alt="Back" />
        </Link>
        <h2>{chapterName}</h2>
        <button className="add-section-button" onClick={handleAddArticle}>
          Add New Article
          <img src={add_img} alt="Add" />
        </button>
      </div>

      <ul className="section-list">
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/chapter/${chapterId}/articles/${article.id}`} className="section-link">
              <img src={sections_img} alt="Sections" />
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlePage;
