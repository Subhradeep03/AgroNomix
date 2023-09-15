import React, { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [cookies, setCookie] = useCookies(["storeId"]);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        ` http://localhost:5000/api/v1/store/login`,
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.success) {
        setCookie("storeId", data.storeId);
        toast({
          title: data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        }); // setAuth({...auth, user: data.existUser, token:data.token})
        navigate("/dashboard");
        setLoginData({});
        //  localStorage.setItem('token', data.token)
        window.location.reload();
      }
    } catch (error) {
      toast({
        title: "User does not exist",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <div
      style={{
        background:
          'url("https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <nav className="flex flex-row w-full justify-center items-center p-4 sm:px-10 max-sm:ml-2">
        <div className="text-center text-2xl sm:text-4xl text-white font-semibold z-10 max-sm:text-xl">
          <a href="/login">AgroNomix</a>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center h-auto md:py-2 m-auto">
        <div className="absolute inset-0 bg-black opacity-50 h-screen"></div>
        <Helmet>
          <title>Login | AgroNomix</title>
        </Helmet>
        <main className="flex items-center w-full px-2 md:px-20 justify-center gap-y-4 mt-24">
          <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full h-full md:w-[450px] md:h-[400px] items-center max-w-4xl transition duration-1000 ease-out z-10 justify-center">
            <h2 className="p-3 text-3xl font-bold text-black py-4 text-center">
              Login
            </h2>
            <ToastContainer />
            <div className="flex flex-col items-center justify-center gap-y-5 w-full px-10 max-sm:w-[330px] max-sm:px-5">
              <input
                type="email"
                className="rounded-lg px-3 py-3 md:w-full w-full border-[1px] border-gray-500 m-1 focus:shadow-md focus:ring-0 focus:border-orange-500 focus:outline-1 focus:outline-orange-500"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    document.getElementById("passwordInput").focus();
                  }
                }}
              />
              <div className="flex flex-row w-full">
                <input
                  type={passwordType}
                  className="rounded-lg px-3 py-3 sm:w-4/5 md:w-full w-full border-b-[1px] border-t-[1px] border-l-[1px] rounded-r-none border-gray-500 focus:shadow-md focus:ring-0 focus:border-orange-500 focus:outline-1 focus:outline-orange-500 max-sm:"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      document.getElementById("submitButton").click();
                    }
                  }}
                  id="passwordInput"
                />
                <div className="flex justify-center items-center border-b-[1px] border-t-[1px] border-r-[1px] rounded-lg rounded-l-none border-gray-500">
                  <button
                    className="focus:outline-none"
                    onClick={() => {
                      setPasswordType((prevType) =>
                        prevType === "password" ? "text" : "password"
                      );
                    }}
                  >
                    {passwordType === "password" ? (
                      <img
                        src="https://flaticons.net/icon.php?slug_category=medical&slug_icon=eye-05&icon_size=256&icon_color=000000&icon_flip=&icon_rotate=0"
                        alt=""
                        className="w-6 h-6 mr-2"
                      />
                    ) : (
                      <img
                        src="https://flaticons.net/icon.php?slug_category=medical&slug_icon=eye-07&icon_size=256&icon_color=000000&icon_flip=&icon_rotate=0"
                        alt=""
                        className="w-6 h-6 mr-2"
                      />
                    )}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="rounded-2xl px-6 py-2 w-full bg-[#f8ae54] text-white text-lg font-bold hover:bg-[#f67648] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                onClick={handleSubmit}
                id="submitButton"
              >
                Sign In
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
