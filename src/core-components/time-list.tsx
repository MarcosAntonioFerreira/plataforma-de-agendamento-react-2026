import InputChekbox from "../components/input-checkbox";
import Text from "../components/text"

interface TimeListProps {
    title: string;
    name: string;
}


export default function TimeList({
    title,
    name,
}: TimeListProps) {
    const itemTimes = [
        [
            { time: "09:00", periodSchedule: "0", disabled: false },
            { time: "10:00", periodSchedule: "0", disabled: false },
            { time: "11:00", periodSchedule: "0", disabled: true },
            { time: "12:00", periodSchedule: "0", disabled: false },

        ],
        [
            { time: "13:00", periodSchedule: "1", disabled: false },
            { time: "14:00", periodSchedule: "1", disabled: false },
            { time: "15:00", periodSchedule: "1", disabled: true },
            { time: "16:00", periodSchedule: "1", disabled: false },
            { time: "17:00", periodSchedule: "1", disabled: true },
            { time: "18:00", periodSchedule: "1", disabled: false },
        ],
        [
            { time: "19:00", periodSchedule: "2", disabled: false },
            { time: "20:00", periodSchedule: "2", disabled: false },
            { time: "21:00", periodSchedule: "2", disabled: true },
        ]
    ]

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
                        {row.map((item) => (
                            <InputChekbox key={item.time} name={name} value={item.time} periodSchedule={item.periodSchedule} >
                                {item.time}
                            </InputChekbox>
                        ))}

                    </div>
                </div>
            ))}
        </div>
    )
}