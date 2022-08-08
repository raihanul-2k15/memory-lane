import * as Engine from 'short-night';

export default class AxisMilestone extends Engine.AxisMilestone {
    theme = 'polar-day';

    draw() {
        const ctx = this.canvas.getContext('2d');
        const box = this.drawInfo.box;

        ctx.beginPath();
        ctx.fillStyle = '#999999';
        ctx.fillRect(box.x, box.y, box.width, box.height);

        return super.draw();
    }
}
