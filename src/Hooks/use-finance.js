import { useState, useEffect } from "react";

export const useFinance = () => {
 const[financeData, setFinanceData] = useState(null);
 const [error, setError] = useState(null);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await fetch('/api/finance');

       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }

       const data = await response.json();

       setFinanceData(data);
       setIsLoading(false);
     } catch (error) {
       console.error('Erro ao buscar dados da API', error);
       setError(error.message);
       setIsLoading(false);
     }
   };

   fetchData();
 },[]);

 return {financeData, error, isLoading}
}