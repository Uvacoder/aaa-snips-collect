/* 
	Timer function: Derived from JS30 course by Wes Bos - https://javascript30.com/
*/

let bi;

const countdown_timer = (seconds) => {
	clearInterval(bi);
	const now = Date.now();
	const later = now + (seconds * 1000);
	console.log(seconds);
	
	bi = setInterval(() => {
		const timeLeft = Math.round((later - Date.now()) / 1000);
		
		if (timeLeft < 0) {
			clearInterval(bi);
			return;
		}
		
		console.log(timeLeft);
		
	}, 1000);
};
