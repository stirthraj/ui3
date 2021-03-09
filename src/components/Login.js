import { useState } from "react";

export default function Login(){
        const [token, setToken] = useState();

    function onSubmitHandle(e){
        e.preventDefault();
        sessionStorage.setItem("token",token);
        window.location.reload();
    }
    return(
        <form onSubmit={onSubmitHandle}>
            <h6>token value: 1234</h6>
            <label>
                Write Token to see data:
                <input type="password" onChange={(e)=>setToken(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}