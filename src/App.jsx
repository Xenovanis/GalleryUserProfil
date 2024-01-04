import React from 'react';
import UserGallery from './components/UserGallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfileCard from './components/UserProfileCard';

const App = () => {
  const userData = [
    {
      id: 1,
      name: "Ali Dahmani",
      description: "Full stack .Net/React developer",
      imageUrl: "../public/profile.png",
      age: "28 ans",
      mobilite: "national",
      disponibilité: "immédiate",
      location: "Rabat, Maroc",
      interests: ["Musique", "Voyage", "Lecture"]
    },
    {
      id: 2,
      name: "Lina Al-Farsi",
      description: "Mobile developer",
      imageUrl: "../public/profile.png",
      age: "32 ans",
      mobilite: "international",
      disponibilité: "1 mois",
      location: "Dubaï, Émirats Arabes Unis",
      interests: ["Technologie", "Cinéma", "Yoga"]
    },
    {
      id: 3,
      name: "Youssef Amrani",
      description: "Data scientist",
      imageUrl: "../public/profile.png",
      age: "30 ans",
      mobilite: "national",
      disponibilité: "immédiate",
      location: "Casablance, Maroc",
      interests: ["Programmation", "Jeux vidéo", "Voyage"]
    },
    {
      id: 4,
      name: "Sara Khoury",
      description: "Full stack .Net/React developer",
      imageUrl: "../public/profile.png",
      age: "26 ans",
      mobilite: "international",
      disponibilité: "3 mois",
      location: "Meknes, Maroc",
      interests: ["AI", "Robotique", "Lecture"]
    },

    
  ];

  return (
    <div>
      
      <h1>Galerie de Cartes de Profils Utilisateurs</h1>
      <UserGallery userData={userData} />
    </div>
  );
};

export default App;