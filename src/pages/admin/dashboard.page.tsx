import { useAuth, useUser } from "reactfire"

const DashboardPage = () => {

  const auth = useAuth();
  const {data: user} = useUser()
  return (
    <div>
      <h1>Dashboard page </h1>
      <p>Bienvenid@, {user?.displayName || "invitado" }!</p>
      <p>Email: {user?.email || "NO Proporcionado"}</p>
      <p>foto: {user?.photoURL || "son foto"}</p>
      <p>email verificado: {user?.emailVerified || "sin email verificado"}</p>
      <p>Uid: {user?.uid || "No disponible"}</p>
      <button onClick={() => auth.signOut()}>Cerrar Sesión</button>
    </div>
  )
}
export default DashboardPage