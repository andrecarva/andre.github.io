import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  icon: string;
  title: string;
  description: string | string[];
}

function ExperienceCard({ icon, title, description }: ExperienceCardProps) {
  const descriptionArray = Array.isArray(description) ? description : [description];

  return (
    <div className="bg-white flex grow flex-col text-sm text-gray-600 font-normal leading-loose w-full p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:border-blue-900/20 border border-transparent">
      <img src={icon} alt="" className="w-8 h-8" />
      <h3 className="text-gray-800 text-[17px] font-bold leading-loose mt-[23px]">
        {title}
      </h3>
      <div className="mt-[22px] space-y-[11px]">
        {descriptionArray.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
}

interface ExperienceProps {
  className?: string;
}

export function Experience({ className }: ExperienceProps) {
  const experiences = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/14d20471d0d39d7f837b33ca04e51d469460e45f?placeholderIfAbsent=true",
      title: "Financial Analysis",
      description: [
        "Comprehensive analysis of financial",
        "statements, market trends, and economic",
        "indicators."
      ]
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/0c103eafbb3b06ddaa018951d917db6d712f0229?placeholderIfAbsent=true",
      title: "Business Partner",
      description: "Trusted advisor to executive teams, leveraging deep financial acumen to deliver on the strategy, business cases, and models to identify, evaluate, select, and execute business decisions."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/7ea0a26e9c83ef3ef3149933c490c6713ee6c2a9?placeholderIfAbsent=true",
      title: "Digital",
      description: "Experienced in digital and data transformation."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/3bfc2825d0acd7b4f1bc715ba8e8504a77c9991f?placeholderIfAbsent=true",
      title: "Market Forecasting",
      description: [
        "Prediction of market trends using technical",
        "analysis, fundamental analysis, and",
        "economic indicators."
      ]
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/62dd84d3160cb42dedef792499d9a61f9bda4cc1?placeholderIfAbsent=true",
      title: "Portfolio Optimization",
      description: [
        "Strategic asset allocation to maximize",
        "returns while minimizing risk."
      ]
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/481ed37471d6aaf4db6a0feec22f488fad4d2552?placeholderIfAbsent=true",
      title: "Data Analysis",
      description: [
        "Advanced statistical analysis of financial",
        "data to identify patterns and opportunities."
      ]
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/6af76e813a1fe4d7c8c561bc8526bae8dc7ee5fb?placeholderIfAbsent=true",
      title: "Financial Planning",
      description: "FP&A leader who maximizes the value of planning and analysis through process and system improvements that drive accuracy, availability, and visibility."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/1f043f087c72867e3e7d69ff6e702e1f2b88afed?placeholderIfAbsent=true",
      title: "Financial Reporting",
      description: [
        "Clear and concise presentation of financial",
        "data and analysis to stakeholders."
      ]
    }
  ];

  return (
    <section id="experience" className={cn("bg-gray-50 py-[84px]", className)}>
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="text-blue-900 text-[26px] font-bold leading-none text-center">
            Professional Experience
          </h2>
          <div className="bg-blue-900 w-20 h-1 mt-[19px]" />
          <p className="text-gray-600 text-sm font-normal leading-loose text-center mt-[30px]">
            Specialized skills and knowledge developed through years of experience in the
          </p>
          <p className="text-gray-600 text-sm font-normal leading-loose text-center mt-[11px]">
            Pharmaceutical, Medical Devices and Chemical industries.
          </p>
        </div>

        <div className="mt-[69px] grid grid-cols-4 gap-5 max-md:grid-cols-1">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
