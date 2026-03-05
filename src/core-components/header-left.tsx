
import Text from "../components/text";


export default function HeaderLeft() {
    return (
        <>
            <Text variant={"title-lg-bold"} className="text-gray-100 leading-8" >
                Agende um atendimento
            </Text>
            <Text variant={"text-sm-regular"} className="text-gray-300 mt-4 leading-5" >
                Selecione data, horário e informe o nome do cliente para criar o agendamento
            </Text>
        </>
    )
}