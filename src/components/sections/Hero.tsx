import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section className={cn("bg-blue-900 pt-48 pb-0", className)}>
      <div className="container">
        <div className="flex w-full max-w-[1364px] mx-auto items-stretch gap-5 flex-wrap justify-between">
          <div className="flex flex-col items-stretch text-[15px] text-blue-100 font-normal leading-loose mt-[25px]">
            <h1 className="text-white text-[41px] font-bold leading-none mr-[47px] max-md:mr-2.5">
              Financial Planning & Analysis
            </h1>
            <p className="mt-[46px]">
              I work with companies to bridge the gap between financial data and business strategy,
            </p>
            <p className="mt-[13px]">
              transforming fragmented decision-making into integrated performance management:
            </p>
            <p className="text-[rgba(195,212,240,1)] leading-7 mt-[5px]">
              that accelerates growth and strengthens competitive advantage.
              <br />
              enabling leadership teams to make faster, more informed decisions.
            </p>
          </div>

          <div className="bg-gray-100 shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)] p-6 rounded-lg">
            <h2 className="text-blue-900 text-[17px] font-bold leading-loose mb-[34px]">
              Professional Snapshot
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Business Partner</span>
                  <span className="text-gray-700">95%</span>
                </div>
              <div className="bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="bg-blue-900 h-2 rounded-full animate-[progress_1s_ease-in-out]"
                  style={{ width: '95%' }}
                />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Performance Management</span>
                  <span className="text-gray-700">90%</span>
                </div>
              <div className="bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="bg-blue-900 h-2 rounded-full animate-[progress_1s_ease-in-out]"
                  style={{ width: '90%', animationDelay: '0.2s' }}
                />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Strategic Planning</span>
                  <span className="text-gray-700">85%</span>
                </div>
              <div className="bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="bg-blue-900 h-2 rounded-full animate-[progress_1s_ease-in-out]"
                  style={{ width: '85%', animationDelay: '0.4s' }}
                />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Data Governance</span>
                  <span className="text-gray-700">80%</span>
                </div>
              <div className="bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="bg-blue-900 h-2 rounded-full animate-[progress_1s_ease-in-out]"
                  style={{ width: '80%', animationDelay: '0.6s' }}
                />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-800 mt-48 py-[26px]">
          <div className="container flex justify-between items-center text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <img src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/20e2633aa4bcfdd85136ae6dd9a5f99494659bcd?placeholderIfAbsent=true" alt="" className="w-5 h-5" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/8b7a9376c6020479fe88026ffccf9dd3b9f72659?placeholderIfAbsent=true" alt="" className="w-5 h-5" />
              <span>International experience</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/0cffdbfeeefd0a18a7c05b00e33284f018a77e08?placeholderIfAbsent=true" alt="" className="w-5 h-5" />
              <span>Fortune 500 and FTSE 250</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
