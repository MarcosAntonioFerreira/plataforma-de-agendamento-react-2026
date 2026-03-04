import { cva, type VariantProps } from "class-variance-authority";
import React from "react"

export const containerVariants = cva(`
    flex flex-col
    `, {
    variants: {
        variant: {
            left_content: "max-w-[32.5rem] px-20 py-20 m-3 rounded-xl bg-gray-700"
        }
    },
    defaultVariants: {
        variant: "left_content"
    }
});

interface ContainerProps extends VariantProps<typeof containerVariants>,
    React.ComponentProps<"div"> {
    as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
    as = "div",
    variant,
    children,
    className,
    ...props
}: ContainerProps) {
    return React.createElement(
        as,
        {
            className: containerVariants({ variant, className }),
            ...props,
        },
        children
    )
}