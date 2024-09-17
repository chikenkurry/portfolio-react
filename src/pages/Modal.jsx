// src/components/Modal.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, content }) => {
    const { text, image } = content;
    const formattedText = text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
  if (!isOpen) return null;
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div style={styles.overlay} onClick={handleOverlayClick}>
      <motion.div
        style={styles.modal}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button onClick={onClose} style={styles.closeButton}>X</button>
        <div style={styles.display}>
            <img src={content.image} alt={content.title} style={styles.cardImg} />
            <div style={{width:"50%",minWidth:"300px", display:"flex", alignItems:"center"}}>
                {formattedText}  
            </div>
            
        </div>
      </motion.div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    position: 'relative',
    backgroundColor: '#fff',
    padding: '1%',
    borderRadius: '20px',
    maxWidth: '800px',
    width: '80%',
    maxHeight: '80vh',
    overflowY: 'auto', // Enable vertical scrolling
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
  cardImg: {
    width:"50%",
    maxWidth:"300px",
    minWidth:"200px",
    height:"100%",
    maxHeight:"400px",
    objectFit:"cover",
    transition: "0.5s",
    borderRadius: "30px",
  },
  display: {
    
    display: "flex",
    justifyContent:"space-evenly",
    flexWrap:"wrap",
    overscrollBehaviorX:"contain",
    scrollSnapType: "x mandatory",
    scrollBarWidth: "none",
    width:"100%",
    height:"100%"
  
},
};

export default Modal;