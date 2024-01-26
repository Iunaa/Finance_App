import { useState } from "react";
import Button from "../../atoms/Button/Button";
import FormInput from "@/components/atoms/FormInput/FormInput";
import Box from "@/components/atoms/Box/Box";
import style from "./registerform.module.scss";
import { useAuth } from "@/Hooks/use-auth";


const RegisterForm = () => {
    const {registerUser} = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
    });

    const handleRegister = () => {
      registerUser(formData);
    };

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
      <Box>
        <form className={style.content}>
            <FormInput name='email' autoComplete='email' onChange={handleInputChange} type='email' placeholder="email"/>
            <FormInput name='senha'  onChange={handleInputChange} type='password' placeholder="senha"/>
            <div className={style.content__formButtons}>
                <Button disabled={!formData.email || !formData.senha} label="Cadastrar" onPress={handleRegister}/>
            </div>
        </form>
      </Box>
    )
}

export default RegisterForm