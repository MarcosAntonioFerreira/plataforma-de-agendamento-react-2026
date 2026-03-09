import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface DropDownCalendarProps {
  selected?: Date;
  onSelect: (date: Date) => void;
}

export default function DropDownCalendar({
  selected,
  onSelect,
}: DropDownCalendarProps) {

  return (
    <div className="absolute bg-gray-600 border-gray-500 border-r-1 border-b-1 rounded-2xl">
      <DayPicker
        animate
        mode="single"
        navLayout="around"
        classNames={{
          today: `text-yellow-dark`,
          chevron: `fill-gray-100`,
          selected: `text-yellow-dark  border rounded-full text-gray-100`
        }}
        selected={selected}
        onSelect={(date) => {
          if (date) {
            onSelect(date);
          }
        }}
        className="text-gray-100"
  
      />
    </div>
  );
}