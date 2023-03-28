import React, { useState } from 'react';
import { GlobalStyle } from './assets/styles/global';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

/* Essa função Modal.setAppElement('#root'); é do component Modal,
  ela adiciona o component dentro do #root da minha aplicação!
  */
  Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
    
    const hendleOpenNewTransactionModal = () => {
        setIsNewTransactionModalOpen(true)
    }
    
    const hendleCloseNewTransactionModal = () => {
        setIsNewTransactionModalOpen(false)
    }

  return (
    <>
      <Header 
        onOpenNewTransectionModal={hendleOpenNewTransactionModal}
      />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={hendleCloseNewTransactionModal} 
      />
      <GlobalStyle />
    </>
  );
}
