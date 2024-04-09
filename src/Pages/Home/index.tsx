import { HomeContainer, ContentContainer, SearchContainer, TableData, TableRow } from './styles';

import { MagnifyingGlass } from '@phosphor-icons/react';

import { Header } from '../../Components/Header';
import { Dashboard } from '../../Components/Dashboard';
import { useTransactions } from '../../Contexts/useTransactions';
import { currencyFormater, dateFormater } from '../../Utils/formatter';

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';


const searchFormSchema = zod.object({
    query: zod.string(),
  })
  
  type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function Home(){
    const { transactionsList, fetchDataBaseTransactions } = useTransactions();

    const { register, handleSubmit } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
      })

      async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchDataBaseTransactions(data.query)
      }

    return(
        <HomeContainer>
            <Header />
            <ContentContainer>
                <Dashboard />
                    <SearchContainer onSubmit={handleSubmit(handleSearchTransactions)}>
                        <input type="text" placeholder='Busque uma transação' {...register('query')} />
                        <button> <MagnifyingGlass size={20}/>Buscar</button>
                    </SearchContainer>
                    <TableData>
                        <tbody>
                            { transactionsList && (
                                transactionsList.map((transaction) => (
                                    <TableRow transactionType={transaction.type}>
                                        <td>{transaction.description}</td>
                                        <td>
                                            {transaction.type === 'outcome' && '- '}
                                            {currencyFormater.format(transaction.price)}
                                        </td>
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