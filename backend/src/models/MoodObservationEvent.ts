import {RowDataPacket} from 'mysql';
import db from '../database/db';

interface MoodObservationEvent {
    id: string,
    event_type: string,
    visit_id: string,
    timestamp: string,
    caregiver_id: string;
    care_recipient_id: string;
    mood: string
}

export const findAllEvents = (callback: Function) => {
    const queryString = "SELECT * FROM events";
    db.query(queryString, (err, result) => {
        if (err) { callback(err) }
        
        const rows = <RowDataPacket[]> result;
        const events: MoodObservationEvent[] = [];
  
        rows.forEach(row => {
          const payload = JSON.parse(row.payload);
          if (payload.event_type == "mood_observation") {
            const event: MoodObservationEvent = {
              id: payload.id,
              event_type: payload.event_type,
              visit_id: payload.visit_id,
              timestamp: payload.timestamp,
              caregiver_id: payload.caregiver_id,
              care_recipient_id: payload.care_recipient_id,
              mood: payload.mood
              }
              events.push(event)
          }
        });
  
        callback(null, events);
    });
  };