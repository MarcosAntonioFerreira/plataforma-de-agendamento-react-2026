import useLocalStorage from "use-local-storage";
import { SCHEDULES_KEY, type Schedule } from "../models/schedule";

export default function useSchedule(){
    const [schedules, setSchedules] = useLocalStorage<Schedule[]>(SCHEDULES_KEY, []);

    function prepareSchedule(){
        setSchedules([...schedules, {
                id: Math.random().toString(36).substring(2, 9),
                nameClient: "",
                dateSchedule: "",
                timeSchedule: "",
                state: "created"

            }]);
    }

    return{
        prepareSchedule,
    }
}