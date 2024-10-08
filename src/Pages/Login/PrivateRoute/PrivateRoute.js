import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = () => {
    const { user , isLoading } = useAuth();
    if(isLoading){
        return  <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }
  
return (
    user.email ? <Outlet/> : <Navigate to='/login'/>
    ) 
}
export default PrivateRoute;