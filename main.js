function checkChance() {
	let jobData = Math.random() * 100;
	jobData = Math.floor(jobData);
	document.getElementById('jobvalue').value = jobData + '%';
}
