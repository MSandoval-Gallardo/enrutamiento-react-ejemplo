import { Button } from "@/components/ui/button"
import { useAuthActions } from "../../hooks/use-auth-actions"

const LoginPage = () => {

  const {loginWhitGoogle} = useAuthActions()
  return (
    <div>
      <h1>Login</h1>
      <Button onClick={loginWhitGoogle}>iniciar sesion con google</Button>
    </div>
  )
}
export default LoginPage