import './registration.scss';
import '../../styles/components/_button.scss';
import { useState } from 'react';
 
const Signin = () => {
    const [state, setState] = useState({
        email:'',
        password:'',
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    console.log(state.email, state.password, state.username);
  return (
    <div>
        <div className="signup-form">
        
             <div className="signup-form__wrapper">
             <form className="form"> 
             <h4>Sign In</h4>
           
            <div className="form-group">
                <input type="email" placeholder="Enter Email" name="email" value={state.email} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <input type="password" placeholder="Enter Password" name="password" value={state.password} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <button className='button'>Sign Up</button>
            </div> 
            </form>
            </div>
            
        </div>
    </div>
    
  ); 
};

export default Signin