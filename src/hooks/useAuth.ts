import { useAppSelector } from "../RTK/store";

 const useAuth = () => {
     const auth = useAppSelector((state => state.authSlice.accessToken))
     return auth;
}

export default useAuth;