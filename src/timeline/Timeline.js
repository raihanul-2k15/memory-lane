import * as Engine from 'short-night';
import Axis from './Axis';
import Event from './Event';

export default class Timeline extends Engine.Timeline {
    theme = 'polar-day';

    axisConstructor = Axis;
    eventConstructor = Event;
}
