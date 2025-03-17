import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";


function App() {

  // const cities = ['New York', 'Paris' , 'London' , 'Tehran' , 'Thunder Bay']

  // const handleSelectItem = (item : string) => {
  //   console.log('item >' , item );
  // }


  // return <div> <ListGroup title='Cities' items={cities} onSelectItem={handleSelectItem}/> </div>

  const [ show , setShow] = useState(false);

  const handleButtonClick = () => {
    setShow(true);
  }

  

  return <div>
          {
            show &&
            <Alert onDismissed={ () => { setShow(false) }}>
              This is a content test <span> on more wider issue</span>.
            </Alert>
          } 

          <Button onClick={handleButtonClick} color='danger'> Check this out </Button>
        
        </div>

}


export default App;