anime({
	targets: 'div.square',
	translateX: 250,
	duration: 3000,
	loop: true,
	direction: 'alternate',
	delay: anime.stagger(100),
})

anime({
  targets: 'path',
  duration: 2000,
  strokeDashoffset: [anime.setDashoffset, 0],
  delay: function(el, i) { return i * 250 },
  easing: 'easeInOutSine',
  loop: true,
  direction: 'alternate'
})
