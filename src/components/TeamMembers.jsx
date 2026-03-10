// src/components/TeamMembers.jsx
import { teamData } from '../data/teamData';

const TeamMembers = ({ limit = null }) => {
  const members = limit ? teamData.slice(0, limit) : teamData;

  return (
    <section className="team-members">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <div className="team-grid">
          {members.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-avatar" style={{ backgroundImage: `url(${member.avatar})` }}></div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
        {limit && (
          <div className="text-center mt-48">
            <Link to="/team" className="btn btn-primary">View Full Team</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamMembers;