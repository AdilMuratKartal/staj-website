function drawMultiDoughnutChart(canvasId, dataSets, lightColors, strokeColor) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const maxRadius = canvas.width / 2;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const layerCount = dataSets.length;
    let layerRadiusStep = maxRadius / (layerCount + 1);
    let innerCircleRadius; 
    
    let animationProgress = 0; // Başlangıçta animasyon tamamlanmamış
    const animationSpeed = 0.0067; // Daha pürüzsüz animasyon için daha küçük hız

    function easeOut(t) {
        return 1 - Math.pow(1 - t, 3); // Daha yumuşak bir animasyon eğrisi
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let easedProgress = easeOut(animationProgress);

        for (let layer = 0; layer < layerCount; layer++) {
            let radius = maxRadius - layer * layerRadiusStep;
            let cutoutRadius = radius * 0.5;
            let startAngle = 0;
    
            for (let i = 0; i < dataSets[layer].length; i++) {
                const sliceAngle = (dataSets[layer][i] / 100) * 2 * Math.PI * easedProgress;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY); 
                ctx.lineWidth = 10;
                ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
                ctx.lineTo(centerX, centerY);
                ctx.fillStyle = lightColors[layer][i];
                ctx.fill();
                ctx.stroke();
                startAngle += sliceAngle;
                ctx.closePath();
            }
    
            ctx.beginPath();
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 20;
            ctx.arc(centerX, centerY, cutoutRadius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = strokeColor;
            ctx.fill();           
        }
        
        let innerCircleRadius = (maxRadius - layerRadiusStep) * easedProgress;
        //innerCircle
        ctx.beginPath()
        ctx.arc(centerX, centerY, innerCircleRadius, 0 , 2 * Math.PI);
        ctx.lineTo(centerX, centerY);
        ctx.fillStyle = "#4e4c4d";
        ctx.fill();
        //innerCircle

        // **Animasyonlu Yazıyı İç Çembere Ekleme**
        let animatedNumber = Math.floor(easedProgress * 100); // 0'dan 100'e artacak
        ctx.fillStyle = `rgba(255, 255, 255, ${easedProgress})`; // Opaklık da artırılıyor
        ctx.font = `${Math.floor(30 * easedProgress)}px Arial`; // Font boyutu büyüyor
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText('%' + animatedNumber, centerX, centerY);
    
        if (animationProgress < 1) {
            animationProgress += animationSpeed;
            requestAnimationFrame(animate);
        }else if (animationProgress >= 1) {
            animationProgress = 1; // Fazla ilerlemeyi önle
        }

    }
    
    animate();
}

var canvas = document.getElementById('doughnutChart');
canvas.height = canvas.width;

const dataSets = [
    [25, 25, 25, 25], 
];

const lightColors = [
    ['#66b3ff', '#d1dbe7', '#003366', '#7193b9'],
    ['#ff9999', '#ffcc99', '#99ff99', '#99ccff'],
    ['#660066', '#ff6699', '#ff9966', '#ffcc66'],  
];

const darkColors = [
    ['#813717',"#2f2519","#efb375",'#8e6c46'],
]

drawMultiDoughnutChart('doughnutChart', dataSets, lightColors,strokeColor);
