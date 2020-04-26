/*var h = document.createElement('h1');
var myValue = document.createTextNode('Hi I am sid')

h.appendChild(myValue)
document.querySelector('h1').appendChild(h);*/

/*var val = 5;
while(val > 0){
	console.log(val);
	val--;
}*/

var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var removeAllButton = document.getElementById('removeall');
removeAllButton.addEventListener('click', removeAllItem);



function addItem(){
	var input = document.getElementById('input');
	var item = input.value;
	ul = document.getElementById('list');
	var textNode = document.createTextNode(item);

	if (item === '') {
		
		const myNewPara = document.createElement('p');
		myNewPara.textContent = "Enter Your Todo"
		document.querySelector('#container').appendChild(myNewPara)
	}
	else{
		//create list
		li = document.createElement('li');
		//create checkbox
		var checkbox = document.createElement('input');
		checkbox.type='checkbox';
		checkbox.setAttribute('id', 'check');
		//create label
		var label = document.createElement('label');
		label.setAttribute('for', 'item') 

		//add these on webpage
		ul.appendChild(label);
		li.appendChild(checkbox);
		label.appendChild(textNode);
		li.appendChild(label);
		ul.insertBefore(li, ul.childNodes[0]);
		input.value = '';

		setTimeout(() => {
			li.className = 'visual';
		}, 100);

	}
}

function removeItem(){
	li = ul.children
	for(let index = 0; index < li.length; index++){
		while(li[index] && li[index].children[0].checked){
			ul.removeChild(li[index])
		}
	}

}


function removeAllItem(){
	li = ul.children
	for(let index = 0; index < li.length; index++){
		while(li[index]){
			ul.removeChild(li[index])
		}
	}
}