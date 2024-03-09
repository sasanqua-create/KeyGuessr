import ParticipantCard from "./participantCard";

const Participants = ({ participantlist }) => {
    return (
        <>
            {participantlist.map((participant, index) => (
                <ParticipantCard key={index} participant={participant} />
            ))}
        </>
    )
}

export default Participants;