// confetti.js
function startConfetti() {
    var canvas = document.getElementById('confetti');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext('2d');
    var confettis = [];

    for (let i = 0; i < 300; i++) {
        confettis.push(createConfetti());
    }

    function createConfetti() {
        var colors = ['#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845'];
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: (Math.random() * 6) + 1,
            d: (Math.random() * 25) + 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.floor(Math.random() * 10) - 10
        };
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettis.forEach(function (t, i) {
            ctx.beginPath();
            ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2, false);
            ctx.fillStyle = t.color;
            ctx.fill();
            t.y += Math.cos(t.d) + 1 + t.r / 2;
            t.x += Math.sin(0) - 0.5;
            if (t.y > canvas.height) {
                confettis[i] = createConfetti();
            }
        });
        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}
