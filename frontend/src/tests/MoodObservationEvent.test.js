import { shallow, configure } from 'enzyme'
import MoodObservationEvent from '../components/MoodObservationEvent';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });

test ("set props for MoodObservationEvent", () => {
    const props = {
        "event" : {
            "id":"01f547a3-7eb1-48f0-86d2-ddc996abd617",
            "event_type":"mood_observation",
            "visit_id":"2ddc77cd-521f-11e9-b63f-06a80bfbb33e",
            "timestamp":"2019-05-10T12:27:21+01:00",
            "caregiver_id":"5ca42f72-9e70-4b8d-b8be-da5ed779b586",
            "care_recipient_id":"df50cac5-293c-490d-a06c-ee26796f850d",
            "mood":"okay"
        }
    }
    const wrapper = shallow(<MoodObservationEvent {...props}/>)
    expect(wrapper.contains([
        <td>01f547a3-7eb1-48f0-86d2-ddc996abd617</td>,
        <td>mood_observation</td>,
        <td>2ddc77cd-521f-11e9-b63f-06a80bfbb33e</td>,
        <td>2019-05-10T12:27:21+01:00</td>,
        <td>5ca42f72-9e70-4b8d-b8be-da5ed779b586</td>,
        <td>df50cac5-293c-490d-a06c-ee26796f850d</td>,
        <td>okay</td>
    ])).toEqual(true);
});