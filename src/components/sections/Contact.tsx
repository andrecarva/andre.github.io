
import { cn } from "@/lib/utils";
import { Linkedin, Github } from "lucide-react";

interface ContactProps {
  className?: string;
}

export function Contact({ className }: ContactProps) {
  return (
    <section id="contact" className={cn("bg-white py-[98px]", className)}>
      <div className="container">
        <div className="max-w-[1013px] mx-auto">
          <div className="flex flex-col items-center text-center max-w-[521px] mx-auto">
            <h2 className="text-blue-900 text-[26px] font-bold leading-none">
              Get In Touch
            </h2>
            <div className="bg-blue-900 w-20 h-1 mt-[25px]" />
            <p className="text-gray-600 text-sm font-normal leading-loose mt-[30px]">
              Interested in working together? Contact me for an exploratory call to discuss how
            </p>
            <p className="text-gray-600 text-sm font-normal leading-loose mt-[11px]">
              I can help your organization.
            </p>
          </div>

          <div className="mt-[77px]">
            <h3 className="text-gray-800 text-xl font-bold leading-loose">
              Contact Information
            </h3>

            <div className="mt-[33px] space-y-6">
              <div className="flex items-start gap-4">
                <div className="space-y-6">
                  <img src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/e7881581f612bb11d481979525bce44b08d4d3af?placeholderIfAbsent=true" alt="" className="w-12 h-12 rounded-full" />
                  <img src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/0723ef60d0dc6cb6b5e4ca8b2b3eeb98165711df?placeholderIfAbsent=true" alt="" className="w-12 h-12 rounded-full" />
                </div>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm text-gray-800 font-medium leading-loose">Email</h4>
                    <a href="mailto:andre_carva@hotmail.com" className="text-gray-600 text-sm font-normal mt-3.5 hover:text-blue-900">
                      andre_carva@hotmail.com
                    </a>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-800 font-medium leading-loose">Phone</h4>
                    <a href="tel:+18179155874" className="text-gray-600 text-sm font-normal mt-[13px] hover:text-blue-900">
                      +1 (817) 915-5874
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/f9f0e9deaedf1413893d07fa79c13e26a8a99090?placeholderIfAbsent=true" alt="" className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="text-sm text-gray-800 font-medium leading-loose">Location</h4>
                  <p className="text-gray-600 text-sm font-normal mt-[13px]">
                    Dallas - Fort Worth, USA
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-gray-800 text-xl font-bold leading-loose mt-14">
              Connect
            </h3>
            <div className="flex gap-3 mt-[31px]">
              <a 
                href="https://www.linkedin.com/in/andrecarvalhomba/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity flex items-center justify-center bg-blue-600 text-white w-11 h-11 rounded-full"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/andrecarva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity flex items-center justify-center bg-gray-800 text-white w-11 h-11 rounded-full"
              >
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/932729f4df0bb3302c4f12972226b04a3a78e034?placeholderIfAbsent=true" alt="Social Media" className="h-11" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
