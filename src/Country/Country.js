import React from "react";
import Col from "react-bootstrap/Col";
import "./Country.css";
const Country = ({ filteredData }) => {
  return (
    <Col xl={3} sm={4} className="country">
      {/* <Image src={flags?.png} rounded fluid className='country_image'/> */}

      {filteredData.map((data, index) => (
        <li key={index}>{data.name}</li>
      ))}
    </Col>
  );
};

export default Country;
