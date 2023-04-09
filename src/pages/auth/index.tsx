import Button from "../../../components/common/Button";
import {FcGoogle} from "react-icons/fc"
const Auth = () => {
    return ( <div className=" w-[30%] sm:w-[20%] mx-auto mt-48">
        <Button 
        title="Signin with google" 
        onClicke={()=>console.log("Sign in with google")}
        Icons={<FcGoogle/>}
        />
    </div> );
}
 
export default Auth;