
import { motion } from "framer-motion"
import teamData from "../data/teamData"
import { useState } from "react"

function TeamMembers(){

  const [search,setSearch] = useState("")

  const filtered = teamData.filter(member =>
  member.name.toLowerCase().includes(search.toLowerCase())
  )

  return(

    <section className="team-section">

      <h2>Our Team</h2>

      <input
      className="search"
      placeholder="Search members..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="team-grid">

        {filtered.map((member,index)=>(
          <motion.div
          key={index}
          className="team-card"
          whileHover={{
            rotateX:8,
            rotateY:-8,
            scale:1.05
          }}
          transition={{type:"spring",stiffness:200}}
          >

            <img src={member.image} alt={member.name}/>

            <h3>{member.name}</h3>
            <p>{member.role}</p>

            {member.linkedin && (
              <a href={member.linkedin} target="_blank">
                LinkedIn
              </a>
            )}

          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default TeamMembers