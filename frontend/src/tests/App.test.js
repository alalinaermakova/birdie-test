import { shallow, configure } from 'enzyme'
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });

test('renders table header rows', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.contains([
    <th>ID</th>,
    <th>Event type</th>,
    <th>Visit id</th>,
    <th>Time stamp</th>,
    <th>Care giver id</th>,
    <th>Care recipient id</th>,
    <th>Mood</th>
  ])).toEqual(true);
});