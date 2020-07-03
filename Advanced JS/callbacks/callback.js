function addDiv(name) {
  let div = document.createElement('div')
  div.innerText = name
  document.querySelector('body').appendChild(div)
}

setTimeout(() => {
	addDiv('unu')
	setTimeout(() => {
    addDiv('doi')
	}, 2000)
}, 3000)

