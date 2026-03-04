import Container from "../components/container";
import Text from "../components/text";
import FormSchedule from "./form-schedule";

export default function HeaderLeft() {
    return (
        <Container >
            <Text variant={"title-lg-bold"} className="text-gray-100 leading-8" >
                Agende um atendimento
            </Text>
            <Text variant={"text-sm-regular"} className="text-gray-300 mt-4 leading-5" >
                Selecione data, horário e informe o nome do cliente para criar o agendamento
            </Text>
            <FormSchedule />
            
        </Container>
    )
}