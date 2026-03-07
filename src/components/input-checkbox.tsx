import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";
import React from "react";

export const inputCheckboxLabelVariants = cva(`
    inline-flex items-center justify-center cursor-pointer
    transition rounded-lg group gap-2
    `, {
    variants: {
        variant: {
            primary: `bg-gray-600 border-gray-500 border 
            hover:bg-gray-500 
            has-checked:bg-gray-600 has-checked:border-yellow has-checked:border`,
        },
        size: {
            md: "h-10 py-2 px-5"
        },
        disabled: {
            true: "pointer-events-none border-gray-600 border bg-transparent"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false
    }
})

export const inputCheckboxTextVariants = cva(``, {
    variants: {
        variant: {
            primary: "text-gray-200 peer-checked:text-yellow"
        },
        disabled: {
            true: "text-gray-500"
        }

    },
    defaultVariants: {
        variant: "primary"
    }
})

interface InputCheckboxProps extends React.ComponentProps<"input"> {
    variant?: undefined
    size?: undefined

}


export default function InputChekbox({
    variant,
    size,
    disabled,
    className,
    children,
    ...props
}: InputCheckboxProps
) {
    return (
        <label className={
            inputCheckboxLabelVariants({
                variant,
                size,
                disabled
            })
        }>
            <input type="checkbox" {...props} className="hidden peer sr-only" />
            <Text
                as="span"
                variant={"text-md-regular"}
                className={
                    inputCheckboxTextVariants({
                        variant,
                        disabled
                    })
                }
            >
                {children}
            </Text>

        </label>
    )
}