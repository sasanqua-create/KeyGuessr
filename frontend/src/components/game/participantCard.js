const ParticipantCard = ({ participant }) => {
  console.log(participant)
  return (
    <div className="avatar">
      <div className="rounded-full max-w-12">
        <img src={participant.photoURL} />
      </div>
    </div>
  )
}

export default ParticipantCard
