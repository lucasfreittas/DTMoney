import { HomeContainer, ContentContainer, SearchContainer, TableData } from './styles';

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
                        <button> <MagnifyingGlass size={20} color='#00B37E'/>Buscar</button>
                    </SearchContainer>
                    <TableData>
                        <tr>
                            <td>Desenvolvimento de site</td>
                            <td>R$ 12.000,00</td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                    </TableData>
            </ContentContainer> 
        </HomeContainer>
    )
};