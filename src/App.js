import React from "react";
import "./App.css";
import InstallButton from "./InstallButton";

function App() {
  const [dogURL, setDogURL] = React.useState();
  async function handleFetchClick() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const resJson = await response.json();
    setDogURL(resJson.message);
  }

  return (
    <div className='App'>
      <InstallButton />
      <div>
        <div>{dogURL && <img src={dogURL} alt='dog' />}</div>
        <button onClick={handleFetchClick}>가져오기</button>
      </div>
    </div>
  );
}

export default App;
