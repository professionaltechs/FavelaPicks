import React, {useState, createContext, useEffect} from 'react';

const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
const userName = localStorage.getItem("userName");

export const UserContext = createContext({
    isLoading: false,
    isLoggedIn: false,
    userName: ""
});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
      isLoading: false,
      isLoggedIn: false,
      userName: ""
  });

  useEffect(()=>{
    if(isLoggedIn){
      setUser(prevStat => {
        return{
          ...prevStat,
          isLoggedIn: true,
          userName: userName
        }
      })
    }
  }, []);
  
  console.log(user)
  
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
