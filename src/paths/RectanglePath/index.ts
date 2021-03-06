/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

import Rectangle, { BasicRectangle } from 'geometry/Rectangle';
import { FillStrokeShadowStyles, FSSa, FillStrokeShadowStylesParams } from 'style/factoryFunctions';

export default class RectanglePath {
  shape: Rectangle;
  style: FillStrokeShadowStyles;

  constructor(rectangle: BasicRectangle, style: FillStrokeShadowStylesParams) {
    this.shape = new Rectangle(rectangle);
    this.style = FSSa(style);
  }

  Draw(ctx: CanvasRenderingContext2D): this {
    const { x, y, width, height } = this.shape;
    const { fill, stroke, shadow } = this.style;

    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.closePath();

    shadow.Apply(ctx);
    fill.Apply(ctx);
    stroke.Apply(ctx);

    return this;
  }
}
