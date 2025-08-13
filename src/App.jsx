import { useEffect, useState } from "react";
import "./App.css";
import CounterButtons from "./components/CounterButtons";
import Display from "./components/Display";
import Header from "./components/Header";

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrease = () => {
    setCount2((prevCount) => prevCount - 1);
  };
  // useEffect(() => {
  //   console.log("inside useEffect");
  //   if (count > 10) {
  //     alert("overflow");
  //   }
  //   if (count < 0) {
  //     alert("Underflow");
  //   }
  // }, [count]);
  // console.log(`count = ${count}`);
  useEffect(()=>{
    console.log("inside useEffect 1")
  }, [count]);
  useEffect(()=>{
    console.log("inside useEffect 2")
  }, [count2]);
  return (
    <div className="bg-white text-center flex flex-col items-center justify-center min-h-screen space-y-4">
      <Header />
      <p>{count2}</p>
      <Display count={count} />
      <CounterButtons increment={increase} decrement={decrease} />
    </div>
  );
}
