import * as Engine from 'short-night';

export default class EventAxis extends Engine.EventAxis {
    theme = 'polar-day';

    draw() {
        const ctx = this.canvas.getContext('2d');

        ctx.strokeStyle = '#ffff00';
        ctx.beginPath();
        ctx.moveTo(this.drawInfo.markDrawInfo.target.x, this.drawInfo.markDrawInfo.target.y);
        ctx.lineTo(this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX, this.drawInfo.markDrawInfo.target.y);
        ctx.lineTo(
            this.drawInfo.markDrawInfo.target.x + this.drawInfo.offsetX,
            this.drawInfo.markDrawInfo.target.y - this.drawInfo.length
        );
        ctx.stroke();

        return super.draw();
    }
}
