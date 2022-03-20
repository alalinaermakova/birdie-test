import React from 'react';

function MoodObservationEvent(props) {
    return(
            <tr key={props.event.id}>
                <td>{props.event.id}</td>
                <td>{props.event.event_type}</td>
                <td>{props.event.visit_id}</td>
                <td>{props.event.timestamp}</td>
                <td>{props.event.caregiver_id}</td>
                <td>{props.event.care_recipient_id}</td>
                <td>{props.event.mood}</td>
            </tr>

    )
}

export default MoodObservationEvent;