import { cn } from "@/lib/utils";

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
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/0cb76a973b01603025412baceb1de0cb9ae96e6f?placeholderIfAbsent=true" alt="Social Media" className="w-11 h-11 rounded-full" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://cdn.builder.io/api/v1/image/assets/4f4a5d4edc254f56a8288e3c75618f35/932729f4df0bb3302c4f12972226b04a3a78e034?placeholderIfAbsent=true" alt="Social Media" className="h-11" />
              </a>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
              alert('Thank you for your message! I will get back to you soon.');
            }} className="mt-12 space-y-6">
              <h3 className="text-gray-800 text-xl font-bold leading-loose">
                Send a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Your message..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
