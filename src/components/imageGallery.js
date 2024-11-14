import Gallery from './gallery';
import AfricanMissions from '../Images/AfricanMissions.png';
import Birthday from '../Images/Birthday.jpg';
import Card from '../Images/Card.jpg';
import ElectronicHub from '../Images/ElectronicHub.png';
import GodsRemnant from '../Images/GodsRemnant.png';
import KeonStudio from '../Images/KeonStudio.png';
import Sisters from '../Images/Sisters.png';
import TheMandate from '../Images/TheMandate.jpg';
import TheWorshipExperience from '../Images/TheWorshipExperience.jpg';
import TradeFair from '../Images/TradeFair.png';
import Upsurge from '../Images/Upsurge.jpg';
import Upsurge1 from '../Images/Upsurge1.jpg';
import Upsurge2 from '../Images/Upsurge2.jpg';
import WelcomeToNovember from '../Images/WelcomeToNovember.png';


const ImageGallery = () => {
  const images = [
      AfricanMissions,
      Birthday,
      Card,
      ElectronicHub,
      GodsRemnant,
      KeonStudio,
      Sisters,
      TheMandate,
      TheWorshipExperience,
      TradeFair,
      Upsurge,
      Upsurge1,
      Upsurge2,
      WelcomeToNovember,
      // Add more image URLs as needed
  ];

  return (
      <div className="title-certifications">
          <p>Here are some designs:</p>
          <Gallery images={images} />
      </div>
  );
};

export default ImageGallery;