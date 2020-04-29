// ---------- FILTER BUTTONS ------------

filterSelection('all'); // Execute the function and show all columns
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName('column');
	if (c == 'all') c = '';
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		RemoveClass(x[i], 'show');
		if (x[i].className.indexOf(c) > -1) AddClass(x[i], 'show');
	}
}

// Show filtered elements
function AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += ' ' + arr2[i];
		}
	}
}

// Hide elements that are not selected
function RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(' ');
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById('myBtnContainer');
var btns = btnContainer.getElementsByClassName('btn2');
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function () {
		var current = document.getElementsByClassName('active');
		current[0].className = current[0].className.replace(' active', '');
		this.className += ' active';
	});
}

// ------------- AUTO FLOW GRID ITEMS ------------------

function resizeGridItem(items) {
	grid = document.getElementsByClassName('portfolio-container')[0];
	rowHeight = parseInt(
		window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
	);
	rowGap = parseInt(
		window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
	);
	rowSpan = Math.ceil(
		(items.querySelector('.content').getBoundingClientRect().height + rowGap) /
			(rowHeight + rowGap)
	);
	items.style.gridRowEnd = 'span ' + rowSpan;
}

function resizeInstance(instance) {
	item = instance.elements[0];
	resizeGridItem(item);
}

allItems = document.getElementsByClassName('column');
for (x = 0; x < allItems.length; x++) {
	imagesLoaded(allItems[x], resizeInstance);
}
function resizeAllGridItems() {
	allItems = document.getElementsByClassName('column');
	for (x = 0; x < allItems.length; x++) {
		resizeGridItem(allItems[x]);
	}
}
window.addEventListener('resize', resizeAllGridItems);
window.onload = resizeAllGridItems();
