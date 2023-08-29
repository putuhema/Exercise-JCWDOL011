import {
  LogoCss3,
  LogoGithub,
  LogoHtml5,
  LogoJavascript,
  LogoNodejs,
  LogoReact,
} from "react-ionicons";

function App() {
  return (
    <>
      <section className="hero">
        <div className="page">
          <p>01</p>
          <span></span>
          <h2>INTRODUCE</h2>
        </div>
        <div>
          <p className="animation">Hi, I'm putu mahendra</p>
          <h1>FULLSTACK DEVELOPER;</h1>
        </div>
      </section>
      <section className="skill">
        <div className="page">
          <p>02</p>
          <span className="bg-black"></span>
          <h2>SKILLS</h2>
        </div>
        <div className="skill_container">
          <div>
            <h3>SKILLS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              perferendis eos voluptatum laboriosam neque? Sit necessitatibus,
              laborum iste modi deleniti quod nihil non nulla repellendus
              temporibus atque. Minus, debitis.
            </p>
          </div>
          <div className="skill_content">
            <div className="progress progress-90">
              <div className="overlay">
                <LogoHtml5 height="3rem" width="3rem" />
              </div>
            </div>
            <div className="progress progress-90">
              <div className="overlay">
                <LogoCss3 height="3rem" width="3rem" />
              </div>
            </div>
            <div className="progress progress-80">
              <div className="overlay">
                <LogoJavascript height="3rem" width="3rem" />
              </div>
            </div>
            <div className="progress progress-70">
              <div className="overlay">
                <LogoNodejs height="3rem" width="3rem" />
              </div>
            </div>
            <div className="progress progress-60">
              <div className="overlay">
                <LogoReact height="3rem" width="3rem" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container contact">
        <div className="page">
          <p>03</p>
          <span className="bg-black"></span>
          <h2>CONTACT</h2>
        </div>
        <div className="forms">
          <h3>Send me a message!</h3>
          <p>
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <form>
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <textarea placeholder="say hello"></textarea>
            <button>Mail me</button>
          </form>
        </div>
      </section>
      <section className="footer">
        <a href="https://github.com/putuhema" target="_blank">
          <LogoGithub color={"#000000"} width="1rem" height="1rem" />
          github/putuhema
        </a>
        <span className="line"></span>
      </section>
    </>
  );
}

export default App;
