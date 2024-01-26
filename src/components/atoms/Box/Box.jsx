import style from './box.module.scss';

const Box = ({children, flexDirection = 'column'}) => {
    return <div style={{flexDirection: flexDirection}} className={style.box}>{children}</div>
}

export default Box