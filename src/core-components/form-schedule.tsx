import InputText from "../components/input-text";
import CalendarBlank from "../assets/icons/CalendarBlank.svg?react";
import UserSquare from "../assets/icons/UserSquare.svg?react";
import TimeList from "./time-list";
import Button from "../components/button";

export default function FormSchedule() {
    return (
        <form className="gap-8 flex flex-col mt-6">
            <InputText  title="Data:" icon={CalendarBlank} mode="calendar" placeholder="Selecione uma data" />
            <TimeList title="Horários:" />
            <InputText title="Cliente:" icon={UserSquare} mode="text"  placeholder="Nome do cliente" />
            <Button>AGENDAR</Button>
        </form>
        )
        }
    