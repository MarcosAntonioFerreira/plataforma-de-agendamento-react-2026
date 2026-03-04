import React, { useEffect, useRef, useState } from "react";
import Icon from "./icon";
import { cva } from "class-variance-authority";
import CaretDown from "../assets/icons/CaretDown.svg?react"
import DropDownCalendar from "./dropdown-calendar";

export const inpuTextVariants = cva(`
    flex flex-row items-center  rounded-lg group gap-2 
    `, {
    variants: {
        variant: {
            primary: "border-gray-500 border py-3 px-3 has-focus:border-yellow"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
});


export const inputTextInputVariants = cva(`
    focus:outline-none
    `, {
    variants: {
        variant: {
            default: "text-gray-400",
            filled: "text-gray-200"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})


interface InputTextProps extends React.ComponentProps<"input"> {
    icon: React.ComponentProps<typeof Icon>["svg"];
    mode?: "text" | "calendar";
}

export default function InputText({
    className,
    value,
    icon,
    mode = "text",
    ...props

}: InputTextProps) {

    const [selectDate, setSelectedDate] = useState<Date | undefined>();
    const [filledValue, setFilledValue] = useState("");
    const [openPopUpCaledar, setOpenPopUpCalendar] = useState(false);

    const containerInput = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                containerInput.current &&
                !containerInput.current.contains(event.target as Node)
            ) {
                setOpenPopUpCalendar(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function handleSelect(date: Date) {
        setSelectedDate(date);
        setFilledValue(date.toLocaleDateString("pt-BR"));
        setOpenPopUpCalendar(false);
    }

    return (
        <div ref={containerInput}>
            <div className={inpuTextVariants(({ className }))}>
                <Icon
                    svg={icon}
                />
                <input
                    type="text"
                    onChange={
                        (e) => {
                            setFilledValue(e.target.value || "");
                        }
                    }
                    onClick={
                        () => {
                            if (mode === "calendar") {
                                setOpenPopUpCalendar(!openPopUpCaledar);
                            }
                        }
                    }
                    value={filledValue}
                    className={inputTextInputVariants({
                        variant: filledValue ? "filled" : "default",
                        className
                    })}
                    {...props}
                />
                {
                    mode === "calendar" && <Icon svg={CaretDown} variant="icon_dropdown" />
                }
            </div>
            {
                mode === "calendar" && openPopUpCaledar && (
                    <DropDownCalendar
                        onSelect={handleSelect}
                        selected={selectDate}
                    />
                )
            }

        </div>
    )
}