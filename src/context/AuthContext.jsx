import React from 'react'
import { createContext } from 'react'
export const authDataContext= createContext()
function AuthContext({children}) {
    let serverUrl = import.meta.env.VITE_API_URL || "https://97681302-6d1c-4dc6-865b-debcf2d726b1-00-3g54n2cekoyne.pike.replit.dev/"

    let value = {
       serverUrl
    }
  return (

    
    <div>
        <authDataContext.Provider value={value}>
            {children}
        </authDataContext.Provider>
      
    </div>
  )
}

export default AuthContext
