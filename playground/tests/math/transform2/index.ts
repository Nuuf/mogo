/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

import { Transform2 } from 'math';

export default function (container: HTMLDivElement): void {
  container.appendChild(document.createElement('canvas'));
  const transform = new Transform2(0, 0);

  console.log(transform);
}
