import Modal from "react-modal";
import { FormEvent, useState } from "react";
import incomeImg from "../../assets/images/income.svg";
import outcomeImg from "../../assets/images/outcome.svg";
import closeImg from "../../assets/images/close.svg";
import { Container, TransationTypeContainer, RadioBox } from "./styles";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  const hendleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      title, 
      value, 
      category, 
      type
    }

    api.post('/transactions', data)
  }

  return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={hendleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <input 
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)}  
          />

          <input
            type="number" 
            placeholder="Valor" 
            value={value}
            onChange={event => setValue(Number(event.target.value))}
          />

          <TransationTypeContainer>
            <RadioBox
              type="button"
              onClick={() => {setType('deposit')}}
              isActive={type === 'deposit'}
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={() => {setType('withdrow')}}
              // Não existe esse isActive dentro de um button tradicional, por isso tem que ser criado uma interface no style.ts
              isActive={type === 'withdrow'}
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransationTypeContainer>

          <input 
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Container>
    </Modal>
  )
}
