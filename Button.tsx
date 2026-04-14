type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
    variant: string,
    children:React.ReactNode,
}
const Button = ({ variant, children, ...rest }: ButtonProps) => {
    return <div>
        <button {...rest}>{children}</button>
    </div>
}

export default Button;