import React from "react";
import "./Header.css";
import { Row, Image, Col } from "react-bootstrap";
import {
  Search,
  HouseDoor,
  Cursor,
  Compass,
  Heart,
  PersonCircle,
} from "react-bootstrap-icons";
function Header() {
  return (
    <Row className="header justify-content-between">
      <Image
        className="header__image"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="logo"
      />
      <div className="header__searchBar">
        <form>
          <Search className="ml-1" />{" "}
          <input
            type="text"
            placeholder="Search"
            className="header__searchInput"
          />
        </form>
      </div>
      <Row>
        <Col>
          <HouseDoor />
        </Col>
        <Col>
          <Cursor />
        </Col>
        <Col>
          <Compass />
        </Col>
        <Col>
          <Heart />
        </Col>
        <Col>
          <PersonCircle />
        </Col>
      </Row>
    </Row>
  );
}

export default Header;
