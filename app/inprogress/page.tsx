'use client';
import ColumnWrapper from '../components/ui/columns/ColumnWrapper';
import AttachmentButtonGroup from '../components/ui/buttons/AttachmentButtonGroup';
import EmojisContainer from '../components/ui/containers/EmojisContainer';
import DividingLine from '../components/ui/DividingLine';
import PrimaryButton from '../components/ui/buttons/PrimaryButton';
import ActiveStep from '../components/ui/icons/steps/ActiveStep';
import CompletedStep from '../components/ui/icons/steps/CompletedStep';
import FutureStep from '../components/ui/icons/steps/FutureStep';
import ZoneButton from '../components/ui/buttons/ZoneButton';

const InProgrssPage = () => {
  return (
    <main className='grid grid-flow-row p-6 mt-14 mb-20'>
      <div className='flex flex-wrap items-start gap-6'>
        <ColumnWrapper title='physikalisch'>
          <AttachmentButtonGroup />
          <EmojisContainer description='Fremdmaterial' green={true} yellow={true} />
          <DividingLine />
          <PrimaryButton onClick={() => {}} />
        </ColumnWrapper>

        <ColumnWrapper title='konstruktiv'>
          <AttachmentButtonGroup />
          <EmojisContainer
            description='Gehäuse- / Türabdichtung fehlt / defekt fehlt / defekt'
            green={true}
            yellow={true}
          />
          <EmojisContainer description='Gehäuse undicht' green={true} yellow={true} />
          <EmojisContainer
            description='Bodenablauh nincht verschlossen'
            green={true}
            yellow={true}
          />
          <EmojisContainer description='Kenndaten fehlen' green={true} yellow={true} />
          <EmojisContainer description='Nicht einsehbar/prüfbar' green={true} yellow={true} />
          <EmojisContainer
            description='Innendämmung abgelöst / beschädigt'
            green={true}
            yellow={true}
            orange={false}
            red={true}
          />
          <DividingLine />
          <PrimaryButton onClick={() => {}} />
        </ColumnWrapper>
        <ColumnWrapper title='mikrobiologisch' isComplited={true}>
          <p className='ml-4 -mb-4'>ANLAGE</p>
          <DividingLine />
          <p className='opacity-50 ml-8 -mt-2'>N/A</p>
        </ColumnWrapper>
      </div>
      <div className='flex justify-between items-center px-6 py-4 fixed bottom-0 left-0 w-full border-t border-black bg-white'>
        <div className='flex gap-8 '>
          <CompletedStep index={1} process='Inspection' />
          <ActiveStep index={2} process='Anlage' />
          <FutureStep index={3} process='Konfiguration' />
          <FutureStep index={4} process='Elemente' />
        </div>
        <ZoneButton />
      </div>
    </main>
  );
};

export default InProgrssPage;
