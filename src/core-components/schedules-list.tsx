import useSchedules from "../hooks/use-schedules";
import SunHorizon from "../assets/icons/SunHorizon.svg?react";
import CloudSun from "../assets/icons/CloudSun.svg?react";
import MoonStars from "../assets/icons/MoonStars.svg?react";
import HeaderItemSchedule from "./header-item-schedule";
import ScheduleItem from "./schedule-item";
import Trash from "../assets/icons/Trash.svg?react";
import useSchedule from "../hooks/use-schedule";


export default function SheduleList() {
    const { schedules } = useSchedules()



    return (
        <div className="flex flex-col gap-3">
            <div>
                <HeaderItemSchedule
                    icon={SunHorizon}
                    content_title={"Manhã"}
                    content_schedules={"09h-12h"}
                />
                <section className="border-2 border-gray-600 rounded-br-lg rounded-bl-lg flex flex-col justify-between items-center gap-3 px-5 py-3 -mt-0.5" >
                    {/*schedules.map(schedule) => */}
                    <ScheduleItem context_client_name={"Marcolino"} context_time={"09:00"} icon={Trash} />
                </section>
            </div>
            <div>
                <HeaderItemSchedule
                    icon={CloudSun}
                    content_title={"Tarde"}
                    content_schedules={"13h-18h"}
                />
                <section className="border-2 border-gray-600 rounded-br-lg rounded-bl-lg flex flex-col justify-between items-center gap-3 px-5 py-3 -mt-0.5" >
                    {/*schedules.map(schedule) => */}
                    <ScheduleItem context_client_name={"Marcolino"} context_time={"13:00"} icon={Trash} />
                </section>
            </div>
            <div>
                <HeaderItemSchedule
                    icon={MoonStars}
                    content_title={"Noite"}
                    content_schedules={"19h-21h"}
                />
                <section className="border-2 border-gray-600 rounded-br-lg rounded-bl-lg flex flex-col justify-between items-center gap-3 px-5 py-3 -mt-0.5" >
                    {/*schedules.map(schedule) => */}
                    <ScheduleItem context_client_name={"Marcolino"} context_time={"19:00"} icon={Trash} />
                    <ScheduleItem context_client_name={"Marcolino"} context_time={"20:00"} icon={Trash} />
                </section>
            </div>
            <div>
                <HeaderItemSchedule
                    icon={MoonStars}
                    content_title={"Noite"}
                    content_schedules={"19h-21h"}
                />
                <section className="border-2 border-gray-600 rounded-br-lg rounded-bl-lg flex flex-col justify-between items-center gap-3 px-5 py-3 -mt-0.5" >
                    {schedules.map((schedule) => (
                        <ScheduleItem key={schedule.id} context_client_name={"Marcolino"} context_time={"19:00"} icon={Trash} />
                     ))}
                    
                </section>


            </div>
        </div>
    )

}