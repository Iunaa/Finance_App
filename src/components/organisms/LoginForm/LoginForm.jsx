import style from "./loginform.module.scss";
import { useState } from "react";
import Box from "../../atoms/Box/Box";
import Button from "@/components/atoms/Button/Button";
import FormInput from "@/components/atoms/FormInput/FormInput";
import { useRouter } from "next/navigation";
import { useAuth } from '../../../Hooks/use-auth';

const LoginForm = () => {
    const {loginUser} = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
    })
    const router = useRouter();

    const handleLogin = () => {
      loginUser(formData);
    };

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
      <Box>
        <div className={style.content}>
            <FormInput name='email' autoComplete='email' onChange={handleInputChange} type='email' placeholder="email"/>
            <FormInput name='senha' onChange={handleInputChange} type='password' placeholder="senha"/>
        </div>
        <div className={style.content__formButtons}>
            <Button  label="Entrar" disabled={!formData.email || !formData.senha}  onPress={handleLogin} />
            <Button  label="Cadastrar" onPress={() => router.push('/Register')}/>
        </div>
      </Box>
    )
}

export default LoginForm