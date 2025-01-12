import React from 'react';

interface ModalProps {
  selectedImage: number | null;
  slides: { src: string; description: string; title: string }[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Modal: React.FC<ModalProps> = ({ selectedImage, slides, onClose, onNext, onPrev }) => {
  if (selectedImage === null) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <button className="prev-button" onClick={onPrev}>
          &#9664;
        </button>
        <img
          src={slides[selectedImage].src}
          alt={slides[selectedImage].description}
          className="modal-image"
        />
        <button className="next-button" onClick={onNext}>
          &#9654;
        </button>
        <div className="modal-caption">
          <h3>{slides[selectedImage].title}</h3>
          <p>{slides[selectedImage].description}</p>
        </div>
        <div className="image-counter">
          {selectedImage + 1}/{slides.length}
        </div>
      </div>
    </div>
  );
};

export default Modal;
