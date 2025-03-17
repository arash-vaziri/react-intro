import ListGroup from "./components/ListGroup";



function App() {

  const cities = ['New York', 'Paris' , 'London' , 'Tehran' , 'Thunder Bay']


  const handleSelectItem = (item : string) => {
    console.log('item >' , item );
  }


  return <div> <ListGroup title='Cities' items={cities} onSelectItem={handleSelectItem}/> </div>


}


export default App;