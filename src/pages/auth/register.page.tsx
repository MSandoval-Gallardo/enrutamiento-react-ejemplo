import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "reactfire";

const RegisterPage = () => {
  
  const auth = useAuth()

  const handleClickGoogle = async() => {

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log("usuario registrado con exito")
    } catch (error) {
      console.log("Error al iniciar con google")      
    }
  }
  return (
    <div>
      <h1>RegisterPage</h1>
      <button onClick={handleClickGoogle}> Inicia sesion con Google</button></div>

  )
}
export default RegisterPage