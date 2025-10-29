import { Navigate, Outlet } from "react-router"
import { useSigninCheck } from "reactfire"

const AuthLayout = () => {

    const {status, data: signInCheckResult, hasEmitted} = useSigninCheck()
  
    //mostrar loading mientras se verifica el estado de inicio de sesion
    if((status === "loading" || !hasEmitted)){
      return <div>Loading ...</div>
    }

    // redirigir si el usuario ya esta autenticado
    if(status === "success" && signInCheckResult.signedIn){
      return <Navigate to="/admin" replace />
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full">
        <Outlet/>
      </div>
    </div>
  )
}
export default AuthLayout