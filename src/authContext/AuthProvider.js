import React, {useState, createContext, useEffect} from 'react';

const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
const userName = localStorage.getItem("userName");
const email = localStorage.getItem("email");
const token = localStorage.getItem("token");

export const UserContext = createContext({
    isLoading: false,
    isLoggedIn: false,
    userName: "",
    email: "",
    token: "",
    membershipStatus: 0
});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
      isLoading: false,
      isLoggedIn: false,
      userName: "",
      email: "",
      token: "",
      membershipStatus: 0
  });

  useEffect(()=>{
    console.log("here")
    if(isLoggedIn){
      setUser(prevStat => {
        return{
          ...prevStat,
          isLoggedIn: true,
          userName: userName,
          email: email,
          token: token
        }
      })
    }
  }, []);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
