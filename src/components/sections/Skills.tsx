import { cn } from "@/lib/utils";

interface SkillCardProps {
  image: string;
  category: string;
  tools: string;
  title: string;
  description: string;
}

function SkillCard({ image, category, tools, title, description }: SkillCardProps) {
  return (
    <div className="bg-white shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1)] overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300 hover:border-blue-900/20 border border-transparent">
      <img src={image} alt="" className="w-full" />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-blue-700 text-xs font-medium">{category}</span>
          <span className="bg-blue-50 text-blue-800 text-xs font-medium px-5 py-2.5 rounded-full">
            {tools}
          </span>
        </div>
        <h3 className="text-gray-800 text-[17px] font-bold leading-loose mt-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm font-normal leading-6 mt-3.5">
          {description}
        </p>
      </div>
    </div>
  );
}

interface SkillsProps {
  className?: string;
}

export function Skills({ className }: SkillsProps) {
  const skills = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/eaadf3cd99b182344af4cdd41a1185fcb796020f?placeholderIfAbsent=true",
      category: "BI systems",
      tools: "Tableau, Power BI, Qlick, Cognos, Hyperion, Oracle",
      title: "Extensive experience in various technologies",
      description: "I have been part of design and development of several digital and transformation initiatives that improved processes, efficiency and transparency."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/7b1e3158fbf29f167d5a60b329ba78d8d82c06f7?placeholderIfAbsent=true",
      category: "Programming languages",
      tools: "SQL, Python, KNIME",
      title: "Proficient with technology",
      description: "On top of having a very strong expertise in Excel (including Power Query), I'm always learning and developing new skills to enhance analytical capabilities, including machine learning and automation."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/a422b7eedad5e03f19c2c02dbbe1c72aeafce907?placeholderIfAbsent=true",
      category: "Financial Models",
      tools: "Excel",
      title: "Corporate Finance Strategy",
      description: "Participated and developed various financial models for strategic planning, project valuation and resource allocation."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/2686752c7371de6eb40f3a165f0ee4860a4440c9?placeholderIfAbsent=true",
      category: "Storytelling",
      tools: "Powerpoint",
      title: "Presentation skills",
      description: "Excellent verbal and presentation skills. Creating content for business reviews, board presentations, project summaries, deep dive analysis etc."
    }
  ];

  return (
    <section id="skills" className={cn("bg-white py-[84px]", className)}>
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="text-blue-900 text-[26px] font-bold leading-9 text-center">
            Technical skills
          </h2>
          <div className="bg-blue-900 w-20 h-1 mt-1.5" />
          <p className="text-gray-600 text-sm font-normal leading-loose text-center mt-[30px]">
            I strive to stay up to date in new technology and sharpen my technical skills.
          </p>
        </div>

        <div className="mt-[93px] grid grid-cols-2 gap-8 max-md:grid-cols-1">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
