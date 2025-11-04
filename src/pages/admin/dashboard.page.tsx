import { Button } from "@/components/ui/button";
import { useAuthActions } from "@/hooks/use-auth-actions";
import { useUser } from "reactfire"

const DashboardPage = () => {

  const {data: user} = useUser()
  const {logout} = useAuthActions()
  return (
    <div className="container mx-auto p-4">
      <h1>Dashboard page </h1>
      <p>Bienvenid@, {user?.displayName || "invitado" }!</p>
      <p>Email: {user?.email || "NO Proporcionado"}</p>
      <p>foto: {user?.photoURL || "sin foto"}</p>
      <p>email verificado: {user?.emailVerified || "sin email verificado"}</p>
      <p>Uid: {user?.uid || "No disponible"}</p>
      <Button
      variant={"destructive"} 
      onClick={logout}>Cerrar Sesión</Button>
    </div>
  )
}
export default DashboardPage