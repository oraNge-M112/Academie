let myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('promise kept!')
	}, 2000)
})

myPromise.then((result) => alert(result).catch((error) => alert(error)))
