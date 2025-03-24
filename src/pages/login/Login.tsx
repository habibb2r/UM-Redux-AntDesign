import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";


const Login = () => {
    const {register, handleSubmit} = useForm();
   const [login, {data, error}] = useLoginMutation();

   console.log("data =>", data)
   console.log("error =>", error)
    const onSubmit = (data) => {
        const userInfo = {
            id: '0001',
            password: 'admin12345'
        }
       login(userInfo)
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