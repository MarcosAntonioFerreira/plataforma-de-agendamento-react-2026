import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const iconVariants = cva(``, {
    variants: {
        variant: {
            icon_input: "w-5 h-5 fill-yellow",
            icon_button: "w-6 h-7 fill-yellow",
            icon_dropdown: "w-4 h-4 fill-gray-300"
        }
    },
    defaultVariants: {
        variant: "icon_input"
    }
})

interface IconProps extends React.ComponentProps<"svg">,
    VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
    svg: SvgComponent,
    className,
    ...props
}: IconProps) {
    return (
        <SvgComponent className={iconVariants({ className })} {...props} />
    )
}