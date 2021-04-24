import './App.css';
import MissedArticle from './MissedArticle';
import YourArticle from './YourArticle';
function App() {
  return (
  <div className="App">
    <h1 align="center">For You</h1>
    <div class="flex-container-yourArticle">
      <YourArticle/>
    </div>
    
    <h2>In case you missed it</h2>
    <div class=".flex-container-missedArticles">
      <MissedArticle />
    </div>
    
  </div>
  );
 }

export default App;

