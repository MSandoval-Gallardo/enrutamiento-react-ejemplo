import { Button } from "@/components/ui/button"
import { useAuthActions } from "../../hooks/use-auth-actions"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

const LoginPage = () => {

  const {loginWhitGoogle} = useAuthActions()

  const handleLoginWithGoogle = async () => {
      toast.error("Falló el inicio de sesion")
    
    const result = await loginWhitGoogle()
    if(result.success){
      console.log("Logeo con exito")
    }else{
      console.log("logeo fallido:", result.error)
      toast.error("Falló el inicio de sesion")
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Inicia sesion con email y contraseña o con Google</CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>
      <CardFooter>
        <Button 
          onClick={handleLoginWithGoogle}
          className="w-full"
        >
          Inicio sesion con Google
        </Button>
      </CardFooter>
    </Card>
  )
}
export default LoginPage