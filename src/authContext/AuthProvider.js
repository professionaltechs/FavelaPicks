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
    token: ""
});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
      isLoading: false,
      isLoggedIn: false,
      userName: "",
      email: "",
      token: ""
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
  
  // console.log(user)
  
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
