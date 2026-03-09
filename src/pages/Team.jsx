import { useState } from "react";
import team from "../data/teamData";
import "../styles/team.css";

export default function Team() {

  const [search, setSearch] = useState("");

  const filtered = team.filter(member =>
    member.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="team-page">

      <h1>Meet the Team</h1>

      <input
        className="team-search"
        placeholder="Search members..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="team-grid">

        {filtered.map(member => (
          <div key={member.id} className="team-card">

            <img src={member.image} alt={member.name} />

            <h3>{member.name}</h3>

            <p>{member.role}</p>

          </div>
        ))}

      </div>

    </section>
  );
}