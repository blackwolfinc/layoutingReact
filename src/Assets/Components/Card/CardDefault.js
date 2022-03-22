import React from "react";
import { Card, Button } from "react-bootstrap";

export const CardDefault = ({ title , isi }) => {

  let dataTitle = title ? title : "";
  let dataisi = isi ? isi : "";

  return (
    <div>
    {console.log(typeof data)}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
         
          <Card.Text>
          {dataisi}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          <Card.Title> {dataTitle}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
