import Player from './Player.jsx'
import players from './players'

function PlayersList() {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '0.5rem 1rem 2rem',
      }}
    >
      {players.map((player) => (
        <Player key={player.name} name={player.name} team={player.team} nationality={player.nationality} jerseyNumber={player.jerseyNumber} age={player.age} imageUrl={player.imageUrl} />
      ))}
    </section>
  )
}

export default PlayersList
