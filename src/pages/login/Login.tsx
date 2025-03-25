import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm();
   const [login, {data, error}] = useLoginMutation();
    const dispatch = useAppDispatch()
   console.log("data =>", data)
   console.log("error =>", error)
    const onSubmit = async(data) => {
        const userInfo = {
            id: '0001',
            password: 'admin12345'
        }
       const res = await login(userInfo).unwrap();
       const user = verifyToken(res.data.accessToken)
       dispatch(setUser({user: user, token: res.data.accessToken}))
        navigate(`/${user.role}/dashboard`)
    }
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}} >
            <form onSubmit={handleSubmit(onSubmit)} >
               <div>
               <label htmlFor="id">ID:</label>
                <input type="text" id="id"  {...register("id")} />
               </div>
               <div>
               <label htmlFor="password">Password:</label>
                <input type="text" id="password" {...register("password")} />
               </div>
               <Button htmlType="submit">Login</Button>
            </form>
        </div>
    );
};

export default Login;