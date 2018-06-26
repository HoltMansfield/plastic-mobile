var container = document.getElementsByClassName('container')[0]
var text = document.getElementById('text')
var index = 0
var colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
  'white'
]

container.onclick = () => {
  makeItRainbow()
}

function makeItRainbow() {
  if (index === colors.length) {
    index = 0
    return
  }

  changeColor()

  setTimeout(makeItRainbow, 500)
}

function changeColor() {
  var color = colors[index]
  text.style.color = color
  index++
}