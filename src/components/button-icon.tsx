import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";

export const buttonIconIconVariants = cva(`flex items-center justify-center cursor-pointer
    transition rounded-lg group gap-2`, {
    variants: {
        variant: {
            primary: "fill-yellow hover:fill-yellow-dark"
        },
        size: {
            sm: "w-8 h-8"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm"
    }
})

interface ButtonIconProps extends React.ComponentProps<"button"> {
    icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({
    className,
    children,
    icon,
    ...props
}: ButtonIconProps) {
    return (
        <button className={className} {...props}>
            <Icon
                svg={icon}
                className={buttonIconIconVariants({ className })}
            />
        </button>
    )
}