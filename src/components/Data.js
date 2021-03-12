import axios from 'axios';
import { useEffect,useState } from 'react';


export default function Data() {
  
    const [data,setData]=useState();
    // const [api,setApi]=useState();
    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/medium.json")
        .then(res=>res.json())
        .then(data=>setData(data))
    }, []);
    return (
      <>
        {/* <form>
          {api}
          <select onClick={(e) => setApi(e.target.value)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">
              Coconut
            </option>
            <option value="mango">Mango</option>
          </select>
        </form> */}
        {data.map((user) => (
          <div className="trow" key={user.id}>
            <div className="tcol">
              {user.firstName} {user.lastName}
            </div>
            <div className="tcol">{user.location}</div>
            <div className="tcol">
              {new Date(parseInt(user.date)).toGMTString()}
            </div>
            <div className="tcol">{user.salary}</div>
          </div>
        ))}
      </>
    );
}