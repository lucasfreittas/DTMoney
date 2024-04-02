import { HomeContainer, ContentContainer, SearchContainer, TableData, TableRow } from './styles';

import { MagnifyingGlass } from '@phosphor-icons/react';

import { Header } from '../../Components/Header';
import { Dashboard } from '../../Components/Dashboard';


export function Home(){
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
                        <TableRow transactionType='income'>
                            <td>Desenvolvimento de site</td>
                            <td>R$ 12.000,00</td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </TableRow>
                        <TableRow transactionType='outcome'>
                            <td>Hamburguer</td>
                            <td>- R$ 59,00</td>
                            <td>Alimentação</td>
                            <td>12/04/2022</td>
                        </TableRow>
                    </TableData>
            </ContentContainer> 
        </HomeContainer>
    )
};