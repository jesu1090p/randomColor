const colors = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ]

const btn = document.getElementById('btn');
const color = document.getElementById('color-code');
const mensaje = document.getElementById('paragraph');

btn.addEventListener("click", function () {
	let newColor = "#";
	for (var i = 0; i < 6; i++) {
		newColor +=  colors[Math.floor(Math.random()*colors.length)];
	}
		color.style.color = newColor;
		paragraph.innerHTML = `<p>The new color is 😮<br><code style='color:${newColor}'>${newColor}<code></p>`;
		document.getElementById("body").style.backgroundColor = newColor;
    btn.style.color = newColor;

});
