import './App.css'
import Game from './Components/Game/Game'
import assets from './Assets/Json/cardgames.json';

function App() {

  const getFullyRandomNumber = () => {
    let randomNumbers = []
    let number = 0;
    const max = Object.keys(assets).length;
    while (randomNumbers.length < max){
      number = Math.floor(Math.random() * max);
      if (!randomNumbers.includes(number)) randomNumbers.push(number);
    }
    return randomNumbers;
  }

  const getFullyRandomObject = () => {
    let randomlyAssetsData = {}
    let i = 0;
    let newRandomNumbers = getFullyRandomNumber();

    for (i = 0; i < Object.keys(assets).length; ++i) {
      randomlyAssetsData[Object.keys(assets)[newRandomNumbers[i]]] = Object.values(assets)[newRandomNumbers[i]]
    }
    return randomlyAssetsData;
  }

  const boardGame01 = getFullyRandomObject();
  const boardGame02 = getFullyRandomObject();

  return (
    <div className='main'>
      <Game assetsCard={boardGame01}/>
      <Game assetsCard={boardGame02}/>
    </div>
  )
}

export default App
