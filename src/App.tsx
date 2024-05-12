import { ListGroup } from "./components/ListGroup";
import { useState } from "react";
import { Button } from "./components/button";
import { Alert } from "./components/alert";
import { Search } from "./components/search";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  let items = ["Nothing","More Nothing","Even More Nothing","Nearly Infinite Nothing","The Void Itself",];

  let nothings = ["NOTHING","MORE Nothing","EVEN MMMMORREEEEE Nothing","NNNNOOOOOOOOOOOothing","0",];

  let smoothzebras = ["Relatively Smooth Zebra","Smooth Zebra","Smoother Zebra","Smoothest Zebra","Sphere",];

  return (
    <div className="container text-center">
      <div className="row">
      {alertVisible && (<Alert onClose={() => setAlertVisibility(false)}>IM SO LOST</Alert>)}
      </div>

      <div className="row justify-content-md-center">
          <Button color="secondary " onClick={() => setAlertVisibility(true)}>|\0|</Button>
      </div>

      <div className="row justify-content-md-center">
        <div className="col">
          <ListGroup items={items} heading="Nothing" onSelectItem={handleSelectItem}/>
        </div>
        <div className="col">
          <ListGroup items={nothings} heading="Second Nothing" onSelectItem={handleSelectItem}/>
        </div>
        <div className="col">
          <ListGroup items={smoothzebras} heading="Smooth Zebras" onSelectItem={handleSelectItem}/>
        </div>
      </div>

      <hr/>

      <div className="row">
        <Search/>
      </div>

    </div>
  );
}
export default App;
