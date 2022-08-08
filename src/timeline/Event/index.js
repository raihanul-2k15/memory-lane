import * as Engine from 'short-night';
import EventBody from './EventBody';
import EventAxis from './EventAxis';
import EventMark from './EventMark';

export default class Event extends Engine.Event {
    theme = 'polar-day';

    bodyConstructor = EventBody;
    axisConstructor = EventAxis;
    markConstructor = EventMark;

}
