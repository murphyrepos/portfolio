import React from 'react';
import WorkflowHeroSection from './_ui/WorkflowHeroSection';
import { Metadata } from 'next';
import Workflow from './_ui/Workflow';
import WorkflowValues from './_ui/WorkflowValues';
import common from '@/locales/en/common.json';
import { createPageMetadata } from '@/utils/seo';

const workflowMeta = common.workflow.meta;

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
