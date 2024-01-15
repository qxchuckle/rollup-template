import './index.css'

let canvas: HTMLCanvasElement = document.querySelector('#canvas')!;
let ctx = canvas.getContext('2d')!;
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

let str: string[] = 'qxchuckle0101010101'.split('');
let arr = Array(Math.ceil(canvas.width / 10)).fill(0);

const rain = () => {
  // 不断的在绘制矩形，没有清除上一次画布，矩形是叠加起来的半透明的，所以背景越来越黑，文字越来越谈，感觉像渐变
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0f0';
  arr.forEach((item, index) => {
    if (Math.random() > 0.2) { // 控制字符显示的概率
      const text = str[Math.floor(Math.random() * str.length)]; // 随机获取一个文字
      ctx.fillText(text, index * 10, item); // 间隔10px绘制文字
    }
    // 文字到底部或者大于一个随机数则重置到顶部
    arr[index] = item > canvas.height || item > Math.random() * canvas.height * (canvas.height > 1000 ? 20 : 10) ? 0 : item + 10
  });
};

let stv = setInterval(rain, 40);
window.addEventListener('resize', () => {
  clearInterval(stv);
  canvas.width = screen.availWidth;
  canvas.height = screen.availHeight;
  stv = setInterval(rain, 40);
});

