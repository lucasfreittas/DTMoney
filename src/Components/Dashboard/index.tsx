import { useTransactions } from "../../Contexts/useTransactions";
import { currencyFormater } from "../../Utils/formatter";
import { DashboardContainer, DashboardCard } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "@phosphor-icons/react";

export function Dashboard(){
    const { transactionsList } = useTransactions();

    const balance = transactionsList.reduce(
        (acc, transaction) => {
          if (transaction.type === 'income') {
            acc.income += transaction.price;
            acc.total += transaction.price;
          } else {
            acc.outcome += transaction.price;
            acc.total -= transaction.price;
          }
    
          return acc;
        },
        {
          income: 0,
          outcome: 0,
          total: 0,
        },
      );

    return(
        <DashboardContainer>
            <DashboardCard>
                <div>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color='#00B37E' />
                </div>
                <h1>{currencyFormater.format(balance.income)}</h1>
            </DashboardCard>
            <DashboardCard>
                <div>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#F75A68'  />
                </div>
                <h1>{currencyFormater.format(balance.outcome)}</h1>
            </DashboardCard>
            <DashboardCard variant='green'>
                <div>
                    <span>Total</span>
                    <CurrencyDollar size={32} />
                </div>
                <h1>{currencyFormater.format(balance.total)}</h1>
            </DashboardCard>
        </DashboardContainer>
    );
};