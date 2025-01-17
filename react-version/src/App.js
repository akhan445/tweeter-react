import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';
import './App.css';

function App() {
  return (
    <div className="App">
    <body>
      <Navigation />
      <Profile />
      <main className="container">

      <TweetList />
      <TweetForm />
      </main>
    </body>
    </div>
  );
}

export default App;
