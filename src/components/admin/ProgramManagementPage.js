import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProgramManagementPage.css';
import add_img from './images/add.svg';
import sections_img from './images/sections.svg';

const ProgramManagementPage = () => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch('/api/chapters');
        const data = await response.json();
        setChapters(data);
      } catch (error) {
        console.error('Error fetching chapters:', error);
      }
    };

    fetchChapters();
  }, []);

  return (
    <div className='progamemanagcontainer'>
      <div className='add-button'>
        <Link to="/admin/ProgramManagementPage/add-chapter">
          <button>Add New Chapter<img src={add_img} /></button>
        </Link>
        <Link to="/add-ad">
          <button className='ads_btn'>Add Ad </button>
        </Link>
      </div>

      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <span>{chapter.title}</span>
            <Link to={`/chapter/${chapter.id}/articles`}>
              <button><img src={sections_img} />View Articles</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramManagementPage;
