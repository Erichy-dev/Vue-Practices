export function randomButtonColor(id: string) {
  const colorButton = document.getElementById(id);
  const color = Math.round(Math.random() * 255);
  const color1 = Math.round(Math.random() * 255);
  const color2 = Math.round(Math.random() * 255);
  colorButton.style.background = `rgb(${color}, ${color1}, ${color2})`;
}