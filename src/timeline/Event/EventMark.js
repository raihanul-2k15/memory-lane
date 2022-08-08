import * as Engine from 'short-night';

export default class EventMark extends Engine.EventMark {
    theme = 'polar-day';

    draw() {
        const ctx = this.canvas.getContext('2d');
        /** @todo remove below */
        //const box = this.drawInfo.box;

        ctx.beginPath();
        ctx.fillStyle = '#ffff00';
        ctx.arc(this.drawInfo.target.x, this.drawInfo.target.y, this.drawInfo.width / 2, 0, 2 * Math.PI);
        ctx.fill();

        return super.draw();
    }
}
