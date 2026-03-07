import InputChekbox from "../components/input-checkbox";
import Text from "../components/text"

interface TimeListProps {
    title: String;
}


export default function TimeList({
    title,
}: TimeListProps) {
    const itemTimes = [
        [
            { time: "09:00", disabled: false  },
            { time: "10:00", disabled: false  },
            { time: "11:00", disabled: true   },
            { time: "12:00", disabled: false  },

        ],
        [
            { time: "13:00", disabled: false },
            { time: "14:00", disabled: false },
            { time: "15:00", disabled: true  },
            { time: "16:00", disabled: false },
            { time: "17:00", disabled: true  },
            { time: "18:00", disabled: false },
        ],
        [
            { time: "19:00", disabled: false },
            { time: "20:00", disabled: false },
            { time: "21:00", disabled: true },
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
                            <InputChekbox key={item.time}>
                                {item.time}
                            </InputChekbox>
                        ))}

                    </div>
                </div>
            ))}
        </div>
    )
}