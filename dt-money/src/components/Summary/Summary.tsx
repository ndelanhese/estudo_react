import { Container } from './styles';
import icomImage from '../../assets/income.svg';
import outComImage from '../../assets/outcome.svg';
import totalComImage from '../../assets/total.svg';
import {useTransactions } from '../../hooks/useTransactions';

const Summary = () => {

    const { transactions } = useTransactions();


    const summary = transactions.reduce((acc, transaction) => {

        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;

    }, {
        deposits: 0,
        withdraw: 0,
        total: 0,
    })


    return (<Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={icomImage} alt="Icone de entrada"></img>
            </header>
            <strong>
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.deposits)}
            </strong>
        </div>
        <div>
            <header>
                <p>Saidas</p>
                <img src={outComImage} alt="Icone de saida"></img>
            </header>
            <strong>- {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.withdraw)}</strong>
        </div>
        <div className='highlightBackground'>
            <header>
                <p>Total</p>
                <img src={totalComImage} alt="Icone de total"></img>
            </header>
            <strong> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.total)}</strong>
        </div>
    </Container>);
}

export default Summary;