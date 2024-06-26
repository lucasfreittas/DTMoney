import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group';


export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`
export const ModalContent = styled(Dialog.Content)`
    width: 53.5rem;
    border-radius: 0.6rem;
    padding: 4rem 4.8rem;
    background: ${props => props.theme["gray-800"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    > h2 {
        font-size: 2.4rem;
        line-height: 140%;
    };

    > form {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 3.2rem;
        gap: 1.6rem;

        input {
            border-radius: 0.6rem;
            border: 0;
            background: ${(props) => props.theme['gray-900']};
            color: ${(props) => props.theme['gray-300']};
            padding: 1.6rem;
            font-size: 1.6rem;
            line-height: 140%;

            &::placeholder {
                color: ${(props) => props.theme['gray-500']};
            };

            &:focus{
                outline: 1px solid ${props => props.theme["green-300"]};
            };
    }
    };

    button[type='submit'] {
      height: 5.8rem;
      font-size: 1.6rem;
      line-height: 160%;
      border: 0;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 3.2rem;
      border-radius: 0.6rem;
      margin-top: 1.25rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s;
      }
    }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonsProps{
  variant: 'income' | 'outcome';
};

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonsProps>`
  background: ${props => props.theme["gray-700"]};
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 0.6rem;
  cursor: pointer;
  border: 0;
  color: ${props => props.theme["gray-300"]};

  svg {
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]}
  }

  &[data-state='unchecked']:hover{
    background-color: ${props => props.theme["gray-600"]};
  };

  &[data-state='checked']{
    color: ${props => props.theme.white};
    background-color: ${props => props.variant === 'income' ?  props.theme["green-500"] : props.theme["red-500"]};

    svg{
      color: ${props => props.theme.white};
    };
  };
`;