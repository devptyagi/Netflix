import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../util/firebase';
import Nav from '../Nav/Nav';
import PlanScreen from '../PlanScreen/PlanScreen';
import './ProfileScreen.css';
 
 const ProfileScreen = () => {

    const user = useSelector(selectUser);

    const logout = () => {
        auth.signOut()
        window.location.pathname = '/';
    }

     return (
         <div className="profileScreen">
            <Nav/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <PlanScreen/>
                            <button onClick={logout} className="profileScreen__signout">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
     )
 }
 
 export default ProfileScreen
 