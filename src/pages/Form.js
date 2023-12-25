import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useToggle } from "../useToggle"

export const Form = () => {
    const [isFormVisible, setIsFormVisible] = useToggle(true);
    
    const schema = yup.object().shape({
        fullName: yup.string().required("Full name is required"),
        age: yup.number().positive().integer().required("Age is required").min(18),
        email: yup.string().email().required("Email is required"),
        password: yup.string().min(8).required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm password is required")
    })
    
    const { register, handleSubmit, formState: {errors} } = useForm(
        {resolver: yupResolver(schema)}
    );
    const onSubmit = (data) => {
        console.log("Submitted")
        console.table(data)
    }
    

    return (
        <div>
        <button onClick={setIsFormVisible}>Toggle form</button>
        {
            isFormVisible && 
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Enter full name" {...register("fullName")} />
            <p style={{color: "red"}}>{errors.fullName?.message}</p>
            <input type="number" placeholder="Enter age" {...register("age")} />
            <p style={{color: "red"}}>{errors.age?.message}</p>
            <input type="text" placeholder="Enter email" {...register("email")} />
            <p style={{color: "red"}}>{errors.email?.message}</p>
            <input type="password" placeholder="Enter password" {...register("password")} />
            <p style={{color: "red"}}>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm password" {...register("confirmPassword")} />
            <p style={{color: "red"}}>{errors.confirmPassword?.message}</p>
            <button>Submit</button></form>
        }
        </div>

    );
}