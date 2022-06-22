import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from "./services/api";

interface TransactionsContextDate{
transactions: Transactions[];
createTransaction: (transactions: TransactionInput) => void;
}


export const TransactionsContext = createContext<TransactionsContextDate>(
    {} as TransactionsContextDate
    );


interface Transactions {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}


interface TransactionsProviderProps {
    children: ReactNode;
}


type TransactionInput = Omit<Transactions , 'id' | 'createdAt'>;

function createTransaction(transaction: TransactionInput) {
api.post('transactions', transaction)
}

const TransactionsPorvider = ({ children }: TransactionsProviderProps) => {



    const [transactions, setTransactions] = useState<Transactions[]>([]);
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []);

    return <TransactionsContext.Provider value={{transactions, createTransaction}}>

        {children}

    </TransactionsContext.Provider>

}

export default TransactionsPorvider;

