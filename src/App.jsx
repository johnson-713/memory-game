import { useEffect, useState } from "react";
import "./App.css";
import { cardImages } from "./data";
import { Card } from "./Card";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

      setCards(shuffledCards)
      setTurns(0)
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    console.log(card)
  }

  useEffect(() => {
    if(choiceOne && choiceTwo) {
      if(choiceOne.img === choiceTwo.img){
        console.log('those cards matched')
        resetTurn()
      } else {
        console.log('those cards do not matched')
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prev => prev + 1)
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Memory Magic</h1>
      <button onClick={() => shuffleCards()}>New Game</button>

      <div className="card-grid">
        {
          cards?.map(card => (
            <Card key={card.id} card={card} handleChoice={handleChoice} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
