import InputForm from './components/InputForm';
import { draw } from './timeline';
import initialEvents from './initialEvents';

function drawTimeline(events) {
    draw('#timeline', events);
}

function App() {
    return (
        <div className="app w-100 vh-100 px-5 py-1 d-flex">
            <InputForm
                initialEvents={initialEvents}
                className="w-25 h-100"
                onSubmit={({ events }) => drawTimeline(events)}
            />
            <div className="w-75 h-100" style={{ overflowY: 'scroll' }} id="timeline"></div>
        </div>
    );
}

export default App;
