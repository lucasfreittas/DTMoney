import styled from 'styled-components'

export const HeaderContariner = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 21.2rem;
    background-color: ${props => props.theme['gray-900']};
    padding-top: 4rem;
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 112rem;

    > img {
        max-width: 17.2rem;
    };

    > button {
        padding: 1.2rem 2rem;
        background-color: ${props => props.theme['green-500']};
        color: ${props => props.theme.white};
        font-weight: 700;
        line-height: 160%;
        border-radius: 0.6rem;
        transition: all 0.05s ease-in;

        &:hover{
            background-color: ${props => props.theme['green-300']};
        };

        &:active{
            transform: scale(0.98);
        };
    };
`;

