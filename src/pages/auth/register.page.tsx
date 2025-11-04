import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CardFooterAuth from "@/components/ui/card-footer-auth";
import { useAuthActions } from "@/hooks/use-auth-actions";

const RegisterPage = () => {
  
  const {loading} = useAuthActions()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Regístrate</CardTitle>
        <CardDescription>Regístrate con email y contraseña o con Google</CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>
      <CardFooterAuth
      type="register"
      loading={loading}/>
    </Card>
  )
}
export default RegisterPage