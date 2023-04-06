import {useDispatch,useSelector} from "react-redux"
import {fetchData} from '../../../utils/slices/userSlice'
import { useEffect } from "react"
const Complted = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchData())
    },[])
    return (<div>

    </div>  );
}
 
export default Complted;