import { DashboardContainer, DashboardCard } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "@phosphor-icons/react";

export function Dashboard(){
    return(
        <DashboardContainer>
            <DashboardCard>
                <div>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color='#00B37E' />
                </div>
                <h1>R$ 17.400,00</h1>
            </DashboardCard>
            <DashboardCard>
                <div>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#F75A68'  />
                </div>
                <h1>R$ 1.259,00</h1>
            </DashboardCard>
            <DashboardCard variant='green'>
                <div>
                    <span>Total</span>
                    <CurrencyDollar size={32} />
                </div>
                <h1>R$ 16.141,00</h1>
            </DashboardCard>
        </DashboardContainer>
    );
};