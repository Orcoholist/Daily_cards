const draggable = document.querySelector('.draggable')
const boxes = document.querySelectorAll('.box')

draggable.addEventListener('dragstart', dragStart)
draggable.addEventListener('dragend', dragEnd)

boxes.forEach((box) => {
	box.addEventListener('dragover', dragOver)
	box.addEventListener('drop', dragDrop)
})

function dragStart() {
	this.classList.add('dragging')
}

function dragEnd() {
	this.classList.remove('dragging')
}

function dragOver(e) {
	// добавляем функцию предотвращения по умолчанию, потому что по умолчанию перетаскивание внутри элемента будет отключено => для большей ясности посмотрите на указатель мыши, когда он закончился
	e.preventDefault()
	this.appendChild(draggable)
}

function dragDrop() {
	this.appendChild(draggable)
}