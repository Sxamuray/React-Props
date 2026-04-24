import Card from 'react-bootstrap/Card'

function Player({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  imageUrl
}) {
  return (
    <Card
      style={{
        width: '20rem',
        borderRadius: '14px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
        margin: '1rem',
      }}
    >
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={name}
        style={{ height: '260px', objectFit: 'cover' }}
      />
      <Card.Body style={{ backgroundColor: '#f8fafc' }}>
        <Card.Title style={{ fontWeight: '700' }}>{name}</Card.Title>
        <Card.Text style={{ marginBottom: '0.4rem' }}>
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text style={{ marginBottom: '0.4rem' }}>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text style={{ marginBottom: '0.4rem' }}>
          <strong>Jersey Number:</strong> {jerseyNumber}
        </Card.Text>
        <Card.Text style={{ marginBottom: 0 }}>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

Player.propTypes = {
  name: String,
  team: String,
  nationality: String,
  jerseyNumber: Number,
  age: Number,
  imageUrl: String,
}

export default Player
