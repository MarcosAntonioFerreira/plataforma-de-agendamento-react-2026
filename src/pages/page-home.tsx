import Container from "../components/container";
import FormSchedule from "../core-components/form-schedule";
import HeaderLeft from "../core-components/header-left";
import SheduleList from "../core-components/schedules-list";


export default function PageHome() {
    return (
        <div className="flex flex-row items-center">
            <Container>
                <HeaderLeft />
                <FormSchedule />
            </Container>
            <div className="h-full w-full pl-28 pr-28">
                <SheduleList />
            </div>
        </div>
    )
}