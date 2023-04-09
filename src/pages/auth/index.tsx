import Button from "../../../components/common/Button";

const Auth = () => {
    return ( <div className=" w-[30%] sm:w-[20%] mx-auto mt-48">
        <Button 
        title="Signin with google" 
        onClicke={()=>console.log("Sign in with google")}/>
    </div> );
}
 
export default Auth;