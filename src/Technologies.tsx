import { useState, use, Suspense } from "react";
import TechCard from "./TechCard.tsx";
import YourStack from "./YourStack.tsx";

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

const techPromise: Promise<Tech[]> = fetch("/technologies.json").then(
  (res) => res.json()
);

const TechGrid = ({ onAdd }: { onAdd: (tech: Tech) => void }) => {
  const technologies = use(techPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechCard key={tech.id} tech={tech} onAdd={onAdd} />
      ))}
    </div>
  );
};

const Technologies = () => {
  const [stack, setStack] = useState<Tech[]>([]);

  const handleAdd = (tech: Tech) => {
    const alreadyInStack = stack.some((item) => item.id === tech.id);
    if (!alreadyInStack) {
      setStack([...stack, tech]);
    }
  };

  const handleRemove = (id: number) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section className="container mx-auto px-4 my-16">
      <h2 className="text-3xl font-bold mb-1">
        Explore the <span className="grad-fg">Technologies</span>
      </h2>
      <p className="text-slate-500 mb-8">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <div className="lg:col-span-3">
          <Suspense fallback={<p>Loading technologies...</p>}>
            <TechGrid onAdd={handleAdd} />
          </Suspense>
        </div>

        <YourStack
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default Technologies;
