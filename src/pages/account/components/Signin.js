function Signin({ setCurrentMethod }) {
    const Signin = "w-full h-full flex flex-col items-center justify-center gap-2 p-4";
    const SigninContent = "flex flex-col items-center justify-center p-4";
    const InputStyle = "border border-white mb-2 rounded bg-black px-2 text-white";
    const ButtonStyle = "mb-2 rounded font-bold text-sm p-1 min-w-[100px] text-white";
    const TextStyle = "text-white";
    const SigninSignupButton = "absolute bottom-2 bg-none border-none text-blue-600";
    const TextStyleLarge = "text-white text-2xl";
    
    return (
        <div className={Signin}>
            <p className={TextStyleLarge}>Sign up</p>
            <form className={SigninContent}>
                <label htmlFor="email" className={TextStyle}>Email</label>
                <input type="email" className={InputStyle} id="email" name="email" required />

                <label htmlFor="password" className={TextStyle}>Password</label>
                <input type="password" className={InputStyle} id="password" name="password" required />

                <button type="submit" className={ButtonStyle}>Sign in</button>
            </form>
            <button className={SigninSignupButton} onClick={() => setCurrentMethod("signup")}>Or just sign up</button>
        </div>
    )
}

export default Signin;