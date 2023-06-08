import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './SectionPage.css';
import back_img from '../images/back.svg';
import sections_img from '../images/sections.svg';
import add_img from '../images/add.svg';

const SectionPage = () => {
  const { divisionId } = useParams();
  const sections = [
    { id: 1, title: 'Section 1' },
    { id: 2, title: 'Section 2' },
    { id: 3, title: 'Section 3' },
  ];
  const divisionName = 'Division Name';

  return (
    <div className="section-page-container">
      <div className="section-header">
        <Link to="/program-management" className="back-button">
          <img src={back_img} alt="Back" />
        </Link>
        <h2>{divisionName}</h2>
        <Link to={`/division/${divisionId}/add-section`} className="add-section-button">
          Add New Section
          <img src={add_img} alt="Add" />
        </Link>
      </div>

      <ul className="section-list">
        {sections.map((section) => (
          <li key={section.id}>
            <Link to={`/division/${divisionId}/sections/${section.id}`} className="section-link">
              <img src={sections_img} alt="Sections" />
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionPage;
