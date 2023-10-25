'use client';
import { useState } from 'react';
import FlexColContainer from '../components/ui/containers/FlexColContainer';
import FlexRowContainer from '../components/ui/containers/FlexRowContainer';
import TabButton from '../components/ui/buttons/TabButton';
import ElementsContainer from '../components/ui/containers/ElementsContainer';
import GraphElement from '../components/ui/icons/graphs/GraphElement';
import UniversalForm from '../components/ui/forms/UniversalForm';
import ZoneButtonsGroup from '../components/ui/buttons/ZoneButtonsGroup';

const CompletedPage = () => {
  const formInputFields = [
    { name: 'firstName', value: '', label: 'First Name', required: true },
    { name: 'lastName', value: '', label: 'Last Name', required: true },
    { name: 'middleName', value: '', label: 'Middle Name', required: false },
  ];

  const handleSubmit = (formData: any) => {
    // Handle form submission with formData
    console.log('Form submitted with data:', formData);
  };

  return (
    <main className='grid grid-flow-row p-6'>
      <div className='flex flex-wrap items-center content-center gap-6 pt-20'>
        <FlexColContainer>
          <FlexRowContainer>
            <TabButton value='kanal' />
            <TabButton value='klappe' />
            <TabButton value='wärmetauscher' isActive={true} />
            <TabButton value='filter' />
            <TabButton value='register' />
            <TabButton value='ventilator' />
            <TabButton value='befeuchter' />
            <TabButton value='sonstiges' />
            <TabButton value='Kühltürme' />
            <TabButton value='digestorien' />
          </FlexRowContainer>
          <ElementsContainer>
            <GraphElement src='/images/kreislaufverbu.png' alt='Kreislaufverbu...' />
            <GraphElement src='/images/rotationswarm.png' alt='Rotationswärm...' />
            <GraphElement src='/images/kreuzwarmeta.png' alt='Kreuzwärmeta...' />
          </ElementsContainer>
        </FlexColContainer>
        <div className='p-4 border border-gray-400'>
          <UniversalForm
            fields={formInputFields}
            onSubmit={handleSubmit}
            submitButtonText='Submit'
          />
        </div>
        <ZoneButtonsGroup />
      </div>
    </main>
  );
};

export default CompletedPage;
