import logoImg from '../../assets/images/logo.svg';
import { Container, Content } from './styles';

/* Essa INTERFACE é para passar os parametros via props do component pai que é o App, 
    o padrão utilizado é o do typeScript. A função passada é a ação do modal que está em App.
    Para passar essa interface (props), deve-se, desestruturar com chaves {}.
*/

interface HeaderProps {
    onOpenNewTransectionModal: () => void
}

export function Header({ onOpenNewTransectionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="logo" />
                <button
                    type="button"
                    onClick={onOpenNewTransectionModal}
                >
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}