import React from "react";
import Text from "./text";
import { cva, type VariantProps } from 'class-variance-authority';
import Icon from "./icon";

export const buttonVariants = cva(`
    flex items-center justify-center cursor-pointer
    transition rounded-lg group gap-2
    `, {
    variants: {
        variant: {
            primary: "bg-yellow hover:border-yellow-light hover:border-2",
            secondary: "bg-gray-600 border-gray-500 border"
        },
        size: {
            md: "h-16 py-5 px-5",
            md_2: "h-10 py-2 px-5"
        },
        disabled: {
            true: "opacity-30 pointer-events-none"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
}
)

export const buttonTextVariants = cva(``, {
    variants: {
        variant: {
            primary: "text-gray-900",
            secondary: "text-gray-200"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

export const buttonIconVariants = cva(``, {
    variants: {
        variant: {
            primary: "fill-yellow hover:bg-yellow-dark"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function Button({
    disabled,
    variant,
    size,
    className,
    children,
    icon,
    ...props
}: ButtonProps) {
    return (
        <button className={
            buttonVariants({
                disabled,
                variant,
                size,
                className
            })
        } {...props}>
            {
                icon && (
                    <Icon
                        svg={icon}
                    />
                )
            }
            <Text
                variant={"title-sm-bold"}
                className={buttonTextVariants({ variant })}
            >
                {children}
            </Text>
        </button>
    )
}