import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)]", className)}>
      <div className="container flex w-full max-w-[1481px] items-stretch gap-5 flex-wrap justify-between py-4">
        <div className="flex items-center gap-[18px]">
          <div className="text-blue-900 text-[17px] font-bold leading-loose">
            ANDRE CARVALHO
          </div>
          <div className="bg-gray-300 self-stretch flex w-px h-6" />
          <div className="text-gray-500 text-xs font-normal leading-loose">
            Finance Executive
          </div>
        </div>
        <nav className="flex items-center gap-[29px] text-xs text-gray-700 font-medium">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-blue-900 transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-blue-900 transition-colors"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-blue-900 transition-colors"
          >
            Skills
          </a>
          <a
            href="#interests"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#interests')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-blue-900 transition-colors"
          >
            Interests
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="rounded bg-blue-900 text-white px-4 py-3.5 hover:bg-blue-800 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
