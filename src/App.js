import HomeScreen from './components/HomeScreen/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import ProfileScreen from './components/ProfileScreen/ProfileScreen';
import { useEffect } from 'react';
import { auth } from './util/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <Switch>
            <Route exact path="/"><HomeScreen/></Route>
            <Route exact path="/profile"><ProfileScreen/></Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
