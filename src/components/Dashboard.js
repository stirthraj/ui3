import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const apis = {
  small:
    "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json",
  medium:
    "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/medium.json",
  large:
    "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/large.json",
};



function Dashboard() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/about">About us</Link>
          </div>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </BrowserRouter>
      </div>
    </>
  );
  function Home() {
    const [error, setError] = useState("");
    const [api, setApi] = useState(apis["small"]);
    const [data, setData] = useState([]);
    const [entries,setEntries]=useState(10);

    useEffect(() => {
      axios.get(api).then((res) => {
        setData(res.data);
      });
    }, [api]);

    const onHandleSubmit = async (e) => {
      e.preventDefault();
      try {
        await console.warn({ api });
      } catch (error) {
        setError("Error Occured");
      }
    };
    return (
      <div>
        Home:{error}
        <form onClick={onHandleSubmit}>
          <select onChange={(e) => setApi(e.target.value)}>
            <option value={apis["small"]}>small</option>
            <option value={apis["medium"]}>medium</option>
            <option value={apis["large"]}>large</option>
          </select>
          <select onChange={(e) => setEntries(e.target.value)}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          {/* <button type="submit">Submit</button> */}
        </form>
        <div className="table">
          <div className="thead">
            <div className="trow">
              <div className="thcol">Name</div>
              <div className="thcol">Location</div>
              <div className="thcol">Date</div>
              <div className="thcol">Salary</div>
            </div>
          </div>
          <div className="tbody">
            {/* .filter((usr)=>{return usr.firstName===this.props.search;}) */}
            {data.slice(0,entries).map((user) => (
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
          </div>
          <div className="tfoot">
            <div className="trow">
              <div className="thcol">Name</div>
              <div className="thcol">Location</div>
              <div className="thcol">Date</div>
              <div className="thcol">Salary</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function About() {
    return <div>About</div>;
  }
  function Contact() {
    return <div>Contact</div>;
  }
}
export default Dashboard;
