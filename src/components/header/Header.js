import styles from './Header.module.css'
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return <header className={styles.header}>
        <img src={logo}/>
        <div>
            <div className={styles.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    :<NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    </header>

}

export default Header;