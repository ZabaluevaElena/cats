import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Image from "./components/Image";
import styled from 'styled-components';

const StyledApp = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  padding: 30px;
  overflow: hidden;
`

function App() {
  const [cats, setCats] = useState();
  const [inputName, setInputName] = useState("enadled");

  const onChangeRadio = (name) => {
    setInputName(name);
  };

  const getCatButton = () => {
    axios
      .get(
        "https://api.thecatapi.com/v1/images/search?api_key=7ffd60e3-5546-4757-939c-b2b1b421d95c"
      )
      .then(({ data }) => setCats(data));
  };

  useEffect(() => {
    axios
      .get(
        "https://api.thecatapi.com/v1/images/search?api_key=7ffd60e3-5546-4757-939c-b2b1b421d95c"
      )
      .then(({ data }) => setCats(data));
  }, []);

  useEffect(() => {
    if (inputName === "autoRefrash") {
      const interval = setInterval(() => {
        axios
          .get(
            "https://api.thecatapi.com/v1/images/search?api_key=7ffd60e3-5546-4757-939c-b2b1b421d95c"
          )
          .then(({ data }) => setCats(data));
      }, 5000);
      return () => clearInterval(interval);
    }
  });

  return (
    <StyledApp>
      <Header name={inputName} onChange={onChangeRadio} />
      <Button getCat={getCatButton} />
      {cats && <Image url={cats[0].url} />}
    </StyledApp>
  );
}

export default App;
