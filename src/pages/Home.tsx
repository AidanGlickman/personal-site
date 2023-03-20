import "./Home.scss"
function Home() {
    return (
        <div className="hero">
            <img src="/assets/headshot.jpg" alt="Aidan Glickman" className="hero-image" height="30%" />
            <h1 className="name">Aidan Glickman</h1>

            <h2 className="title">Student, Quant, Developer</h2>
            <div className="socials">
                <a href="https://github.com/AidanGlickman" rel="noreferrer">
                    <i className="social fa-brands fa-github"></i>
                </a>
                <a href="https://twitter.com/aidan_glickman" rel="noreferrer">
                    <i className="social fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/aidanglickman/" rel="noreferrer">
                    <i className="social fa-brands fa-linkedin"></i>
                </a>
                <a href="mailto:contact@aidanglickman.com" rel="noreferrer">
                    <i className="social fa-solid fa-envelope"></i>
                </a>
            </div>
        </div>
    )
}

export default Home
