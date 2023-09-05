import "./home.scss"

const Home = () => {
  return (
    <>
    <div className="bgImage"></div>
    <div className="heading">
      <h1>It's a Big World Out There, Go Explore</h1>
      <p>we always makeour customershappy by providing many choices</p>
      <div className="btn-group">
        <button className="btn1">Get Started</button>
        <button className="btn2">Get Demo</button>
      </div>
    </div>
    <div className="img">
    <img src="/src/assets/dashboard.png" alt="" />
    </div>
    </>
  )
}

export default Home