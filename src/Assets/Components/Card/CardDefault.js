import React from "react";
import { Card, Button } from "react-bootstrap";

export const CardDefault = ({ title , isi  ,button }) => {

  let dataTitle = title ? title : "ini adalah Title";
  let dataisi = isi ? isi : "";
  let buttonisi = button ? button : false;


  const Triger =()=>{
    alert("hit")
  }

  function ini(){
    alert("hit ini")
  }
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title> {dataTitle}</Card.Title>
          <Card.Text>
          {dataisi}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        {buttonisi ? <Button onClick={()=>{ini()}}>tes</Button>: ""}
      </Card>
    </div>
  );
};
