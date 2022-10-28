import samo from './samo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="pb-5">Linking trees</h1>
        <img id="profile__img" src={samo} className="App-logo mb-2 img-fluid border rounded-circle img-thumbnail" alt="logo" />
        <p id="twitter">
          Twitter: Samuel26541199
        </p>
        <p id="slack" hidden>
          Slack: Ayibanimi Ikoli
        </p>

        <a
          className="btn btn-info mb-2"
          id='btn__zuri'
          href="https://training.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zuri
        </a>
        <a
          className="btn btn-info mb-2"
          href="http://books.zuri.team/"
          id="books"
          target="_blank"
          rel="noopener noreferrer"
        >
          Books for design and coding
        </a>
        <a
          className="btn btn-info mb-2"
          id='book__python'
          href="https://books.zuri.team/python-for-beginners?ref_id=Ayibanimi+Ikoli"
          target="_blank"
          rel="noopener noreferrer"
        >
          Great reads for sale
        </a>
        <a
          className="btn btn-info mb-2"
          id='"pitch'
          href="https://background.zuri.team/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Background check your devs
        </a>
        <a
          className="btn btn-info mb-5"
          id="book__design"
          href="https://books.zuri.team/design-rules"
          target="_blank"
          rel="noopener noreferrer"
        >
          Free design book you definetely want to get
        </a>
      </header>
    </div>
  );
}

export default App;
