import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "../Header";
import Post from "../Post";

function App() {
  return (
    <Container className="app">
      <Header />
      <Post />
    </Container>
  );
}

export default App;
