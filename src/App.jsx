import { useState } from "react";
import "./App.css";
import FormInputs from "./components/FormInputs";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    cpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "Username should be atleast  3-16 characters long and shouldn't include any special characters",
      label: "username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "Enter a valid email addrress",
      label: "email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "birthday",
      label: "birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage:
        "Password should be atleast 8-20 characters long and should include atleast 1 number, 1 letter and 1 special character",
      label: "password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "cpassword",
      type: "password",
      placeholder: "confirm password",
      errorMessage: "Passwords don't match",
      label: "password",
      pattern: values.password, 
      required: true,
    },
  ];

  const handlesubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handlesubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
