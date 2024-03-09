import ParticipantCard from "./participantCard";

const Participants = ({ participantlist }) => {
    const columnWidth = `${Math.max(100 / participantlist.length, 20)}%`;

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {participantlist.map((participant, index) => (
                <div key={index} style={{ width: columnWidth }}>
                    <ParticipantCard participant={participant} />
                </div>
            ))}
        </div>
    )
}

export default Participants;