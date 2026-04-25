import React from 'react';
import WorkflowHeroSection from './_ui/WorkflowHeroSection';
import { Metadata } from 'next';
import Workflow from './_ui/Workflow';
import WorkflowValues from './_ui/WorkflowValues';
import { getServerTranslation } from '@/i18n/server';
import { createPageMetadata, type PageMeta } from '@/utils/seo';

const workflowMeta = getServerTranslation<PageMeta>('workflow.meta');

export const metadata: Metadata = createPageMetadata('/workflow', workflowMeta);

const WorkflowPage = () => {
  return (
    <div>
      <WorkflowHeroSection />
      <Workflow />
      <WorkflowValues />
    </div>
  );
};

export default WorkflowPage;
