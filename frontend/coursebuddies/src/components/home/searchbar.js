import React, { useState } from 'react';

const Searchbar= () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const classes = ['Math', 'Science', 'History'];
  const clubs = ['Chess', 'Music', 'Dance'];
  const users = ['John', 'Jane', 'Doe'];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const performSearch = (array) => {
    return array.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredClasses = performSearch(classes);
  const filteredClubs = performSearch(clubs);
  const filteredUsers = performSearch(users);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select onChange={handleFilterChange} value={filter}>
        <option value="all">All</option>
        <option value="classes">Classes</option>
        <option value="clubs">Clubs</option>
        <option value="users">Users</option>
      </select>
      <div className="results">
        {filter === 'all' || filter === 'classes' ? (
          <div>
            <h2>Classes</h2>
            {filteredClasses.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        ) : null}
        {filter === 'all' || filter === 'clubs' ? (
          <div>
            <h2>Clubs</h2>
            {filteredClubs.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        ) : null}
        {filter === 'all' || filter === 'users' ? (
          <div>
            <h2>Users</h2>
            {filteredUsers.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Searchbar;
