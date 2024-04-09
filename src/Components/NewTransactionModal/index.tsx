import * as Dialog from '@radix-ui/react-dialog';

import { ModalContent, Overlay, CloseButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react';
import { useTransactions } from '../../Contexts/useTransactions';

import { Controller, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const newTransactionsSchema = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    type: zod.enum(['income', 'outcome']),
});

type NewTransactionsInputs = zod.infer<typeof newTransactionsSchema>


export function NewTransactionModal(){

    const {switchModalState } = useTransactions();

    const { control, register, handleSubmit, reset} = useForm<NewTransactionsInputs>({
        resolver: zodResolver(newTransactionsSchema),
        defaultValues: {
            type: 'outcome',
        }
    })

    const {addTransaction} = useTransactions();


   function handleAddTransaction(data: NewTransactionsInputs){
    addTransaction(data);
    switchModalState();
    reset();
   }; 
   
    return(
            <Dialog.Portal>
                 <Overlay />

                <ModalContent>
                    <Dialog.Title>Nova Transação</Dialog.Title>

                    <CloseButton>
                        <X size={24} />
                    </CloseButton>

                    <form onSubmit={handleSubmit(handleAddTransaction)}>
                        <input type="text" placeholder='Descrição' required {...register('description')}/>
                        <input type="number" placeholder='Preço' required {...register('price', {valueAsNumber: true})}/>
                        <input type="text" placeholder='Categoria' required {...register('category')}/>
                        <Controller
                            control={control}
                            name="type"
                            render={({ field }) => {
                            return (
                                <TransactionType
                                onValueChange={field.onChange}
                                value={field.value}
                                >
                                <TransactionTypeButton variant='income' value='income' >
                                    <ArrowCircleUp size={24}/>
                                    Entrada
                                </TransactionTypeButton>

                                <TransactionTypeButton variant='outcome' value='outcome' defaultChecked>
                                    <ArrowCircleDown size={24}/>
                                    Saída
                                </TransactionTypeButton>
                                </TransactionType>
                            )
                            }}
                        />

                        <button type='submit'>Cadastrar</button>
                    </form>
                </ModalContent>
            </Dialog.Portal>
    )
};