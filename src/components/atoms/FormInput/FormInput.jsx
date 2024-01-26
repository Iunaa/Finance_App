import style from './forminput.module.scss';

const FormInput = ({placeholder, name, type, onChange, ...rest}) => {
    return (
        <>
            <input  {...rest} name={name} type={type} onChange={onChange}  placeholder={placeholder} className={style.input}/>
        </>
    )
}
export default FormInput