import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

import { ModalContent, Overlay, CloseButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react';

export function NewTransactionModal(){
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

                        <button type='submit'>Cadastrar</button>
                    </form>
                </ModalContent>
            </Dialog.Portal>
    )
};