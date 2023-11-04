import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import auth from "../firebase/firebase";
import { AuthContext } from "../AuthProvider";


const Login = () => {


  const {googleLogin} = useContext(AuthContext)
  const [error,setError] = useState('')

  error && toast.error('Email/Password do not match') 
  const handleLogin = (media) => {
    media()
    .then(res=>console.log(res.user))
    .catch(err=>console.log(err))
  }

  const handleLoginSubmit = (e) =>{
    e.preventDefault()
  

    const email = e.target.email.value;
    const pass = e.target.pass.value;
    
    console.log(email,pass);
    if(pass.length < 6){
      toast.error('Password should be at least 6 characters')
      return
    }
     else if(!/[A-Z]/.test(pass)){
      toast.error('Please include at least one uppercase letter in your password')
      return
    }
    else if (!/[!@#$%^&*()_+\-=[{};':"|,.<>/?]+/.test(pass)){

      toast.error('Please include Special Characters in your password')
      return

    }
    
   
    
    if(email,pass){
    signInWithEmailAndPassword(auth,email,pass)
    .then(res=>console.log(res.user))
    .catch(err=>setError(err.message))
    
    // setError('')
    return
  } 
      
  } 


  return (
    <div className="hero  min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLoginSubmit} className="card-body w-96 mr-10  p-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>

            <button onClick={()=> handleLogin(googleLogin)} className="btn mt-3">
                  Continue With
                  <FcGoogle className="text-xl"></FcGoogle>
                </button>
              
            <div className="form-control mt-6">
              <button  className="btn btn-primary">Login</button>
            </div>
            <p>New to here? Please <Link className="btn-link font-bold" to='/register'>Register</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
