import axios from "axios";
import { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../store/apiSlice";
import { setCredentials } from "../store/userSlice";
import SingUp from "./SingUp";

function Login(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const [seePass, setSeePass] = useState(false);
  const [error, setError] = useState("");
  const [active, setActive] = useState(false);
  const [signUp, setSingUP] = useState(false);
  const [loginUser] = useLoginUserMutation();


  const handleInput = (e) => {
    if (e.target.name === "firstName" || e.target.name === "lastName") {
      const x = { ...newUser.name, [e.target.name]: e.target.value };
      setNewUser({ ...newUser, name: x });
    } else {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
  };

  const dataUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/auth/data", {
        withCredentials: true,
      });
      console.log(data);
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          firstName: data.name.firstName,
          img: data.img,
          email: data.email,
        })
      );
    } catch (err) {
      if (err.response.status === 401) console.log("you need log in");
    }
  };

  const login = async () => {
    try {
      const { dataUser} = await loginUser(user);


      const token = data.token;
      const userStorage = {
        firstName: data.user.name.firstName,
        lastName: data.user.name.lastName,
        userName: data.user.username,
        email: data.user.email,
        id:data.user._id

      };

      dispatch(setCredentials({ user: userStorage, token }));

      const { data } = await axios.post(
        "http://localhost:8080/api/users/login",
        user
      );
      console.log(user);
      sessionStorage.token = data.token;
      sessionStorage.user = JSON.stringify(userStorage);
      setActive(false);
    } catch (err) {
      console.log(err);
      if (err.response.status === 400)
        setError("הסיסמא או האיימל שלך לא נכונים");
    }
  };

  const loginGoogle = () => {
    window.location.href = "http://localhost:8080/auth/login/google";
  };

  useEffect(() => {
    dataUser();
    setActive(props.active);
  }, [props.active]);
  
  return (
    active && (
      <>
        <div className="md:flex z-[999] md:justify-center md:items-center md:border-collapse md:fixed md:inset-0 md:h-screen md:w-screen bg-clear ">
          <div className="fixed md:relative inset-0   h-screen  w-screen  flex justify-center flex-col md:flex-row  md:h-5/6">
            <div className="bg-cover bg-center bg-artichoke-img  md:bg-radish-img  md:h-full md:w-4/12 h-1/6" />
            <div className="bg-white h-5/6 md:h-full  md:w-5/12 text-center overflow-auto p-3">
              <p
                className="text-end m-1 cursor-pointer font-semibold hidden md:block"
                onClick={() => {
                  setActive(false);
                }}
                
              >
                X
              </p>
              {signUp ? (
                <div className="bg-white w-96 text-center p-2 h-fit"> 
                  <SingUp />
                </div>
              ):(
                <>
                  <h1>
                    <b>כניסה</b>
                  </h1>
                  <p>התחבר באמצעות דוא"ל שלך וסיסמא</p>

                  <br />
                  <input
                    name="email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    type="email"
                    placeholder='הזן כתובת דוא"ל'
                    className="m-3"
                  />
                  <br />
                  <input
                    name="password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    type={seePass ? "text" : "password"}
                    placeholder="הזן סיסמא"
                  />
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      setSeePass(e.target.checked);
                    }}
                  />
                  <label>הצג סיסמא </label>
                  <br />
                  <p className="flex justify-around items-center">
                    <span className=" bg-slate-400 h-0.5 inline-block w-2/5"></span>
                    או
                    <span className=" bg-slate-400 h-0.5 inline-block w-2/5"></span>
                  </p>
                  <br />
                  <button className="text-blue-500 hover:bg-blue-500 hover:text-white border border-5 border-blue-500 font-bold py-2 px-4 rounded">
                    facebook
                  </button>
                  <br />
                  <div className="flex justify-center items-center">
                    <GoogleButton onClick={() => loginGoogle()} />
                  </div>
                  <br/>
                  <p className="text-red-600">{error}</p>
                  <button
                    className="border-teal-200 border-2 w-3/5 h-10"
                    onClick={login}
                  >
                    התחבר
                  </button>
                  <p
                    onClick={() => {
                      setSingUP(true);
                    }}
                    className="cursor-pointer text-blue-300"
                  >
                    no have account?
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Login;

