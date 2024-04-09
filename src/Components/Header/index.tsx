import { HeaderContariner, ContentContainer } from "./styles";
import { NewTransactionModal } from "../NewTransactionModal";
import * as Dialog from '@radix-ui/react-dialog';

import DTMoneyLogo from '../../Assets/DTMoney-logo.svg'
import { useTransactions } from "../../Contexts/useTransactions";

export function Header(){
    const { isModalOpen, switchModalState} = useTransactions();

    return(
        <HeaderContariner>
            <ContentContainer>
                <img src={DTMoneyLogo} alt="" />

                <Dialog.Root open={isModalOpen} onOpenChange={switchModalState}>
                    <Dialog.Trigger asChild>
                        <button onClick={switchModalState}>Nova Transação</button>
                    </Dialog.Trigger>

                    <NewTransactionModal/>
                </Dialog.Root>
                
            </ContentContainer>
        </HeaderContariner>
    )
};