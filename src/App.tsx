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
  
  const [ game , setGame ] = useState({
    id : 1,
    player : {
      name : "John"
    }
  });
  
  const [ pizza , setPizza ] = useState({
    name : 'I-Pepperony',
    toppings : ['Mushroom']
  });




  const handleButtonClick = () => {
    setShow(true);
  }

  const handleUpdatePlayer = () => {
    setGame({
      ...game,
      player : {
        ...game.player,
        name : 'aghdas'
      }
    })
  }

  const handleToppings = () => {
    setPizza({
      ...pizza,
      toppings : [
        ...pizza.toppings,
        'mozzarella cheese'
      ]
    })
  }


  const pars = (item : any) : string  => { return JSON.stringify(item) } ;


  

  return <div>
          {
            show &&
            <Alert onDismissed={ () => { setShow(false) }}>
              This is a content test <span> on more wider issue</span>.
            </Alert>
          } 

          <Button onClick={handleButtonClick} color='danger'> Check this out </Button>


          <p>
            { pars(game) }
          </p>

          <Button onClick={handleUpdatePlayer} color='primary'> Update player </Button>
          
          <p>
            { pars(pizza) }
          </p>

          <Button onClick={handleToppings} color='primary'> Update pizza </Button>

        
        </div>

}


export default App;