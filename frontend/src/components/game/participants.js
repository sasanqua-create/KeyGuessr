import ParticipantCard from './participantCard'

const Participants = ({ participantlist }) => {
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
