import React, {useState, createContext, useEffect} from 'react';

const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
const userName = localStorage.getItem("userName");
const email = localStorage.getItem("email");
const token = localStorage.getItem("token");
const id = localStorage.getItem("id");

export const UserContext = createContext({
    id: "",
    isLoading: false,
    isLoggedIn: false,
    userName: "",
    email: "",
    token: "",
    membershipStatus: 0,
    isPremimum: false
});

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState({
      id: "",
      isLoading: false,
      isLoggedIn: false,
      userName: "",
      email: "",
      token: "",
      membershipStatus: 0,
      isPremimum: false
  });

  useEffect(()=>{
    console.log("here")
    if(isLoggedIn){
      setUser(prevStat => {
        return{
          ...prevStat,
          id: "",
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