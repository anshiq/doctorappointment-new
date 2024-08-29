"use client";

import { useEffect, useState } from "react";

const VerifyToken = (params: any) => {
  const [type, setType] = useState<
    | "verifying"
    | "wrong or already verified"
    | "verfication done redirecting to login"
  >("verifying");
  const token = params.verifytoken;
  useEffect(() => {
    // api to verfy
  }, [token]);
  return <>Verfiying </>;
};
export default VerifyToken;
