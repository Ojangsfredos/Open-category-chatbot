import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <header>
        <h1>My HealthchatBot</h1>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
