
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CardFooterAuth from "@/components/ui/card-footer-auth"
import { useAuthActions } from "@/hooks/use-auth-actions"

const LoginPage = () => {
const {loading} = useAuthActions()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Inicia sesion con email y contraseña o con Google</CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>
      <CardFooterAuth
      type="login"
      loading={loading}/>
    </Card>
  )
}
export default LoginPage