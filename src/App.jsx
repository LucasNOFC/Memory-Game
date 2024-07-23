import './App.css'
import Game from './Components/Game/Game'
import assets from './Assets/Json/cardgames.json';

function App() {
  
  let randomNumbers = [];

  const getFullyRandomNumber = () => {
    let number = 0;
    while (randomNumbers.length < Object.values(assets).length){
      number = Math.ceil(Math.random() * 8);
      if (!randomNumbers.includes(number)) randomNumbers.push(number);
    }
    return randomNumbers;
  }



  const getFullyRandomObject = () => {
    let randomlyAssetsData = {}

    for (let i = 0; i < randomNumbers.length; i++) {
      randomlyAssetsData[Object.keys(assets)[randomNumbers[i]]] = Object.values(assets)[randomNumbers[i - 1]]
    }

    console.log(randomlyAssetsData);
  }

  randomNumbers = getFullyRandomNumber()
  console.log(randomNumbers);
  getFullyRandomObject();

  return (
    <div className='main'>
      <Game assetsCard={assets}/>
      <Game assetsCard={assets}/>
    </div>
  )
}

export default App
