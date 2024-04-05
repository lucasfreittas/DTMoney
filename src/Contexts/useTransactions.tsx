import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../Lib/axios";

interface Transaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    category: string,
    price: number,
    createdAt: string
};

interface NewTransactionsType {
    description: string,
    type: string,
    category: string,
    price: number,
};

interface UserTransactionsTypes{
    transactionsList: Transaction[],
    addTransaction: (data: NewTransactionsType) => void
};

interface UserTransactionsProviderProps{
    children: ReactNode
};


export const TransactionsContext = createContext({} as UserTransactionsTypes);

export function UserTransactionsProvider({children}:UserTransactionsProviderProps){
    const [ transactionsList, setTransactionsList ] = useState<Transaction[]>([]) 

    async function fetchDataBaseTransactions(){
        const response = await api.get('dataBase');

        setTransactionsList(response.data);
        console.log(response.data)
    };

    async function addTransaction(data: NewTransactionsType){
        const {category, description, price, type } = data

        const newTransaction = await api.post('dataBase', {
            description,
            price,
            category,
            type,
            createdAt: new Date()
        })

        setTransactionsList((state) => [newTransaction.data, ...state])

    };

    useEffect(() => {
        fetchDataBaseTransactions();
    },[fetchDataBaseTransactions])
    
    return(
        <TransactionsContext.Provider value={{
            transactionsList,
             addTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    );
};

export function useTransactions(){
    const context = useContext(TransactionsContext);
    return context
};