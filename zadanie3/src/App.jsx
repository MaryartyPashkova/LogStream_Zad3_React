import Card from './components/Card';
import './index.css'
import arr from "./data.json"

function App() {
  return (   
      <>
      <div className = "main">
     {arr.map(({ title, userId, body }) => (
          <Card userId={userId} title={title} body={body} />
        ))}
        </div>


   </>
  );
}

export default App;
