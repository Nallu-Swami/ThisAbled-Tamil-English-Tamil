let x = ' Hello! Note: Click on the Mic icon 👆 and Start Speak in தமிழ்(இந்தியா) Thanks!';

let y = ' Hello! Note: Click on the Mic icon 👆 and Start Speak in தமிழ்(இந்தியா) வணக்கம் Thanks! என் அருண் பெயர் தமிழ் தெரியாதா'
if (y.includes(x)) {
    y = y.replace(x, '');
}

console.log(y);
