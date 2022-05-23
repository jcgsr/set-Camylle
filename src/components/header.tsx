import React, { useState } from "react";
import { Link } from "gatsby";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "../assets/images/signature.jpeg";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <nav>
        <div className="navbar" id="header">
          <section className="logo">
            <Link to="/" className="nav-logo">
              <img
                src={logo}
                alt="Assinatura de Camylle"
                style={{ height: "3.8rem" }}
              />
            </Link>
          </section>
          <div className="links" id={showLinks ? "hidden" : ""}>
            <Link to="/acolhimento">
              {" "}
              <button>acolhimento</button>
            </Link>
            <Link to="/psicoterapia">
              {" "}
              <button>psicoterapia</button>
            </Link>
            <Link to="/avaliacao">
              <button>avaliação</button>
            </Link>
            <Link to="/aba">
              <button>intervenção aba intensiva</button>
            </Link>{" "}
            <Link to="/treinamento-parental">
              <button>treinamento parental</button>
            </Link>{" "}
            <Link to="/supervisao">
              <button>supervisão profissional</button>
            </Link>{" "}
            <Link to="/cursos">
              <button>cursos</button>
            </Link>
            <Link to="/fale-conosco">
              <button>fale conosco</button>
            </Link>
            <Link to="/downloads">
              <button>Downloads</button>
            </Link>
            <Link to="/apostila">
              <button>Apostilas</button>
            </Link>
            <Link to="/telegram">
              <button>Canal do Telegram</button>
            </Link>
          </div>

          <div className="nav-icon">
            <span onClick={() => setShowLinks(!showLinks)}>
              {!showLinks ? <AiOutlineMenu /> : <AiOutlineClose />}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
