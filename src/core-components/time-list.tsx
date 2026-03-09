import InputChekbox from "../components/input-checkbox";
import Text from "../components/text"

interface TimeListProps {
    title: string;
    name: string;
    unavailableTimes: string[];
}


export default function TimeList({
    title,
    name,
    unavailableTimes
}: TimeListProps) {

    const itemTimes = [
        ["09:00", "10:00", "11:00", "12:00"],
        ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
        ["19:00", "20:00", "21:00"]
    ];

    const periodTitles = ["Manhã", "Tarde", "Noite"];

    return (
        <div className="flex flex-col gap-3">
            <Text variant={"title-md-bold"} className="text-gray-200" >
                {title}
            </Text>
            {itemTimes.map((row, index) => (
                <div key={`row-${index}`} className="flex flex-col gap-2">
                    <Text variant={"text-sm-regular"} className="text-gray-300">
                        {periodTitles[index]}
                    </Text>
                    <div className="flex gap-3 flex-wrap">
                        {row.map((item) => {



                            const disabled = unavailableTimes.includes(item);

                            console.log("unavailableTimes", unavailableTimes);
                            console.log("disabled", item, disabled);

                            return (
                                <InputChekbox
                                    key={item}
                                    name={name}
                                    value={item}
                                    disabled={disabled}
                                >
                                    {item}
                                </InputChekbox>
                            );
                        })}

                    </div>
                </div>
            ))}
        </div>
    )
}