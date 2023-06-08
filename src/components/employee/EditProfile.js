import React, { useState, useEffect } from 'react';
import FullName from './components_profile/FirstName';
import Email from './components_profile/Email';
import Adresse from './components_profile/Adresse';
import ContactNumber from './components_profile/ContactNumber';
import Password from './components_profile/Password';
import styles from './EditProfile.module.css';
const EditProfile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await fetch('/api/profile');
      if (!response.ok) {
        throw new Error('Failed to fetch profile data');
      }
      const profileData = await response.json();
      setFullName(profileData.fullName);
      setEmail(profileData.email);
      setAdresse(profileData.adresse);
      setContactNumber(profileData.contactNumber);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFullNameChange = (value) => {
    setFullName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleAdresseChange = (value) => {
    setAdresse(value);
  };

  const handleContactNumberChange = (value) => {
    setContactNumber(value);
  };

  return (
    <div className={styles.editProfile}>
      <div className={styles.editprofilecontainer}>
        <div className={styles.profileInformations}>Profile Informations</div>
        <div className={styles.profileinformations}>
          <FullName fullName={fullName} onChange={handleFullNameChange} />
          <Email email={email} onChange={handleEmailChange} />
          <Adresse adresse={adresse} onChange={handleAdresseChange} />
          <ContactNumber contactNumber={contactNumber} onChange={handleContactNumberChange} />
          <Password />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;