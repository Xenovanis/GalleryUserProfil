// UserGallery.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserProfileCard from './UserProfileCard';

const UserGallery = ({ userData }) => {
  return (
    <Container>
      <Row>
        {userData.map((user) => (
          <Col key={user.id}>
            <UserProfileCard user={user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserGallery;
