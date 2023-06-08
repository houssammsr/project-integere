import React, { useState, useEffect } from 'react';
import './ProgramPage.css';

const EmployeeProgram = () => {
  const [programData, setProgramData] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState('');
  const [selectedArticle, setSelectedArticle] = useState('');

  useEffect(() => {
    fetchProgramData();
  }, []);

  const fetchProgramData = async () => {
    try {
      const response = await fetch('/api/program-data');
      const data = await response.json();
      setProgramData(data);
    } catch (error) {
      console.error('Error fetching program data:', error);
    }
  };

  const handleChapterChange = (event) => {
    const chapterId = event.target.value;
    setSelectedChapter(chapterId);
    setSelectedArticle('');
  };

  const handleArticleChange = (event) => {
    const articleId = event.target.value;
    setSelectedArticle(articleId);
  };

  const renderChapterOptions = () => {
    if (!programData) {
      return null;
    }

    return programData.map((chapter) => (
      <option key={chapter.id} value={chapter.id}>
        {chapter.title}
      </option>
    ));
  };

  const renderArticleOptions = () => {
    if (!selectedChapter || !programData) {
      return null;
    }

    const selectedChapterObj = programData.find((chapter) => chapter.id === selectedChapter);
    if (!selectedChapterObj) {
      return null;
    }

    const articles = selectedChapterObj.articles;

    return articles.map((article) => (
      <option key={article.id} value={article.id}>
        {article.title}
      </option>
    ));
  };

  const renderArticleText = () => {
    if (!selectedArticle || !programData) {
      return null;
    }

    const selectedArticleObj = programData.reduce((foundArticle, chapter) => {
      const article = chapter.articles.find((article) => article.id === selectedArticle);
      return foundArticle || article;
    }, null);

    if (!selectedArticleObj) {
      return null;
    }

    return <div>{selectedArticleObj.description}</div>;
  };

  return (
    <div className='program-containervef'>
      <h1>Consult Program</h1>

      <div className="program-select">
        <label htmlFor="chapter">Select Chapter:</label>
        <select value={selectedChapter} onChange={handleChapterChange}>
          <option value="">Select Chapter</option>
          {renderChapterOptions()}
        </select>
      </div>

      <div className="program-select">
        <label htmlFor="article">Select Article:</label>
        <select value={selectedArticle} onChange={handleArticleChange}>
          <option value="">Select Article</option>
          {renderArticleOptions()}
        </select>
      </div>

      <div className="program-text">{renderArticleText()}</div>
    </div>
  );
};

export default EmployeeProgram;