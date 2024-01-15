(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = screen.availWidth;
    canvas.height = screen.availHeight;
    var str = 'qxchuckle0101010101'.split('');
    var arr = Array(Math.ceil(canvas.width / 10)).fill(0);
    var rain = function rain() {
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0f0';
      arr.forEach(function (item, index) {
        if (Math.random() > 0.2) {
          var text = str[Math.floor(Math.random() * str.length)];
          ctx.fillText(text, index * 10, item);
        }
        arr[index] = item > canvas.height || item > Math.random() * canvas.height * (canvas.height > 1000 ? 20 : 10) ? 0 : item + 10;
      });
    };
    var stv = setInterval(rain, 40);
    window.addEventListener('resize', function () {
      clearInterval(stv);
      canvas.width = screen.availWidth;
      canvas.height = screen.availHeight;
      stv = setInterval(rain, 40);
    });

}));
