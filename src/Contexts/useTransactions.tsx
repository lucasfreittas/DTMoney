import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface Transaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    category: string,
    price: number,
    createdAt: string
};

interface UserTransactionsTypes{
    transactionsList: Transaction[];
};

interface UserTransactionsProviderProps{
    children: ReactNode
};


export const TransactionsContext = createContext({} as UserTransactionsTypes);

export function UserTransactionsProvider({children}:UserTransactionsProviderProps){
    const [ transactionsList, setTransactionsList ] = useState<Transaction[]>([]) 

    async function fetchDataBaseTransactions(){
        const response = await fetch('http://localhost:3333/dataBase');
        const data = await response.json();

        setTransactionsList(data);
    };

    useEffect(() => {
        fetchDataBaseTransactions();
    },[])
    
    return(
        <TransactionsContext.Provider value={{
            transactionsList
        }}>
            {children}
        </TransactionsContext.Provider>
    );
};

export function useTransactions(){
    const context = useContext(TransactionsContext);
    return context
};