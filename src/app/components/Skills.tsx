export default function Skills() {
  const skills = [
    { name: 'JS', color: 'bg-yellow-500 text-white' },
    { name: 'TS', color: 'bg-blue-500 text-white' },
    { name: 'React', color: 'bg-cyan-500 text-white' },
    { name: 'Tailwindcss', color: 'bg-teal-500 text-white' },
    { name: 'Premierepro', color: 'bg-purple-500 text-white' }
  ];

  return (
    <div className="bg-white rounded-xl p-8 shadow-2xl">
      <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-6 text-gray-800">
        Tech Skill
      </h2>
      <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className={`px-4 py-2 rounded-full font-medium shadow-lg 
                ${skill.color} hover:opacity-90 transition-opacity duration-200`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}