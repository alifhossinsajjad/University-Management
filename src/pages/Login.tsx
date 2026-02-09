import { Button } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "0001",
      password: "admin12345",
    },
  });
  const [login, { error }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onsubmit = async (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);
    // console.log(user);

    dispatch(setUser({ user: user, token: res.data.accessToken }));

    console.log(res);
  };

  return (
    <div>
      <h1>login your account </h1>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label htmlFor="id">id</label>
          <input type="text" id="id" {...register("userId")} />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">login</Button>
      </form>
    </div>
  );
};

export default Login;
