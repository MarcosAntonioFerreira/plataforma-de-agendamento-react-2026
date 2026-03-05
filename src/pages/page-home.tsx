import Container from "../components/container";
import { HeaderItemSchedule } from "../components/header-item-schedule";
import FormSchedule from "../core-components/form-schedule";
import HeaderLeft from "../core-components/header-left";
import SunHorizon from "../assets/icons/SunHorizon.svg?react"

export default function PageHome() {
    return (
        <div className="flex flex-row">
            <Container>
                <HeaderLeft />
                <FormSchedule />
            </Container>
            <div className="bg-yellow w-full pl-28 pr-28">
                <HeaderItemSchedule
                    icon={SunHorizon}
                    content_title={"Manhã"}
                    content_schedules={"09h-12h"}
                />
            </div>
        </div>
    )
}