type Tech = {
  id: number;
  name: string;
  icon: string;
  badge: string;
  badgeColor: string;
  description: string;
  category: string;
  level: string;
  rating: number;
};

type TechCardProps = {
  tech: Tech;
  onAdd: (tech: Tech) => void;
};

const TechCard = ({ tech, onAdd }: TechCardProps) => {
  
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{tech.icon}</span>
        {tech.badge && (
          <span className={`text-xs px-3 py-1 rounded-full ${tech.badgeColor}`}>
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
      <p className="text-sm text-slate-500 flex-1">{tech.description}</p>

      <div className="flex items-center gap-3 text-sm text-slate-500 my-4 pb-4 border-b border-slate-100">
        <span className="bg-slate-100 px-2 py-1 rounded text-xs">
          {tech.category}
        </span>
        <span>{tech.level}</span>
        <span className="ml-auto flex items-center gap-1">
          ⭐ {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        className="btn bg-slate-900 text-white rounded-lg border-none hover:bg-slate-800 font-normal"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
