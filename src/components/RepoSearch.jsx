// import React from "react";
import { Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react';

function RepoSearch() {
  const [repos, setRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch("https://api.github.com/users/DeBOLx/repos")
      .then(response => response.json())
      .then(data => {
        setRepos(data);
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
      });
  }, []);

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return ( 
    <Box ml='60px' mt='-200px'>
        <input width="400px"
        type="text"
        placeholder="Search repos..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredRepos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default RepoSearch;