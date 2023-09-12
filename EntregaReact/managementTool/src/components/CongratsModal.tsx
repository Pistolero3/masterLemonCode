import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';

interface CongratsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

// eslint-disable-next-line react/function-component-definition
const CongratsModal: React.FC<CongratsModalProps> = ({ isOpen, onRequestClose }) => {
    const modalStyles = {
        content: {
            width: '300px', // Ancho deseado para la modal
            height: '200px', // Altura deseada para la modal
            margin: 'auto' // Centrar la modal horizontalmente
        }
    };
    return (
        <div className="modalContainer">
            <Modal style={modalStyles} isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Congrats Modal" ariaHideApp={false}>
                <h2>Congratulations!</h2>
                <p>You sent your order successfully!</p>
                <button type="submit" onClick={onRequestClose}>
                    Close
                </button>
            </Modal>
        </div>
    );
};

export default CongratsModal;
