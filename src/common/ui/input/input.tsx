import { FC, ComponentProps } from "react";
import clsx from "clsx";

import s from "./input.module.scss";

const Input: FC<ComponentProps<"input">> = ({ className, ...restProps }) => {
    return <input className={clsx(s.Input, className)} {...restProps} />;
};

export default Input;
