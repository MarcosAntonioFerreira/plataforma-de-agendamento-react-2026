import InputText from "../components/input-text";
import CalendarBlank from "../assets/icons/CalendarBlank.svg?react";
import UserSquare from "../assets/icons/UserSquare.svg?react";
import TimeList from "./time-list";
import Button from "../components/button";
import useSchedules from "../hooks/use-schedules";
import useSchedule from "../hooks/use-schedule";

export default function FormSchedule() {
    const { schedules } = useSchedules();
    const { saveSchedule } = useSchedule();

    console.log(schedules);


    function handleSaveSchedule(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const nameClient = formData.get("nameClient") as string;
        const dateSchedule = formData.get("dateSchedule") as string;
        const timeSchedule = formData.get("timeSchedule") as string;
        const periodSchedule = formData.get("periodSchedule") as string;

        if (!nameClient || !dateSchedule || !timeSchedule) {
            alert("Preencha todos os campos");
            return;
        }

        saveSchedule({
            nameClient,
            dateSchedule,
            timeSchedule,
            periodSchedule // se quiser calcular depois
        });

        e.currentTarget.reset();

    }


    return (
        <form onSubmit={handleSaveSchedule} className="gap-8 flex flex-col mt-6">
            <InputText title="Data:" icon={CalendarBlank} name="dateSchedule" mode="calendar" placeholder="Selecione uma data" />
            <TimeList title="Horários:" name="timeSchedule" />
            <InputText title="Cliente:" icon={UserSquare} name="nameClient" mode="text" placeholder="Nome do cliente" />
            <Button type="submit" >AGENDAR</Button>
        </form>
    )
}
