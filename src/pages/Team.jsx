import React, { useState } from 'react';
import { teamData } from '../data/teamData';
import '../styles/team.css';

const Team = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = teamData.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="team-page">
      <div className="team-header">
        <h1 className="page-title">Meet the Team</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search team members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="team-grid">
        {filteredMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img
              src={member.image}
              alt={member.name}
              className="team-image"
            />
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <p className="no-results">No members found.</p>
      )}
    </main>
  );
};

export default Team;
