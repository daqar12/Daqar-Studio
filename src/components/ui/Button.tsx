import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const variants = {
            primary: "bg-brand-gold text-brand-black hover:bg-white transition-all duration-300",
            outline: "bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300",
            ghost: "bg-transparent text-brand-gold hover:text-white transition-colors duration-300",
        };

        const sizes = {
            sm: "px-4 py-2 text-[10px]",
            md: "px-8 py-3 text-xs",
            lg: "px-12 py-4 text-sm",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "uppercase tracking-[0.2em] font-bold inline-flex items-center justify-center cursor-pointer",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export default Button;
