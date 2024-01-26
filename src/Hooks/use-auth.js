import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useAuth = () => {
 const[user, setUser] = useState(null);
 const router = useRouter();

 const normalizeUserData = (userData) => {
   return {
     ...userData,
     expirationTime: new Date().getTime() + 300 * 1000, 
   };
 };


 useEffect(() => {
   const storedUser = localStorage.getItem('user');

   if (storedUser) {
     const userData = JSON.parse(storedUser);
     const currentTime = new Date().getTime();
     const isExpired = currentTime > userData.expirationTime;

     if (!isExpired) {
       setUser(userData);
     } else {
       router.push('/');
     }
   }
 }, [router]); 
 
 const isExpirationTimeValid = (user) => {
   return user.expirationTime > Date.now();
 };


 const registerUser = (userData) => {
   const normalizedUserData = normalizeUserData(userData);

   if (isExpirationTimeValid(normalizedUserData)) {
    
     globalThis.localStorage?.setItem('user', JSON.stringify(normalizedUserData));
     
     setUser(normalizedUserData);
   
     router.push('/');
   }
 };


 const loginUser = (userData) => {
   const normalizedUserData = normalizeUserData(userData);

   if (localStorage.getItem('user')) {
     const storedUser = JSON.parse(localStorage.getItem('user'));
     const currentTime = new Date().getTime();
     const isExpired = currentTime > storedUser.expirationTime;

     if (isExpired) {
       globalThis.localStorage.removeItem('user');
     } else {
     
       storedUser.expirationTime = normalizedUserData.expirationTime;
       globalThis.localStorage.setItem('user', JSON.stringify(storedUser));
       setUser(storedUser);
       router.push('/Cotacoes');
       return;
     }
   }
 };


 const logoutUser = () => {
   globalThis.localStorage?.removeItem('user');
   router.replace('/');
 }


 return { user, registerUser, loginUser, logoutUser  };
}

