import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-sans text-gray-100", {
    variants: {
        variant: {
            "text-sm-regular": "text-sm leading-5 font-normal",
            "text-md-regular": "text-base leading-6 font-normal",
            "title-sm-bold": "text-sm leading-5 font-bold",
            "title-md-bold": "text-base leading-6 font-bold",
            "title-lg-bold": "text-4xl leading-6 font-bold"
        }
    },
    defaultVariants: {
        variant: "text-md-regular"
    }
});

interface TextProps extends VariantProps<typeof textVariants> {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}

export default function Text(
    {
        as = "span",
        variant,
        className,
        children,
        ...props
    }: TextProps
) {
    return React.createElement(
        as,
        {
            className: textVariants({variant, className}),
            ...props
        },
        children
    )
}