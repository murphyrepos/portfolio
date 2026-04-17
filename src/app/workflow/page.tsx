import React from 'react';
import WorkflowHeroSection from './_ui/WorkflowHeroSection';
import { Metadata } from 'next';
import { PRODUCTION_URL } from '@/utils/helper';
import Workflow from './_ui/Workflow';
import WorkflowValues from './_ui/WorkflowValues';
import common from '@/locales/en/common.json';

const workflowMeta = common.workflow.meta;

export const metadata: Metadata = {
  title: workflowMeta.title,
  description: workflowMeta.description,
  alternates: {
    canonical: `${PRODUCTION_URL}/workflow`,
  },
  openGraph: {
    title: workflowMeta.openGraphTitle,
    description: workflowMeta.description,
    url: `${PRODUCTION_URL}/workflow`,
    siteName: 'Murphy Repos',
    type: 'website',
  },
};

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
