import React from "react";
import Icon from "./icon";
import { cva } from "class-variance-authority";

export const inpuTextVariants = cva(`
    flex items-center  rounded-lg group gap-2 
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
            default: "text-gray-400"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})

interface InputTextProps extends React.ComponentProps<"input"> {
    icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function InputText({
    className,
    icon,
    ...props

}: InputTextProps) {
    return (
        <div className={inpuTextVariants(({ className }))}>
            <Icon
                svg={icon}
            />
            <input
                type="text"
                className={inputTextInputVariants({ className })}
                {...props}
            />
        </div>
    )
}