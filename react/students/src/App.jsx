import Students from "./Students"

function App() {
  
  return(
    <>
      <Students name="Levani" age={14} student={false}/>
      <Students name="Nika" age={23} student={false}/>
      <Students name="Tornike" age={21} student={true}/>
    </>
  );
}

export default App
