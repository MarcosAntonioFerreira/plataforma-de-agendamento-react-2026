import React from "react";
import Text from "./text";
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(`
    flex items-center justify-center cursor-pointer
    transition rounded-lg group gap-2
    `, {
    variants: {
        variant: {
            primary: "bg-yellow hover:border-yellow-light border-2"
        },
        size: {
            md: "h-16 py-5 px-5"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
}
)

export const buttonTextVariant = cva(``, {
    variants: {
        variant: {
            primary: "text-gray-900"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

interface ButtonProps extends React.ComponentProps<"button">,
VariantProps<typeof buttonVariants> {
}

export default function Button({
    variant,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button className={
            buttonVariants({
                variant,
                className
            })
        } {...props}>
            <Text
                variant={"title-sm-bold"}
                className={buttonTextVariant({ variant  })}
            >
                {children}
            </Text>
        </button>
    )
}