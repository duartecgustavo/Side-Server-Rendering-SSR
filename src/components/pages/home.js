// Dependencias e bibliotecas;
import React from "react";

// Componentes
const style = "./style.css";

// // Assets - imagens, css
const Separator = "../../assets/images/separator.svg";
const yoda = "../../assets/images/characters/yoda.png";

const Home = function () {
  return (
    <div
      style={{
        width: "100%",
        height: "88vh",
        backgroundImage: "linear-gradient(to right, #1c83f6, #0F23DA)",
        opacity: "90%",
      }}
    >
      <div style={{ maxWidth: "1264px", margin: "0 auto" }}>
        <header
          style={{
            height: "16vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 32px",
          }}
        >
          {" "}
          <h2>Luke Code</h2>
          <nav>
            <button>FAZER LOGIN</button>
            <button>INSCREVA-SE</button>
            <button className="btn-menu">
              <i className="fas fa-bars"></i>
            </button>
          </nav>
        </header>
        <main>
          <section>
            <h1>
              Se torne um mestre <br /> da programação!
            </h1>
            <img src={Separator} alt="" />
            <p>
              De o próximo passo para o seu futuro, <br />
              que a força esteja com você.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Home;
