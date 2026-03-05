import Icon from "./icon";
import Text from "./text";

interface HeaderScheduleProps {
    content_title: String;
    content_schedules: String;
    icon: React.ComponentProps<typeof Icon>["svg"];
}

export function HeaderItemSchedule({
    content_title,
    icon,
    content_schedules
}: HeaderScheduleProps) {
    return (
        <div className="border border-gray-600 rounded-tr-lg rounded-tl-lg flex items-center ">
            <Icon svg={icon} />
            <Text className="w-full" >{content_title}</Text>
            <Text>{content_schedules}</Text>
        </div>
    )
}