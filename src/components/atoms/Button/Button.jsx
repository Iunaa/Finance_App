import style from './button.module.scss';

const Button = ({onPress, label, type, ...rest}) => {
    return (
        <div className={style.container}>
            <button {...rest} type={type} className={style.container__button} onClick={onPress}>{label}</button>
        </div>
    )
}
export default Button
