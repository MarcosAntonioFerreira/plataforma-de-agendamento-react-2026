import ButtonIcon from "../components/button-icon";
import Text from "../components/text";
import type { Schedule } from "../models/schedule";
import Trash from "../assets/icons/Trash.svg?react";
import useSchedule from "../hooks/use-schedule";



interface ScheduleItemProps {
    schedule: Schedule
}

export default function ScheduleItem({ schedule }: ScheduleItemProps) {

    const { deleteSchedule } = useSchedule();


    function handleDeleteSchedule() {
        deleteSchedule(schedule.id);
    }


    return (
        <div className="flex flex-row w-full">
            <div className="w-full flex justify-start gap-3">
                <Text className="text-gray-200" variant={"title-md-bold"} >{schedule?.timeSchedule}</Text>
                <Text className="text-gray-200" variant={"text-md-regular"} >{schedule?.nameClient}</Text>
            </div>
            <ButtonIcon onClick={handleDeleteSchedule} icon={Trash} />

        </div>
    );
}