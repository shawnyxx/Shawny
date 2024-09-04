import './Signup.css';
import NormalPopup from '../../../components/popups/normal/NormalPopup';

function Signup() {
    return (
        <div>
            <NormalPopup>
                <h1>Signup</h1>
                <form className='SignUpForm'>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">Signup</button>
                </form>
            </NormalPopup>
        </div>
    );
}

export default Signup;