'use client';

// app/[project]/page.tsx
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { projects } from '../lib/projects';
import PageWrapper from '../components/PageWrapper';
import transition from '../components/transition';

function ProjectPage() {
  // Use client-side params hook
  const params = useParams();
  const project = params?.project as string;
  
  // Handle missing project
  if (!project || !projects[project]) {
    // For client components, we can't directly return notFound()
    // So we'll render an error message instead
    return (
      <PageWrapper>
        <div className="p-8">
          <h1 className="text-2xl font-bold">Project Not Found</h1>
          <p className="mt-4">The requested project could not be found.</p>
        </div>
      </PageWrapper>
    );
  }
  
  return (
    <PageWrapper>
        <></>
    </PageWrapper>
  );
}
export default transition(ProjectPage)