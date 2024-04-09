import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.section`
    max-width: 112rem;
    width: 100%;
    margin-top: -8rem;

`;

export const SearchContainer = styled.form`
    display: flex;
    gap: 1.6rem;
    width: 100%;
    margin-bottom: 2.4rem;

    > input {
        width: 100%;
        padding: 1.6rem;
        background-color: ${props => props.theme["gray-900"]};
        border: none;
        outline: none;
        border-radius: 0.6rem;
        font-size: 1.6rem;
        color: ${props => props.theme["gray-300"]};

        &::placeholder{
            color: ${props => props.theme["gray-500"]};
        };

        &:focus{
            border: 1px solid ${props => props.theme["green-300"]};
        };
    };

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;
        padding: 1.4rem 3.2rem;
        background-color: transparent;
        color: ${props => props.theme["green-300"]};
        border: 1px solid ${props => props.theme["green-300"]};
        border-radius: 0.6rem;
        line-height: 160%;
        font-weight: 700;
        transition: all 0.05s ease-in-out;

        &:hover{
            background-color: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
        };

        &:active{
            transform: scale(0.98);
        };
    };
`;

interface TableContentProps {
    transactionType?: 'income' | 'outcome' | undefined
};

export const TableData = styled.table<TableContentProps>`
    width: 100%;

    > tbody{
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 0.5rem;
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    };
`;

export const TableRow = styled.tr<TableContentProps>`

    display: grid;
    grid-template-columns: 2fr 1fr 1fr 0.5fr;

    :nth-child(2){
        color: ${({ transactionType }) => 
            transactionType === 'income' ? props => props.theme["green-300"] : props => props.theme["red-300"]
        };
    };

    :first-child{
        border-radius: 0.5rem 0 0 0.5rem;
    };
    :last-child{
        border-radius: 0 0.5rem 0.5rem 0;
    };

    > td {   
        width: 100%;
        padding: 2rem 3.2rem;
        background-color: ${props => props.theme["gray-700"]};
        font-size: 1.6rem;
        line-height: 160%;
        color: ${props => props.theme["gray-300"]};
       };
`;