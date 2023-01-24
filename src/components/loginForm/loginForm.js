import React,{useState} from "react";

const LoginForm = ({setIsLogin}) => {

    const [loginData, setLoginData] = useState({email : '', password : ''})

    const userLogin = () =>{
        localStorage.setItem('loginData', JSON.stringify(loginData))
        setIsLogin(true)
    }

    return(
        <div className="shadow rounded-4 bg-white p-5 d-flex flex-column">
        <label role="email" className="form-label text-start">Email</label>
        <input 
            type="email" 
            className="form-control"  
            name="email" 
            placeholder="Enter email" 
            onChange={(e)=> setLoginData({...loginData,email : e.target.value})}
        />
        <label className="form-label mt-4 text-start" role='password'>Password</label>
        <input 
            type="password" 
            className="form-control" 
            name="" 
            placeholder="Enter password" 
            onChange={(e)=> setLoginData({...loginData,password : e.target.value})}
        />

        <button 
            type="button" 
            className="mt-4 px-3 py-2 bg-primary text-white rounded border-0"
            onClick={userLogin}
        >
            Login
        </button>
    </div>
    )
}

export default LoginForm ;