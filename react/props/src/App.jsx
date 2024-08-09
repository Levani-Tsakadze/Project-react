import Welcome from "./admin";

function App() {

  return( 
    <>  
      <Welcome isLogged={true} username="Kirola" password="123456789"/>
      <Welcome isLogged={true} username="Tornike" password="toko123456"/>
      <Welcome isLogged={true} username="Levani" password="leusha"/>
      <Welcome isLogged={true} username="" password="leusha"/>
      <Welcome isLogged={false}  username="Hello" password="leush2a"/>

    </>
  );
  
}

export default App
