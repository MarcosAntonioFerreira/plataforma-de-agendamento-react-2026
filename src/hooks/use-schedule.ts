import useLocalStorage from "use-local-storage";
import { SCHEDULES_KEY, type Schedule } from "../models/schedule";


export default function useSchedule() {
    const [schedules, setSchedules] = useLocalStorage<Schedule[]>(SCHEDULES_KEY, []);

    function saveSchedule(data: Partial<Schedule>) {
        setSchedules([
            ...schedules,
            {
                id: Math.random().toString(36).substring(2, 9),
                nameClient: data.nameClient || "",
                dateSchedule: data.dateSchedule || "",
                timeSchedule: data.timeSchedule || "",
                periodSchedule: data.periodSchedule,
                state: "created"

            }]);
    }

    function deleteSchedule(id: string) {
        setSchedules(schedules.filter((schedule) => schedule.id !== id));
    }

    return {
        saveSchedule,
        deleteSchedule,
    }
}