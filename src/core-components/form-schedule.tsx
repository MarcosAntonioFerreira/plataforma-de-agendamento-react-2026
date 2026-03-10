import InputText from "../components/input-text";
import CalendarBlank from "../assets/icons/CalendarBlank.svg?react";
import UserSquare from "../assets/icons/UserSquare.svg?react";
import TimeList from "./time-list";
import Button from "../components/button";
import useSchedule from "../hooks/use-schedule";
import { useState } from "react";

export default function FormSchedule() {
    const [dateSchedule, setDateSchedule] = useState("");
    const { saveSchedule, getUnavailableTimes } = useSchedule();

    function handleSaveSchedule(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const nameClient = formData.get("nameClient") as string;
        const dateSchedule = formData.get("dateSchedule") as string;
        const timeSchedule = formData.get("timeSchedule") as string;
        const hour = Number(timeSchedule.split(":")[0]);

        const periodSchedule =
            hour < 12 ? 0 :
                hour < 18 ? 1 :
                    2;

        if (!nameClient || !dateSchedule || !timeSchedule) {
            alert("Preencha todos os campos");
            return;
        }

        saveSchedule({
            nameClient,
            dateSchedule,
            timeSchedule,
            periodSchedule,
        });

        e.currentTarget.reset();
        setDateSchedule("");

    }

    const unavailableTimes = dateSchedule
        ? getUnavailableTimes(dateSchedule)
        : [];

    console.log("dateSchedule state:", dateSchedule);



    return (
        <form onSubmit={handleSaveSchedule} className="gap-8 flex flex-col mt-6">
            <InputText title="Data:" icon={CalendarBlank} name="dateSchedule" mode="calendar" required placeholder="Selecione uma data" setDateSchedule={setDateSchedule} />
            <TimeList title="Horários:" name="timeSchedule" unavailableTimes={unavailableTimes} />
            <InputText title="Cliente:" icon={UserSquare} name="nameClient" mode="text" required placeholder="Nome do cliente" />
            <Button type="submit" >AGENDAR</Button>
        </form>
    )
}
