import { HeaderContariner, ContentContainer } from "./styles";
import { NewTransactionModal } from "../NewTransactionModal";
import * as Dialog from '@radix-ui/react-dialog';

import DTMoneyLogo from '../../Assets/DTMoney-logo.svg'

export function Header(){
    return(
        <HeaderContariner>
            <ContentContainer>
                <img src={DTMoneyLogo} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <button>Nova Transação</button>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
                
            </ContentContainer>
        </HeaderContariner>
    )
};