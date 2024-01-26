import Box from "@/components/atoms/Box/Box";
import FinanceLayout from "@/components/organisms/FinanceLayout/FinanceLayout";
import {useAuth} from "../../Hooks/use-auth";
import { useFinance } from "@/Hooks/use-finance";
import { useRouter } from "next/router";


const Cotacoes = () => {
    const {financeData, error, isLoading} = useFinance();
    const {user} = useAuth();
    const router = useRouter();

    if(isLoading){
        return <Box><p>Loading...</p></Box>;
    }

    if(error){
        return <Box><p>{error}</p></Box>;
    }

    if(!user) {
        router.push('/')
    }

    return(
        <>
            <FinanceLayout financeData={financeData} isLoading={isLoading} /> 
        </>
        
    );
} 

export default Cotacoes