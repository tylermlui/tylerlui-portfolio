'use client';
import { usePathname } from 'next/navigation';
import Routing from './Routing';
import { projects, pages } from '../lib/projects';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentIndex = pages.indexOf(pathname);
  
  // Extract the project name from the pathname (assuming it follows the pattern /projectname)
  const projectName = pathname.split('/')[1];
  
  // Check if we're on the base route ("/")
  const isBaseRoute = projectName === '';

  // If it's not the base route, fetch the project description
  const projectDescription = !isBaseRoute && projectName ? projects[projectName] : null;

  return (
    <div className="overflow-hidden pt-[50vh] py-24">
      <div className="px-[8vw]">
        <div className="flex items-start gap-[4vw]">
          <div>
            <div className="text-[5vw] md:text-[1.5vw]">
              / {String(currentIndex + 1).padStart(2, '0')}
            </div>
          </div>
          <div>
            <div className="text-[5vw] md:text-[1.5vw]">              
                {isBaseRoute ? 'Web Developer' : 'Projects'}
            </div>
            <div className="text-[12vw] md:text-[5vw] font-cormorant">
              {isBaseRoute ? 'TYLER LUI' : projectName}
            </div>
            {/* Show the project description if it's not the base route */}
            {projectDescription && <div>{projectDescription}</div>}
            <div className="text-[5vw] md:text-[1.5vw]">
              <Routing />
            </div>
          </div>
        </div>
        {/* Actual page content */}
        <div className="mt-12">
          {children}
        </div>
      </div>
    </div>
  );
}
