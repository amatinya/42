import { ComponentProps, FC } from "react";
import clsx from "clsx";

import s from "./button.module.scss";

interface IButtonProps extends ComponentProps<"button"> {
    rightIcon?: FC<ComponentProps<"svg">>;
}

const Button: FC<IButtonProps> = ({ className, rightIcon: RightIcon = null, children, ...restProps }) => {
    return (
        <button className={clsx(className, s.Button)} {...restProps}>
            {children}
            {RightIcon !== null && <RightIcon width={16} height={16} />}
        </button>
    );
};

export default Button;
