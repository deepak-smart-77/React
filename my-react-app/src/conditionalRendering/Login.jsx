function Login(props){
    return(
        props.isLogin ? <h2 className="welcome">Welcome {props.userName}</h2> : 
                        <h2 className="login">Please login to continue</h2>
    )
}
export default Login