import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const iconVariants = cva(`fill-yellow`, {
    variants: {
        variant: {
            size_input: "w-5 h-5",
            size_button: "w-6 h-7"
        }
    },
    defaultVariants: {
        variant: "size_input"
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