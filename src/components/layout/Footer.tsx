export function Footer() {
  return (
    <footer className="bg-gray-900 text-sm text-gray-400 font-normal leading-loose">
      <div className="container py-[52px]">
        <div className="flex w-full max-w-[1505px] mx-auto">
          <div className="flex w-[609px] max-w-full items-stretch gap-5 flex-wrap justify-between">
            <div className="flex flex-col">
              <div className="text-white text-[17px] font-bold leading-loose">
                André Carvalho
              </div>
              <div className="mt-[29px]">Financial Planning & Analysis</div>
              <div className="mt-[35px]">Supporting your organization to thrive !</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white text-[15px] font-medium leading-loose">
                Quick Links
              </div>
              <a href="#about" className="mt-[29px] hover:text-white transition-colors">About</a>
              <a href="#experience" className="mt-[22px] hover:text-white transition-colors">Experience</a>
              <a href="#skills" className="mt-[19px] hover:text-white transition-colors">Technical Skills</a>
              <a href="#interests" className="mt-[22px] hover:text-white transition-colors">Interests</a>
              <a href="#contact" className="mt-[22px] hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 flex w-full gap-5 flex-wrap justify-between mt-14 pt-[39px] pb-[5px]">
          <div>© 2025 All rights reserved.</div>
          <div className="flex items-stretch gap-[30px]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
