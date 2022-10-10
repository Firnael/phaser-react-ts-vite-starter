import 'phaser'
import { useState, useEffect } from 'react'
import config from './Config/Config'
import './Assets/styles/style.css'

export default function Game() {

  const [game, setGame] = useState<Phaser.Game>({} as Phaser.Game)

  useEffect(() => {
    const game: Phaser.Game = new Phaser.Game(config)
    setGame(game)
  }, [])
  return (
    <main>
      <div id="game" />
    </main>
  )
}