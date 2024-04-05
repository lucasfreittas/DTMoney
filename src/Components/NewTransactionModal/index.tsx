import * as Dialog from '@radix-ui/react-dialog';

import { ModalContent, Overlay, CloseButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react';
import { useTransactions } from '../../Contexts/useTransactions';

export function NewTransactionModal(){

    const {addTransaction} = useTransactions();

   function handleAddTransaction(){
    const newTransaction = {
            description: 'Teste',
            price: 2,
            category: 'Teste',
            type: 'income'
    };

    addTransaction(newTransaction)

   }; 
    return(
            <Dialog.Portal>
                 <Overlay />

                <ModalContent>
                    <Dialog.Title>Nova Transação</Dialog.Title>

                    <CloseButton>
                        <X size={24} />
                    </CloseButton>

                    <form action="">
                        <input type="text" placeholder='Descrição' required />
                        <input type="number" placeholder='Preço' required />
                        <input type="text" placeholder='Categoria' required />

                        <TransactionType>
                            <TransactionTypeButton variant='income' value='income'>
                                <ArrowCircleUp size={24}/>
                                Entrada
                            </TransactionTypeButton>

                            <TransactionTypeButton variant='outcome' value='outcome'>
                                <ArrowCircleDown size={24}/>
                                Saída
                            </TransactionTypeButton>
                        </TransactionType>

                        <button type='submit' onClick={handleAddTransaction}>Cadastrar</button>
                    </form>
                </ModalContent>
            </Dialog.Portal>
    )
};