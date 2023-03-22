const SignUp = () => {
    return (
         <>
            <form className="creditials">
                <label>სახელი</label><br/>
                <input type="text" name="" id="" placeholder="შეიყვანეთ სახელი"/><br/>

                <label>გვარი</label><br/>
                <input type="text" name="" id="" placeholder="შეიყვანეთ გვარი"/><br/>

                <label>email</label><br/>
                <input type="text" name="" id="" placeholder="შეიყვანეთ email"/><br/>

                <label htmlFor="pass">პაროლი</label><br/>
                <input type="password" name="" id="pass" placeholder="შეიყვანეთ პაროლი"/>

                <button>რეგისტრაცია</button>
            </form>
         </>
         );
}
 
export default SignUp;