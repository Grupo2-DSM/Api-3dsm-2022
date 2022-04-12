import { InputTitle, Input, FormContainer, TextArea, FormContent, FormContentRow, Selection, FormContentPriority, Button } from './styles'

import { FaAngleRight } from 'react-icons/fa';

export default function CreateTickets() {
    return (
        <>
            <FormContainer>
                <InputTitle placeholder="Título do chamado" />
                <TextArea placeholder="Descrição do chamado" />
            
                <FormContentRow>
                        <FormContent>
                            <Input placeholder="Local" />
                            <Selection>
                                <option selected>Selecione</option>
                                <option>Software</option>
                                <option>Hardware</option>
                            </Selection>
                        </FormContent>

                        <FormContent>
                            <Input placeholder="Sala" />
                            <Input placeholder="Equipamento" />
                        </FormContent>

                        <FormContent>
                            <Input placeholder="ID do equipamento" />
                            <Input placeholder="Descrição do equipamento" />
                        </FormContent>
                        <FormContentPriority>
                            <Selection>
                                <option selected>Prioridade</option>
                                <option>Alta</option>
                                <option>Baixa</option>
                            </Selection>
                        </FormContentPriority>
                        <Button>Enviar chamado <FaAngleRight/> </Button>
                </FormContentRow>
            </FormContainer>
        </>
    );
}



