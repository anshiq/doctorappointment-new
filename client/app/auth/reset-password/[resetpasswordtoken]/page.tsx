"use client";

import { useEffect, useState } from "react";

const VerifyToken = (params: any) => {
    const [password, setPassword] = useState("");
    const [retypepassword, setRetypePassword] = useState('')
    const token = params.resetpasswordtoken;
    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (password !== retypepassword) {
            alert("passwrd don't match")
            return
        }
    }
    return <>
        <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">New Password :</label>
                        <input
                            type="password"
                        minLength={8}
                            required
                            className="w-full px-3 py-2 border rounded-md"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium">Re-Type Password :</label>
                        <input
                            type="password"
                            minLength={8}
                            required
                            className="w-full px-3 py-2 border rounded-md"
                            onChange={(e) => setRetypePassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Sent Reset Password Email</button>

                </form>
            </div>
        </div></>;
};
export default VerifyToken;