import { HomeContainer, ContentContainer, SearchContainer, TableData, TableRow } from './styles';

import { MagnifyingGlass } from '@phosphor-icons/react';

import { Header } from '../../Components/Header';
import { Dashboard } from '../../Components/Dashboard';
import { useTransactions } from '../../Contexts/useTransactions';
import { currencyFormater, dateFormater } from '../../Utils/formatter';


export function Home(){
    const { transactionsList } = useTransactions();

    return(
        <HomeContainer>
            <Header />
            <ContentContainer>
                <Dashboard />
                    <SearchContainer>
                        <input type="text" placeholder='Busque uma transação' />
                        <button> <MagnifyingGlass size={20}/>Buscar</button>
                    </SearchContainer>
                    <TableData>
                        <tbody>
                            { transactionsList && (
                                transactionsList.map((transaction) => (
                                    <TableRow transactionType={transaction.type}>
                                        <td>{transaction.description}</td>
                                        <td>{transaction.type === 'outcome' && '- '}{currencyFormater.format(transaction.price)}</td>
                                        <td>{transaction.category}</td>
                                        <td>{dateFormater.format(new Date(transaction.createdAt))}</td>
                                    </TableRow>
                                ))
                            )}
                        </tbody>
                    </TableData>
            </ContentContainer> 
        </HomeContainer>
    )
};