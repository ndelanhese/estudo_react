import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";

function App() {

  const [isNewTrasactionsModalOpen, setIsNewTrasactionsModalOpen] = useState(false);


  function handleOpenNewTrasactionModal() {
    setIsNewTrasactionsModalOpen(true);
  }

  function handleCloseNewTrasactionModal() {
    setIsNewTrasactionsModalOpen(false)
  }


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTrasactionsModalOpen}
        onRequestClose={handleCloseNewTrasactionModal}>
        <h2>Cadastrar transação</h2>
      </Modal>


      <GlobalStyle />
    </>
  );
}

export default App;
