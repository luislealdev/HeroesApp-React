import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

export const AuthProvider = ({children}) => {

    // const initialState = {
    //     logged: false
    // }

    const init = () => {
      const user = JSON.parse(localStorage.getItem('user'));

      return {
        logged: !!user,
        user
      }

    }

    const [authState, dispatch] = useReducer(authReducer, {}, init)

    const login = (name) => {

      const user = {
        id: 1,
        name
      }

      const action = {
        type: types.login,
        payload: user
      }

      localStorage.setItem('user', JSON.stringify(user));

      dispatch(action);
    }


  return (
    <AuthContext.Provider value={{
      ...authState,
      login
    }}>
        {children}
    </AuthContext.Provider>
  )
}
