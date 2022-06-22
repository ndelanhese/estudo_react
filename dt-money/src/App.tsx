import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import NewTransitionModal from "./components/NewTransactionsModal/NewTransactionModal";
import TransactionsPorvider, { TransactionsContext } from "./TransactionsContexts";

Modal.setAppElement("#root")


const App = () => {

  const [isNewTrasactionsModalOpen, setIsNewTrasactionsModalOpen] = useState(false);


  function handleOpenNewTrasactionModal() {
    setIsNewTrasactionsModalOpen(true);
  }

  function handleCloseNewTrasactionModal() {
    setIsNewTrasactionsModalOpen(false)
  }


  return (
    <TransactionsPorvider>
      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModal} />
      <Dashboard />

      <NewTransitionModal
        isOpen={isNewTrasactionsModalOpen}
        onRequestClose={handleCloseNewTrasactionModal}
      />


      <GlobalStyle />
    </TransactionsPorvider>
  );
}

export default App;
