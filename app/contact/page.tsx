"use client"
import { useState } from 'react';

interface Card {
    suit: string;
    value: string
}

const GamePage = () => {

    const suits:string[] = ["♠", "♣", "♥", "♦"]
    const values:string[] = ["A", "K", "Q", "J", "2", "3", "4", "5", "6", "7","8", "9", "10"]
    const card: Card[] = []
    const [cardPlayer1, setCardPlayer1] = useState<Card | null>(null)
    const [cardPlayer2, setCardPlayer2] = useState<Card | null>(null)

    //step 1: new deck unshuffled
    const freshDeck = (suits: string[], values: string[]): Card[] => {
        suits.map(suit => (
            values.map(value => (
                card.push({suit, value})
            ))
        ))
        return card
    }
    //step 2: shuffle the deck
    const shuffledDeck = (deck: Card[]): Card[] => {
        for (let i = deck.length - 1; i >0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [deck[i], deck[j]] = [deck[j], deck[i]]
        }
        return deck
    }
    
    //step 3: draw 1 card randomly from shuffled deck for each player 1 and player 2
    const selectRandomCard = (deck: Card[]) => {
        const randomIndex = Math.floor(Math.random() * deck.length);
        return deck[randomIndex]
    }

    const handleDraw = () => {
        const newDeck = shuffledDeck(freshDeck(suits, values))
        const randomCard1 = selectRandomCard(newDeck);
        const randomCard2 = selectRandomCard(newDeck)
        setCardPlayer1(randomCard1)
        setCardPlayer2(randomCard2)
    }
    //step 4: compare the random cards of 2 players
    const compareCards = () => {}

    //step 5: if player 1 has higher card number, player 1 wins, collect both drawn cards

    //step 6: if player 2 has higher card number, player 2 wins, collect both drawn cards

    //step 7: if player 1 and player 2 has the same card number, the game is draw, each player keeps their cards
    

    return (
        <div className="flex p-4 justify-between">
            <button onClick={handleDraw} className="rounded-full border h-[3rem] w-[8rem] p-2">
                Draw a card
            </button>
          <div>
            <h4 className="my-2">Player 1</h4>
            <div className="flex gap-4">
                <div className="w-[3rem] h-[6rem] flex justify-center items-center border rounded-md text-xl bg-rose-500">{shuffledDeck(freshDeck(suits, values)).length /2}</div>
                {cardPlayer1 && (
                <div className={`w-[3rem] h-[6rem] flex justify-center items-center border rounded-md text-xl card-suit ${cardPlayer1.suit == '♠' || cardPlayer1.suit == '♣' ? 'text-slate-950' : 'text-red-600'}`} data-suit={cardPlayer1.suit}>
                {cardPlayer1.suit} {cardPlayer1.value}
                </div>
                 )}
            </div>
            </div> 
          <div>
            <h4 className="my-2">Player 2</h4>
            <div className="flex gap-4">
                <div className="w-[3rem] h-[6rem] flex justify-center items-center border rounded-md text-xl bg-purple-500">{shuffledDeck(freshDeck(suits, values)).length /2}</div>
                {cardPlayer2 && (
                <div className={`w-[3rem] h-[6rem] flex justify-center items-center border rounded-md text-xl ${cardPlayer2.suit == '♠' || cardPlayer2.suit == '♣' ? 'text-slate-950' : 'text-red-600'}`}>
                {cardPlayer2.suit} {cardPlayer2.value}
                </div>
                )}
            </div>
          </div>
          {/* the following needs changing */}
          {cardPlayer2  ? <span>Player 1 wins!</span> : <span>Player 2 wins!</span> }
          <div>
            <h4>Player 3</h4>
          </div>
          <div>
            <h4>Player 4</h4>
          </div>
        </div>
    )
}

export default GamePage