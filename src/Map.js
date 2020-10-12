import React from "react";
import { Row, Col } from "antd";
import FormInput from "./components/FormInput";
import RegionInfo from "./components/RegionInfo";
import osm from "osm";
import "./map.css";

function Map() {
  
  return (
    <div className="map">
      <Row>
        <Col span={12}>
          <FormInput />
        </Col>
        <Col span={12}>
          <RegionInfo />
        </Col>
      </Row>
      {osm()}
    </div>
  );
}

export default Map;
