import * as Engine from 'short-night';
import AxisBody from './AxisBody';
import AxisMilestone from './AxisMilestone';
import AxisScale from './AxisScale';

export default class Axis extends Engine.Axis {
    theme = 'colors';

    bodyConstructor = AxisBody;
    milestoneConstructor = AxisMilestone;
    scaleConstructor = AxisScale;

}
