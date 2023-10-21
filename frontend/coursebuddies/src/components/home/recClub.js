import React from 'react';

// Extend User class to include clubsJoined
class User {
  constructor(id, name, coursesTaken, clubsJoined) {
    this.id = id;
    this.name = name;
    this.coursesTaken = coursesTaken; // Array of course IDs
    this.clubsJoined = clubsJoined; // Array of club IDs
    this.friends = []; // Array of friend IDs
  }
}

// Sample data
const users = [
  new User(1, 'Alice', ['CS101', 'Math101'], ['ChessClub', 'CodingClub']),
  new User(2, 'Bob', ['CS101', 'Physics101'], ['CodingClub']),
  new User(3, 'Charlie', ['Math101', 'Physics101'], ['ChessClub']),
  new User(4, 'Dave', ['History101'], ['MusicClub']),
];

// Function to find club recommendations based on friends
const findClubRecommendations = (currentUser, allUsers) => {
  const clubRecommendations = new Set();

  currentUser.friends.forEach(friendId => {
    const friend = allUsers.find(user => user.id === friendId);
    if (friend) {
      friend.clubsJoined.forEach(club => {
        if (!currentUser.clubsJoined.includes(club)) {
          clubRecommendations.add(club);
        }
      });
    }
  });

  return Array.from(clubRecommendations);
};

const ClubRecommendations = ({ currentUser }) => {
  const recommendations = findClubRecommendations(currentUser, users);

  return (
    <div>
      <h2>Clubs You May Like</h2>
      <ul>
        {recommendations.length === 0
          ? 'No club recommendations at the moment.'
          : recommendations.map((club, index) => <li key={index}>{club}</li>)}
      </ul>
    </div>
  );
};

// Sample usage
const App = () => {
  const currentUser = new User(1, 'Alice', ['CS101', 'Math101'], ['ChessClub', 'CodingClub']);
  // Adding friends for the current user for demo purposes
  currentUser.friends.push(2, 3);

  return (
    <div>
      <h1>Welcome, {currentUser.name}</h1>
      <ClubRecommendations currentUser={currentUser} />
    </div>
  );
};

export default App;