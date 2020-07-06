document.getElementById('c1').addEventListener('drop', drop)
document.getElementById('c2').addEventListener('drop', drop)

document.getElementById('c1').addEventListener('dragover', preventDefault)
document.getElementById('c2').addEventListener('dragover', preventDefault)

document.querySelector('.drag').addEventListener('dragstart', drag)

function preventDefault(event) {
	event.preventDefault()
}

function drag(event) {
  event.dataTransfer.setData('elementid', event.target.id)
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
}

function drop(event) {
  const elementid = event.dataTransfer.getData('elementid')
  event.target.appendChild(document.getElementById(elementid))
}