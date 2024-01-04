// UserProfileCard.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserProfileCard.css'; // Import your CSS file

const UserProfileCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <aside className="profile-card">
      <header>
          <img src= {user.imageUrl}/>
    
        <h1>{user.name}</h1>
        <h2>{user.description}</h2>
      </header>
      <button className="details-button" onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      
      {showDetails && 
        <div className="additional-details">
            <p><b>Mobilite: </b>{user.mobilite}</p>
            <p><b>Disponibilité: </b>{user.disponibilité}</p>
          <p><b>Location: </b> {user.location}</p>
          <p><b>Age: </b> {user.age}</p>
          <p><b>Interests: </b> {user.interests.join(', ')}</p>  
        </div>
      }
    </aside>
  );
};

export default UserProfileCard;
