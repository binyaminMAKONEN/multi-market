import React , {useState } from "react";
import axios from "axios";
import PhoneVerf from "../Pages/PhoneVerf";
export default function SingUp() {
    const [verify, setVerify] = useState(false);
    const [error, setError] = useState("");
    const [signUpUser, setSingUPUser] = useState(true);
    const [newUser, setNewUser] = useState({
        name: { firstName: "", lastName: "" },
        email: "",
        userName: "",
        phone: "",
        password: "",
        passwordConfirm: "",
        passwordConfirm: "",
      });

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
        const { data } = await axios.get("http://localhost:8080/api/users");
        const checkIfEmailExist = data.filter(({ email }) => email === obj.email);
        console.log(obj.name.firstName);
        if (
          obj.name.firstName === "" ||
          obj.name.lastName === "" ||
          obj.email == "" ||
          obj.password === "" ||
          obj.passwordConfirm === "" 
          // newUser.phone === ""
        ){
            setError("כל השדות חייבים להיות מלאים");
            return
        }
        else if (obj.password != obj.passwordConfirm){
          setError("הסיסמאות חייבות להיות זהות");
          return 
        }
        else if (obj.password.length < 6){
          setError("עליך להזין לפחות 6 תווים")
          return
        }
        else if (!obj.email.includes("@") && !obj.email.includes(".com")){
          setError("אימייל לא תקין");
          return
        }
        else if (checkIfEmailExist.length > 0) {
          setError("האימייל קיים");
          return
        }
        setError(" ");
        setVerify(!verify)
        setSingUPUser(!signUpUser)
    };
  return (
    <div>
        {signUpUser?(
            <div>
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
onClick={()=>singUp(newUser)}
className="border-teal-200 border-2 w-3/5 h-10"
>
 submit
</button>
</div>):(verify?(<div><PhoneVerf obj={newUser}/></div>):null)}
        
    </div>
  )
}
