import { cn } from "@/lib/utils";

interface InterestCardProps {
  image: string;
  title: string;
  description: string[];
}

function InterestCard({ image, title, description }: InterestCardProps) {
  return (
    <div className="bg-white shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1)] overflow-hidden text-sm text-gray-600 font-normal leading-loose rounded-lg hover:shadow-lg transition-shadow duration-300 hover:border-blue-900/20 border border-transparent">
      <img src={image} alt="" className="w-full" />
      <div className="p-6">
        <h3 className="text-gray-800 text-[17px] font-bold leading-loose">
          {title}
        </h3>
        <div className="mt-[22px] space-y-[11px]">
          {description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

interface InterestsProps {
  className?: string;
}

export function Interests({ className }: InterestsProps) {
  const interests = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/335e9339941e664f5d1d7c438da3a24c19fbd9e3?placeholderIfAbsent=true",
      title: "Business Intelligence",
      description: [
        "Following market trends and latest developments in the software",
        "supporting finance."
      ]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/133a1868e12435784c6e0278f748f2c31942f395?placeholderIfAbsent=true",
      title: "Economic Policy",
      description: [
        "Studying the impact of fiscal and monetary policies on",
        "financial markets."
      ]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/38dd340c4d48b6ad54a1078998f31049ebb96755?placeholderIfAbsent=true",
      title: "Artificial Intelligence and Innovation",
      description: [
        "Exploring emerging technologies in the financial industry",
        "and their potential applications."
      ]
    }
  ];

  return (
    <section id="interests" className={cn("bg-gray-50 py-[88px]", className)}>
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="text-blue-900 text-[26px] font-bold leading-none text-center">
            Areas of Interest
          </h2>
          <div className="bg-blue-900 w-20 h-1 mt-6" />
          <p className="text-gray-600 text-sm font-normal leading-loose text-center mt-[30px]">
            Beyond my professional work, I'm passionate about these areas of finance and economics.
          </p>
        </div>

        <div className="mt-[69px] grid grid-cols-3 gap-8 max-md:grid-cols-1">
          {interests.map((interest, index) => (
            <InterestCard key={index} {...interest} />
          ))}
        </div>
      </div>
    </section>
  );
}
