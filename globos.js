// balloons.js
function startBalloons() {
    var canvas = document.getElementById('confetti');
    var ctx = canvas.getContext('2d');
    var balloons = [];

    for (var i = 0; i < 50; i++) {
        balloons.push(createBalloon());
    }

    function createBalloon() {
        var colors = ['#ff77a9', '#ffcc00', '#00ffcc', '#99ff99', '#cc99ff'];
        return {
            x: Math.random() * canvas.width,
            y: canvas.height + 50,
            r: (Math.random() * 20) + 10,
            speed: (Math.random() * 3) + 1,
            color: colors[Math.floor(Math.random() * colors.length)]
        };
    }

    function drawBalloons() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        balloons.forEach(function(balloon, index) {
            ctx.beginPath();
            ctx.arc(balloon.x, balloon.y, balloon.r, 0, Math.PI * 2, false);
            ctx.fillStyle = balloon.color;
            ctx.fill();
            balloon.y -= balloon.speed;
            if (balloon.y < -50) {
                balloons[index] = createBalloon();
            }
        });
        requestAnimationFrame(drawBalloons);
    }

    drawBalloons();
}
