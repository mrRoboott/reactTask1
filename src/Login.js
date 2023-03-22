const Login = () => {
    return ( 
        <>
            <form className="creditials">
                <label>email</label><br/>
                <input type="text" name="" id="" placeholder="შეიყვანეთ email"/><br/>

                <label htmlFor="pass">პაროლი</label><br/>
                <input type="password" name="" id="pass" placeholder="შეიყვანეთ პაროლი"/>

                <button>შესვლა</button>
            </form>
         </>
     );
}
 
export default Login;