import { HeaderContariner, ContentContainer } from "./styles";

import DTMoneyLogo from '../../Assets/DTMoney-logo.svg'

export function Header(){
    return(
        <HeaderContariner>
            <ContentContainer>
                <img src={DTMoneyLogo} alt="" />
                <button>Nova Transação</button>
            </ContentContainer>
        </HeaderContariner>
    )
};