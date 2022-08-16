const input = document.querySelector('.input__textArea');
const output = document.querySelector('.output__text');
const noMsg = document.getElementById('noMsg')
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const notLower = new RegExp(/[^a-z ]/);

encryptButton.addEventListener('click', encryptText);
decryptButton.addEventListener('click', decryptText);

function encryptText() {
	let text = input.textContent.toLowerCase();
	let textArray = text.split('');
	let result;
	let invalid = notLower.test(text);
	
	if (invalid) {
		alert("Apenas letras minúsculas e sem acento")
	} else {
	
		for (let i = 0; i < textArray.length; i++) {
			if (textArray[i] === 'a') {
				textArray[i] = 'ai';
			} else if (textArray[i] === 'e') {
				textArray[i] = 'enter';
			} else if (textArray[i] === 'i') {
				textArray[i] = 'imes';
			} else if (textArray[i] === 'o') {
				textArray[i] = 'ober';
			} else if (textArray[i] === 'u') {
				textArray[i] = 'ufat';
			}
		}
		result = textArray.join('');
		showOutputText(result);
	}
}

function decryptText() {
	let text = input.textContent.toLowerCase();
	let result;

	let invalid = notLower.test(text);
	
	if (invalid) {
		alert("Apenas letras minúsculas e sem acento")
	} else {
		result = text.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
		showOutputText(result);
	}
}

function showOutputText(result) {
	noMsg.style.display = 'none';
	output.innerText = result;
	createCopyButton();
}

function createCopyButton() {
	const outputContainer = document.querySelector('.output__container');
	let hasCopyButton = outputContainer.contains(outputContainer.querySelector('button'));

	if (!hasCopyButton) {
		const copyButton = document.createElement('button');
		copyButton.innerHTML = 'Copiar';
		outputContainer.appendChild(copyButton);
		copyButton.setAttribute('onclick', 'copyToClipboard()');
	}
}

async function copyToClipboard() {
	await navigator.clipboard.writeText(output.innerText);
}