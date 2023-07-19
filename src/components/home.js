import './home.css';

function Home() {
  const paragraph1 = 'Math Magician is a sleek and intuitive website featuring a powerful calculator for mathematical operations. With its simple and elegant design, performing calculations becomes a breeze.';
  const paragraph2 = 'Additionally, the website offers an inspiring Quote section, where users can discover motivational quotes fetched from an external API. This single-page application combines functionality and aesthetics, providing an enjoyable user experience.';
  return (
    <div className="container">
      <h1>Welcome to Math Magicians!</h1>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  );
}
export default Home;
