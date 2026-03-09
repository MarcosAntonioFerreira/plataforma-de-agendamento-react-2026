import Container from "../components/container";
import FormSchedule from "../core-components/form-schedule";
import Header from "../core-components/header";
import SheduleList from "../core-components/schedules-list";


export default function PageHome() {
    return (
        <div className="flex flex-row m-3">
            <Container variant={"left_content"}>
                <Header title="Agende um atendimento" subTitle="Selecione data, horário e informe o nome do cliente para criar o agendamento" />
                <FormSchedule />
            </Container>
            <Container variant={"right_content"}>
                <div className="m-">
                    <Header title="Sua agenda" subTitle="Consulte os seus cortes de cabelo agendados por dia" />
                </div>
                <SheduleList />
            </Container>

        </div>
    )
}