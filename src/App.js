import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Feature from './components/Feature/Feature';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="features">
        <Feature image="./chat.png" alt="Consulting" title="Consulting" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        <Feature image="./programming.png" alt="Designing" title="Designing" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        <Feature image="./chat.png" alt="Developing" title="Developing" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        <Feature image="./programming.png" alt="Analysis" title="Analysis" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
      </div>
    </div>
  );
}

export default App;
