import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramManagementPage.css';
import add_img from './images/add.svg';
import sections_img from './images/sections.svg';
//import ads_img from '../images/ads.svg';

const ProgramManagement = () => {
  const divisions = [
    { id: 1, title: 'Division 1' },
    { id: 2, title: 'Division 2' },
    { id: 3, title: 'Division 3' },
  ];

  return (
    <div className='container'>
      <div className='add-button'>
        <Link to="/add-division">
          <button>Add New chapters<img src={add_img} /></button>
        </Link>
        <Link to="/add-ad">
          <button className='ads_btn'>Add Ad </button>
        </Link>
      </div>
      
      <ul>
        {divisions.map((division) => (
          <li key={division.id}>
            <span>{division.title}</span>
            <Link to={`/division/${division.id}/sections`}>
              <button><img src={sections_img} />View Articles</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramManagement;
