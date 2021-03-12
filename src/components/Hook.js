import { useEffect, useState,useRef,createContext } from "react";


    //useContext
       const moods={
         happy:'A',
         sad:'B'
       }

       const MoodContext=createContext(moods.happy);

function Hook(){

    // practice useState
    const [value,setValue]=useState(0);
    //useEffect
    useEffect(()=>{
        document.title=value;
    },[value])
    // useRef
    const titleRef=useRef();




    const [gender,setGender]=useState(false);
    const handleCheckbox=() => setGender((prev)=>!prev);

    return (
      <>
        <div style={{ padding: "10px" }}>
          <h1>useState Property: {value}</h1>
          <button onClick={() => setValue(value + 1)}>Increment</button>
          <button onClick={() => setValue(value - 1)}>Decrement</button>

          <h1>UseRef</h1>
          <input ref={titleRef} />
          <button onClick={() => setValue(titleRef.current.value)}>
            UseRef
          </button>
        </div>

        <div>
          <form>
            Check Button
            <input type="checkbox" checked={gender} onChange={handleCheckbox} />
            <button type="submit">Submit</button>
          </form>
        </div>

        <MoodContext.Provider value={moods.sad}>
          <MoodEmoji />
        </MoodContext.Provider>
      </>
    );

    function MoodEmoji(){
      // const mood=useContext(MoodContext);
      // return (<div>{mood.sad}</div>);
      return(<Dmood/>);
    }
    // function Dmood(){
    //   const mood = useContext(MoodContext);
    //   return <div>{mood.sad}</div>;
    // }
    function Dmood(){
      return(<MoodContext.Consumer>
        {value=><div>{value}</div>}
      </MoodContext.Consumer>)
    }
}
export default Hook;