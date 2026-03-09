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

    <DayPicker
      animate
      mode="single"
      className="text-gray-100"
      selected={selected}
      onSelect={(date) => {
        if (date) {
          onSelect(date);
        }
      }}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString("pt-BR")}` : "Pick a day."
      }
    />
  );
}