import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Country from "../Country/Country";
const RestCountries = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [display, setDisplay] = useState("");
  // const states = ["São Paulo", "Rio de Janeiro", "Rio Grande do Sul", "Bahia"];
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  let filteredData = countries.filter((val) => {
    if (searchText === "") {
      return val;
    } else if (val.name.toLowerCase().includes(searchText.toLowerCase())) {
      return val;
    } else {
      return "";
    }
  });

  return (
    <Container>
      <Row>
        <h1 className="text-center">All Countries</h1>
        <input
          placeholder="Search...."
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />

        {<Country filteredData={filteredData} />}
      </Row>
    </Container>
  );
};

export default RestCountries;

// {/* {
//               countries.filter(country => {
//                 return country ? search === '' : country.name.toLowerCase().includes(search.toLowerCase())
//            })
//           } */}
