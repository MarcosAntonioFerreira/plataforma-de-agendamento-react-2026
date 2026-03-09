import useLocalStorage from "use-local-storage";
import { SCHEDULES_KEY, type Schedule } from "../models/schedule";

export default function useSchedules(){
    const [schedules] = useLocalStorage<Schedule[]>(SCHEDULES_KEY, []);

    return{
        schedules,
        schedulesCount: schedules.length,
    }
}