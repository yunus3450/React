import React,{useState,useMemo,useCallback} from "react";


const MemoizedButton = React.memo(({onClick, children}) => {
  console.log("Button Render Oldu");
  return <button onClick={onClick}>{children}</button>
});

const App = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);


  const computedValue = useMemo(() => {
    console.log("Hesaplama yapılıyor...");
    return count*2 + 5 /7 - 2 * 2 / 7 * 9 - 2 ;
  },[count]);


  const increment = useCallback(()=> {
    setCount((prev) => prev + 1);
  },[]
  )
  return (
    <div style={{backgroundColor: darkMode ? "#333": "#fff", padding:"20px"}}>
      <h2>Counter : {count}</h2>
      <h3>Hesaplanan Değer : {computedValue}</h3>
      <MemoizedButton onClick={increment}>Arttır</MemoizedButton>


      <button onClick={() => setDarkMode((prev) => !prev)}>
        Tema Değiştir ({darkMode ? "Açık" : "Koyu"})
      </button>


    </div>
  )


}
export default App