import ImageView from './views/ImageView.js';
import Header from './views/HeaderView.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container mx-auto'>
        <ImageView />
      </div>
    </div>
  );
}

export default App;
