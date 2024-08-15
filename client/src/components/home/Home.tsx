export default function Home() {
  return (
    <>
      <div className="container">
        <video autoPlay muted loop>
          <source src="video1.mp4" type="video/mp4" />
        </video>

        <div className="content">
          <h2>
            Build your dream body <br /> with home-fitness
          </h2>
        </div>
      </div>
    </>
  );
}
