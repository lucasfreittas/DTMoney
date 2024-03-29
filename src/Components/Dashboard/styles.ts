import styled from "styled-components";

export const DashboardContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 3.2rem;
    margin-bottom: 6.4rem;
`;

interface DashboardCardProps {
    variant?: 'green'
};

export const DashboardCard = styled.div<DashboardCardProps>`
    width: 100%;
    background-color: ${props => props.theme["gray-600"]};
    padding: 2.4rem 3.2rem;
    border-radius: 0.6rem;

    > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.2rem;

        > span{
            font-size: 1.6rem;
            line-height: 160%;
            color: ${props => props.theme["gray-300"]};
        };
    };

    > h1{
            font-size: 3.2rem;
            line-height: 140%;
            color: ${props => props.theme["gray-100"]};
        };

    ${(props) => props.variant === 'green' &&
        `background-color: ${props.theme["green-700"]}`
    }
`;
