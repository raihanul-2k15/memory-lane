import * as Engine from 'short-night';

export default class EventBody extends Engine.EventBody {
    theme = 'polar-day';

    draw() {
        const ctx = this.canvas.getContext('2d');
        const box = this.drawInfo.box;

        ctx.beginPath();
        ctx.fillStyle = 'orange';
        ctx.fillRect(box.x, box.y, box.width, box.height);
        ctx.moveTo(this.drawInfo.markDrawInfo.target.x, this.drawInfo.markDrawInfo.target.y);
        ctx.lineTo(this.drawInfo.markDrawInfo.target.x - this.drawInfo.offset.x, this.drawInfo.markDrawInfo.target.y);
        ctx.stroke();

        return super.draw();
    }
}
