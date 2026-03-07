import InputText from "../components/input-text";
import CalendarBlank from "../assets/icons/CalendarBlank.svg?react";
import UserSquare from "../assets/icons/UserSquare.svg?react";
import TimeList from "./time-list";
import Button from "../components/button";
import useSchedules from "../hooks/use-schedules";
import useSchedule from "../hooks/use-schedule";

export default function FormSchedule() {
    const { schedules } = useSchedules();
        const { prepareSchedule } = useSchedule();
    
        console.log(schedules);
    
    
        function handleNewSchedule() {
            prepareSchedule();
        }
    return (
        <form className="gap-8 flex flex-col mt-6">
            <InputText  title="Data:" icon={CalendarBlank} mode="calendar" placeholder="Selecione uma data" />
            <TimeList title="Horários:" />
            <InputText title="Cliente:" icon={UserSquare} mode="text"  placeholder="Nome do cliente" />
            <Button onClick={handleNewSchedule}>AGENDAR</Button>
        </form>
        )
        }
    