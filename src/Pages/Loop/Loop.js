import React from "react";
export const Loop = () => {
  let array = [
        {
          "_id": "623eb42ab19dcc7392a9b92d",
          "index": 0,
          "age": 38,
          "name": "Robyn Maxwell",
          "gender": "female",
          "email": "robynmaxwell@centree.com"
        },
        {
          "_id": "623eb42aedfa469915ead67a",
          "index": 1,
          "age": 33,
          "name": "Newton Stephenson",
          "gender": "male",
          "email": "newtonstephenson@centree.com"
        },
        {
          "_id": "623eb42a150b148fb2346adb",
          "index": 2,
          "age": 26,
          "name": "Mendoza Burt",
          "gender": "male",
          "email": "mendozaburt@centree.com"
        },
        {
          "_id": "623eb42a80c12c6581519519",
          "index": 3,
          "age": 32,
          "name": "Tyson Wilder",
          "gender": "male",
          "email": "tysonwilder@centree.com"
        },
        {
          "_id": "623eb42af63f9d3083bad67d",
          "index": 4,
          "age": 31,
          "name": "Cole Harding",
          "gender": "male",
          "email": "coleharding@centree.com"
        },
        {
          "_id": "623eb42a3f085fb8c3713e4b",
          "index": 5,
          "age": 20,
          "name": "Weber Dickson",
          "gender": "male",
          "email": "weberdickson@centree.com"
        },
        {
          "_id": "623eb42a87b97fa65fe446ce",
          "index": 6,
          "age": 23,
          "name": "Merle Pickett",
          "gender": "female",
          "email": "merlepickett@centree.com"
        }
  ];

  const Loop = (array) => {
    let DataArray = array;
    return DataArray.map((value) => {
      return <div>
        <h1>{value.name}</h1>
        <h1>{value.gender}</h1>
        <h1>{value.email}</h1>
        <hr></hr>
      </div>;
    });
  };

  return (
    <div>
    {Loop(array)}
    </div>
  );
};
