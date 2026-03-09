import Icon from "../components/icon";
import Text from "../components/text";

interface HeaderScheduleProps {
    content_title: String;
    content_schedules: String;
    icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function HeaderItemSchedule({
    content_title,
    icon,
    content_schedules
}: HeaderScheduleProps) {
    return (
        <div className="border-2 border-gray-600 rounded-tr-lg rounded-tl-lg flex justify-between items-center gap-3 px-5 py-3 ">
            <Icon svg={icon} variant={"icon_list"}/>
            <div className="w-full flex justify-between">
                <Text className="text-gray-300" variant={"text-sm-regular"} >{content_title}</Text>
                <Text className="text-gray-400" variant={"text-sm-regular"} >{content_schedules}</Text>
            </div>
        </div>
    )
}