import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

interface User{
  username: string;
  email: string;
}
interface UserContextType{
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}
interface UserContextProps{
  children: React.ReactNode;
}
export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = ({children}: UserContextProps) => {
  const [user, setUser] = useState<User |null>(null);
  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}
export const useUser = () => {
  return useContext(UserContext);
};
