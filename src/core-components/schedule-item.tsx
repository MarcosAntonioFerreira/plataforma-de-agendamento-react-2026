import React from "react";
import ButtonIcon from "../components/button-icon";
import Text from "../components/text";
import Icon from "../components/icon";

interface ScheduleItemProps{
    context_time: String;
    context_client_name: String;
    icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ScheduleItem(
    {
        context_client_name,
        context_time,
        icon,
    } : ScheduleItemProps
) {
    return (
        <div className="flex flex-row w-full">
            <div className="w-full flex justify-start gap-3">
                <Text className="text-gray-200" variant={"title-md-bold"} >{context_time}</Text>
                <Text className="text-gray-200" variant={"text-md-regular"} >{context_client_name}</Text>
            </div>
            <ButtonIcon icon={icon} />
             
        </div>
    );
}