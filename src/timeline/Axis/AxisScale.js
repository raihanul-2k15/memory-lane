import * as Engine from 'short-night';

export default class AxisScale extends Engine.AxisScale {
    theme = 'polar-day';

    draw() {
        const ctx = this.canvas.getContext('2d');
        const box = this.drawInfo.box;

        ctx.beginPath();
        ctx.fillStyle = '#ffff00';
        ctx.fillRect(box.x - box.width / 2, box.y, box.width * 2, box.height);

        return super.draw();
    }
}
