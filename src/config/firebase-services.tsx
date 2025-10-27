import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { AuthProvider, FirestoreProvider, StorageProvider, useFirebaseApp } from "reactfire";

interface Props {
    children: React.ReactNode;
}

const FirebaseServices = ({children}: Props) => {

  const app = useFirebaseApp()

  const auth = getAuth(app) // para la autenticación
  const firestore = getFirestore(app) // para las bases de datos 
  const storage = getStorage(app) // para el almacenamiento
  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <StorageProvider sdk={storage}>
          {children}
        </StorageProvider>
      </FirestoreProvider>
    </AuthProvider>
  )
}
export default FirebaseServices