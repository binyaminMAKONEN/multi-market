import axios from "axios";
import { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../store/apiSlice";
import { setCredentials } from "../store/userSlice";

function Login(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const [seePass, setSeePass] = useState(false);
  const [error, setError] = useState("");
  const [saveUserEmail, setSaveUserEmail] = useState({});
  const [active, setActive] = useState(false);
  const [signUp, setSingUP] = useState(false);
  const [newUser, setNewUser] = useState({
    name: { firstName: "", lastName: "" },
    email: "",
    userName: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    passwordConfirm: "",
  });

  const [loginUser] = useLoginUserMutation();

  useEffect(() => {
    const login = async () => {
      const { data: token } = await loginUser({
        email: "avivadga64@gmail.com",
        password: "123456",
      });
    };
    login();
  }, []);

  const handleInput = (e) => {
    if (e.target.name === "firstName" || e.target.name === "lastName") {
      const x = { ...newUser.name, [e.target.name]: e.target.value };
      setNewUser({ ...newUser, name: x });
    } else {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
  };
  const singUp = async (obj) => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/users");
      const checkIfEmailExist = data.filter(({ email }) => email === obj.email);
      if (
        obj.name.firstName === "" ||
        obj.name.lastName === "" ||
        obj.email == "" ||
        obj.password === "" ||
        obj.passwordConfirm === "" ||
        newUser.phone === ""
      )
        setError("כל השדות חייבים להיות מלאים");
      else if (obj.password != obj.passwordConfirm)
        setError("הסיסמאות חייבות להיות זהות");
      else if (obj.password.length > 6) setError("עליך להזין לפחות 6 תווים");
      else if (obj.phone.length >= 11 || obj.phone.length < 10)
        setError("מספר טלפון לא תקין");
      else if (!obj.email.includes("@") && !obj.email.includes(".com"))
        setError("אימייל לא תקין");
      else if (checkIfEmailExist.length > 0) {
        setError("האימייל קיים");
        console.log(checkIfEmailExist);
      } else if (checkIfEmailExist != []) {
        setError("d");
        console.log("jjj");
        console.log(checkIfEmailExist);
      }
    } catch (err) {
      console.log(err);
      if (err.request.status == 500) setError("האימייל קיים");
      else if (
        (err.request.status == 500 && newUser.name.firstName == "") ||
        newUser.name.lastName == "" ||
        newUser.email == "" ||
        newUser.password == "" ||
        newUser.passwordConfirm ||
        newUser.phone == ""
      )
        setError("כל השדות חייבים להיות מלאים");
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
      const { data } = await loginUser(user);

      const token = data.token;
      console.log(data.name);
      const userStorage = {
        firstName: data.user.name.firstName,
        lastName: data.user.name.lastName,
        userName: data.user.username,
        email: data.user.email,
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
                onClick={() => {
                  setActive(false);
                }}
              >
                X
              </p>
              {signUp ? (
                <div className="bg-white w-96 text-center p-2 h-fit">
                  <input
                    onChange={handleInput}
                    name="firstName"
                    type="text"
                    placeholder="שם פרטי"
                    className="m-3"
                    required={"reqaiede"}
                  />
                  <br />
                  <input
                    onChange={handleInput}
                    name="lastName"
                    type="text"
                    placeholder="שם משפחה"
                    className="m-3"
                    required
                  />
                  <br />
                  <input
                    onChange={handleInput}
                    name="email"
                    type="email"
                    placeholder='הזן כתובת דוא"ל'
                    className="m-3"
                    required
                  />
                  <br />
                  <input
                    onChange={handleInput}
                    name="userName"
                    type="text"
                    placeholder="שם משתמש"
                    className="m-3"
                  />
                  <br />
                  <input
                    onChange={handleInput}
                    name="phone"
                    type="tel"
                    placeholder="טלפון "
                    className="m-3"
                  />
                  <br />
                  <input
                    onChange={handleInput}
                    name="password"
                    type="text"
                    placeholder="הזן סיסמא"
                    className="m-3"
                  />
                  <br />
                  <input
                    onChange={handleInput}
                    name="passwordConfirm"
                    type="text"
                    placeholder="אימות סיסמא"
                    className="m-3"
                  />
                  <br />
                  <p className="text-red-600">{error}</p>
                  <button
                    // onClick={()=>register(newUser)}
                    className="border-teal-200 border-2 w-3/5 h-10"
                  >
                    submit
                  </button>
                </div>
              ) : (
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
                  <br />
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
              {signUp ? (
                <div className="bg-white w-96 text-center p-2 h-fit">
                  <input
                    onChange={handleInput}
                    name="firstName"
                    type="text"
                    placeholder="שם פרטי"
                    className="m-3"
                    required
                  />
                  <br />
                  <input
                    onChange={handleInput}
                    name="lastName"
                    type="text"
                    placeholder="שם משפחה"
                    className="m-3"
                    required
                  />
                  <br />
                  <input
                    onChange={handleInput}
                    name="email"
                    type="email"
                    placeholder='הזן כתובת דוא"ל'
                    className="m-3"
                    required
                  />
                  <br />
                  <input
                    onChange={handleInput}
                    name="userName"
                    type="text"
                    placeholder="שם משתמש"
                    className="m-3"
                  />
                  <br />
                  <input
                    onChange={handleInput}
                    name="phone"
                    type="tel"
                    min={9}
                    maxlength="10"
                    placeholder="טלפון "
                    className="m-3"
                  />
                  <br />
                  <input
                    onChange={handleInput}
                    name="password"
                    type="password"
                    placeholder="הזן סיסמא"
                    className="m-3"
                  />
                  <br />
                  <input
                    onChange={handleInput}
                    name="passwordConfirm"
                    type="password"
                    placeholder="אימות סיסמא"
                    className="m-3"
                  />
                  <br />
                  <p className="text-red-600">{error}</p>
                  <button
                    onClick={() => singUp(newUser)}
                    className="border-teal-200 border-2 w-3/5 h-10"
                  >
                    submit
                  </button>
                </div>
              ) : (
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
                  <br />
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

