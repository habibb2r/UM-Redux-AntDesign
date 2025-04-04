import { Button } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UMForm from "../../components/form/UMForm";
import UMInput from "../../components/form/UMInput";

const Login = () => {
  const navigate = useNavigate();
  const [login, { data, error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  console.log("data =>", data);
  console.log("error =>", error);
  const onSubmit = async (data : FieldValues) => {
    console.log("data =>", data);
    const toastId = toast.loading("Logging in...");
    try {
      const userInfo = {
        id: "0001" ,
        password: "admin12345" ,
        // id: data.id,
        // password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Login successful", { id: toastId , duration: 2000});
      navigate(`/${user.role}/dashboard`);
    } catch {
      toast.error("Invalid credentials", { id: toastId });
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <UMForm onSubmit={onSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
          <UMInput type={"text"} name={"id"} label={"ID :"} />
          <UMInput type={"text"} name={"password"} label={"Password :"} />
          <Button htmlType="submit">Login</Button>
        </div>
        
      </UMForm>
    </div>
  );
};

export default Login;
