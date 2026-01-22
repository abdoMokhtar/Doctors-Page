import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) {
    const variants = {
        primary: 'bg-primary text-white hover:bg-sky-700 shadow-md hover:shadow-lg',
        secondary: 'bg-secondary text-white hover:bg-teal-700 shadow-md',
        outline: 'border-2 border-primary text-primary hover:bg-primary/10',
        ghost: 'text-gray-600 hover:bg-gray-100/50 hover:text-primary',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg font-semibold',
    };

    return (
        <button
            className={cn(
                'rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none flex items-center gap-2 justify-center',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
}
