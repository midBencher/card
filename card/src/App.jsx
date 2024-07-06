import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
     try{
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
     }

    
      catch(error){
console.error("Error")
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default App;
