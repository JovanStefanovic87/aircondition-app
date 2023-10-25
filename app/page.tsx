'use client';
import GraphElement from './components/ui/icons/graphs/GraphElement';
import RedSmiley from './components/ui/icons/emojis/RedSmiley';
import OrangeSmiley from './components/ui/icons/emojis/OrangeSmiley';
import GreenSmiley from './components/ui/icons/emojis/GreenSmiley';
import ActiveStep from './components/ui/icons/steps/ActiveStep';
import CompletedStep from './components/ui/icons/steps/CompletedStep';
import FutureStep from './components/ui/icons/steps/FutureStep';
import PrimaryButton from './components/ui/buttons/PrimaryButton';
import CameraButton from './components/ui/buttons/CameraButton';
import ImageButton from './components/ui/buttons/ImagesButton';
import ElementsContainer from './components/ui/containers/ElementsContainer';
import TabButton from './components/ui/buttons/TabButton';
import FlexRowContainer from './components/ui/containers/FlexRowContainer';
import FlexColContainer from './components/ui/containers/FlexColContainer';
import UniversalForm from './components/ui/forms/UniversalForm';
import ZoneButtonsGroup from './components/ui/buttons/ZoneButtonsGroup';

const Home = () => {
  return (
    <main className='grid grid-flow-row p-6'>
      <div className='flex flex-wrap items-center content-center gap-6 pt-20'>
        <GraphElement
          src='/images/außenluftansaugung.png'
          alt='Außenluftansaugung'
          isIncluded={true}
        />
        <GraphElement src='/images/außenluftkanal.png' alt='Außenluftkanal' isIncluded={true} />
        <GraphElement src='/images/schalldämpfer.png' alt='Schalldämpfer' isIncluded={true} />
        <GraphElement src='/images/zuluftkanalint.png' alt='Zuluftkanalint' isIncluded={true} />
        <GraphElement src='/images/luftauslass.png' alt='Luftauslass' isIncluded={true} />
        <GraphElement src='/images/umluftansaugung.png' alt='Umluftansaugung' isIncluded={true} />
        <GraphElement src='/images/mischluftklappe.png' alt='Mischluftklappe' isIncluded={true} />
        <GraphElement src='/images/kreislaufverbu.png' alt='Kreislaufverbu...' isIncluded={true} />
        <GraphElement src='/images/rotationswarm.png' alt='Rotationswärm...' isIncluded={true} />
        <GraphElement src='/images/kreuzwarmeta.png' alt='Kreuzwärmeta...' isIncluded={true} />
        <GraphElement src='/images/erhitzer.png' alt='Erhitzer' isIncluded={true} />
        <GraphElement src='/images/filtercoarse.png' alt='Filtercoarse' isIncluded={true} />
        <GraphElement src='/images/filterePM1-50.png' alt='FilterePM1-50' isIncluded={true} />
        <GraphElement src='/images/filterePM1-80.png' alt='FilterePM1-80' isIncluded={true} />
        <GraphElement src='/images/filterePM2,5-50.png' alt='FilterePM2,5-50' isIncluded={true} />
        <GraphElement src='/images/filterePM10-50.png' alt='FilterePM10-50' isIncluded={true} />
        <GraphElement src='/images/filterH13.png' alt='FilterH13' isIncluded={true} />
        <GraphElement src='/images/filterM5.png' alt='FilterM5' isIncluded={true} />
        <GraphElement src='/images/filterF7.png' alt='FilterF7' isIncluded={true} />
        <GraphElement src='/images/filterF9.png' alt='FilterF9' isIncluded={true} />
        <GraphElement src='/images/jalousieklappe.png' alt='Jalousieklappe' isIncluded={true} />
        <GraphElement src='/images/kühler.png' alt='Kühler' isIncluded={true} />
        <GraphElement src='/images/tropfenabsche.png' alt='Tropfenabsche' isIncluded={true} />
        <GraphElement src='/images/uv-lampe.png' alt='uv-lampe' isIncluded={true} />
      </div>
    </main>
  );
};

export default Home;
