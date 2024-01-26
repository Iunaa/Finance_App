import { useAuth } from '../../../Hooks/use-auth';
import Button from '../../atoms/Button/Button';
import style from './header.module.scss';
import { usePathname } from 'next/navigation';

const Header = () => {
    const {user, logoutUser} = useAuth()
    const pathname = usePathname()

    const handleLogout = () => {
        logoutUser();
      };

    return (
       <div className={style.container}>
            <h1 className={style.container__title}>Finance<span className={style.container__dot}>.</span></h1>
            {user && pathname.includes('Cotacoes') && (
                <div className={style.logout}>
                    <p>Olá {user.email.substring(0, user.email.indexOf("@"))}</p>
                    <Button onPress={handleLogout} label={'Logout'} />
                </div>
            )}
       </div>
    )
}

export default Header