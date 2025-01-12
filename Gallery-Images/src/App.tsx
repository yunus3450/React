import { useState } from 'react'; 
import Images from './images';
import { slides } from './data'; 
import './styles.css';
import Modal from './assets/Modal';

const App = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleClose = () => setSelectedImage(null);

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % slides.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + slides.length) % slides.length);
    }
  };

  return (
    <>
      <Images data={slides} onClick={(index) => setSelectedImage(index)} />
      <Modal
        selectedImage={selectedImage}
        slides={slides}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
};

export default App;