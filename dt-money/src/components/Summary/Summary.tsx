import React, {useContext} from 'react'
import { Container } from './styles';
import icomImage from '../../assets/income.svg';
import outComImage from '../../assets/outcome.svg';
import totalComImage from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContexts';

const Summary = () => {

    const {transactions} = useContext(TransactionsContext);

    return (<Container>
       <div>
        <header>
            <p>Entradas</p>
            <img src={icomImage} alt="Icone de entrada"></img>
        </header>
        <strong>R$1000,00</strong>
       </div>
       <div>
        <header>
            <p>Saidas</p>
            <img src={outComImage} alt="Icone de saida"></img>
        </header>
        <strong>-R$500,00</strong>
       </div>
       <div className='highlightBackground'>
        <header>
            <p>Total</p>
            <img src={totalComImage} alt="Icone de total"></img>
        </header>
        <strong>R$500,00</strong>
       </div>
    </Container>);
}

export default Summary;