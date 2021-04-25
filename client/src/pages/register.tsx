import React from "react";
import { useRouter } from "next/router";
import { useRegisterMutation } from "../generated/graphql";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [register] = useRegisterMutation();

  return <div>Hello, This is Register</div>;
};

export default Register;
