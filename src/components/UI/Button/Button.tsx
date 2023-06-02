import cn from 'classnames';
import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    variant?: 'red' | 'purple' | "orange" | "green" | "blue" | 'white' | undefined;
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
    onClick?: (...args: any[]) => void
}

const Button: FC<ButtonProps> = ({ variant = 'blue', size = 'medium', children, onClick = () => null }) => {
    const mainCn = cn(
        styles.Button,
        styles[variant],
        styles[size]
    )

    return (
        <button className={mainCn} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button