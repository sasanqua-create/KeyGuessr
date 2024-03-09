import ParticipantCard from './participantCard'

const Participants = ({ participantlist }) => {
  const columnWidth = `${Math.max(100 / participantlist.length, 20)}%`

  return (
    <div className="flex flex-wrap">
      {participantlist.map((participant, index) => (
        <div key={index} className="ml-3">
          <ParticipantCard participant={participant} />
        </div>
      ))}
    </div>
  )
}

export default Participants
