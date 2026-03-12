// src/components/Team.jsx (reusable Team Card - used in both Home teaser & Team page)
const TeamCard = ({ member }) => {
  return (
    <div className="group bg-[var(--card-bg)] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="h-64 bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-8 text-center">
        <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
        <p className="text-[var(--accent)] font-medium mb-4">{member.role}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 mb-6">{member.bio}</p>
        
        <div className="flex justify-center gap-6 text-2xl">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" className="hover:text-[#0078d4] transition-colors">🔗</a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" className="hover:text-[#00b4d8] transition-colors">🐙</a>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamCard