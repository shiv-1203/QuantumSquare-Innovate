import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Styles from './auto-open-close.css';

const customStyles = {
    content: {
        top:'50%',
    },
};

const AutoOpenCloseComponent = props => {
    const {onCloseModal} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [timer, setTimer] = useState(10);

    useEffect(() => {

        console.log(isOpen);
        const timeoutId = setTimeout(() => {
            setIsOpen(true);
        }, 30000);

        return () => clearTimeout(timeoutId);

    },[]);

    useEffect(() => {
        if(isOpen){
            const timeoutId = setTimeout(() => {
                setIsOpen(false);
                onCloseModal;
            }, 10000);
    
            return () => clearTimeout(timeoutId);
        }
    },[isOpen]);

    useEffect(() => {
        if(isOpen){
            const timeRemaining = setInterval(() => {
                setTimer(prevTime => prevTime - 1);
            },1000)

            return () => clearInterval(timeRemaining);
        }
    },[isOpen]);

    const closeModal = () =>{
        setIsOpen(false);
    }

    return (
        isOpen ? (
        <div className={Styles.Overlay}>
            <h2>ModalEase</h2>
            <p>This is an auto open close modal which will close after {timer} seconds</p>
            <span className={Styles.buttonClose} onClick={() => (onCloseModal,closeModal())}>Close</span>
            <span className={Styles.buttonOk}>Ok</span>
        </div>
        ): (null)
    );
}

export default AutoOpenCloseComponent;