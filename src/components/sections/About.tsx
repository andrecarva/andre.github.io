import { cn } from "@/lib/utils";

interface AboutProps {
  className?: string;
}

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn("bg-white py-[95px]", className)}>
      <div className="container">
        <div className="w-full max-w-[1422px] mx-auto">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[74%] max-md:w-full">
              <div className="flex flex-col">
                <div className="flex flex-col items-stretch text-[26px] text-blue-900 font-bold text-center w-[119px]">
                  <h2>About Me</h2>
                  <div className="bg-blue-900 self-center w-20 h-1 mt-[25px]" />
                </div>
                
                <h3 className="text-gray-800 text-xl font-bold leading-loose mt-[23px]">
                  Financial Analyst & Investment Strategist
                </h3>
                
                <div className="space-y-[11px] text-gray-600 text-sm font-normal leading-loose mt-[26px]">
                  <p>
                    My name is André Carvalho and I'm a finance executive with a proven track record in advancing organizations through change and challenges,
                  </p>
                  <p>
                    and track financial performance. I serve as a trusted advisor to executive teams to identify, evaluate and execute strategies that achieve profit-building goals.
                  </p>
                  <p className="mt-[35px]">
                    I help improve corporate decision-making and bottom-line outcomes by designing and implementing processes to facilitate deeper understanding
                  </p>
                  <p>
                    of financial performance at all levels of the organization and driving execution of profitable and compliant strategies.
                  </p>
                </div>

                <div className="mt-[41px] grid grid-cols-2 gap-5">
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 text-sm text-gray-800 font-medium">
                        <img src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/adb565c3af7c7ef9eba514df1b71563d79d5a329?placeholderIfAbsent=true" alt="" className="w-5 h-5" />
                        <span>Experience</span>
                      </div>
                      <p className="text-gray-600 text-xs ml-8 mt-1.5">15+ Years</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3 text-sm text-gray-800 font-medium">
                        <img src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/02e3f50fb7b3a0546fdfa3b1af60aeb6980541c8?placeholderIfAbsent=true" alt="" className="w-5 h-5" />
                        <span>Certifications</span>
                      </div>
                      <p className="text-gray-600 text-xs mt-1.5">Business Analytics, SMU</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 text-sm text-gray-800 font-medium">
                        <img src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/0a6abc64ddbf1d171e11bc83faaa0c71e3868d99?placeholderIfAbsent=true" alt="" className="w-5 h-5" />
                        <span>Education</span>
                      </div>
                      <p className="text-gray-600 text-xs mt-1.5">MBA, B.S. Engineering</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3 text-sm text-gray-800 font-medium">
                        <img src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/6b75912b10ceaed9e101b1345e8ecd1caac59512?placeholderIfAbsent=true" alt="" className="w-5 h-5" />
                        <span>Supported functions</span>
                      </div>
                      <p className="text-gray-600 text-xs mt-1.5">Commercial, Manufacturing, SG&A</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-[26%] max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/cebc93036278e71e6689e47c494fefe36bd40833?placeholderIfAbsent=true"
                alt="Profile"
                className="aspect-[1.04] object-cover w-full rounded-[25px] mt-[62px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
