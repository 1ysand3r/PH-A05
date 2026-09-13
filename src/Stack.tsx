import { toast } from 'react-toastify';

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

type YourStackProps = {
  stack: Tech[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
};

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
      <h3 className="font-bold text-lg">Your Stack</h3>
      <p className="text-sm text-slate-400 mb-4">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 && (
        <p className="text-sm text-slate-400">No technology selected yet.</p>
      )}

      <div className="flex flex-col gap-3">
        {stack.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center justify-between border border-slate-100 rounded-xl p-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{tech.icon}</span>
              <div>
                <p className="font-semibold text-sm">{tech.name}</p>
                <p className="text-xs text-slate-400">{tech.category}</p>
              </div>
            </div>
            <button
              onClick={() =>  onRemove(tech.id)}
              className="text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {stack.length > 0 && (
        <button
          onClick={()=> onRemoveAll()}
          className="btn w-full mt-4 border border-red-200 text-red-500 bg-white hover:bg-red-50 font-normal rounded-lg"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;
