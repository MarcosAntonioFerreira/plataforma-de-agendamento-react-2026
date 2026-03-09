import useLocalStorage from "use-local-storage";
import { SCHEDULES_KEY, type Schedule } from "../models/schedule";


export default function useSchedule() {
    const [schedules, setSchedules] = useLocalStorage<Schedule[]>(SCHEDULES_KEY, []);

    function saveSchedule(data: Partial<Schedule>) {
        console.log(data);
        setSchedules([
            ...schedules,
            {
                id: Math.random().toString(36).substring(2, 9),
                nameClient: data.nameClient || "",
                dateSchedule: data.dateSchedule || "",
                timeSchedule: data.timeSchedule || "",
                periodSchedule: Number(data.periodSchedule ?? 0),
                state: "created"

            }]);
    }

    function getUnavailableTimes(date: string) {

        console.log("date recebida:", date);
        console.log("todos schedules:", schedules);

        return schedules
            .filter((s) => s.dateSchedule === date)
            .map((s) => s.timeSchedule);
    }

    function deleteSchedule(id: string) {
        setSchedules(schedules.filter((schedule) => schedule.id !== id));
    }

    console.log("schedules", schedules);
    return {
        saveSchedule,
        deleteSchedule,
        getUnavailableTimes
    }
}