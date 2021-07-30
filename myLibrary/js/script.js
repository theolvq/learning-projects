const submitBtn = document.querySelector('.submit-btn')
const addBtn = document.querySelector('.add-btn')
const deleteBtn = document.querySelectorAll('.delete')
const overlay = document.querySelector('#overlay')
const form = document.querySelector('#form')
const confirmation = document.querySelector('#confirmation')

let myLibrary = []
// let myLibrarySerialized = JSON.stringify(myLibrary)
// let myLibraryDeserialized = JSON.parse(localStorage.getItem('myLibrary'))

class Book {
	constructor(title, author, pages, status) {
		this.title = title
		this.author = author
		this.pages = pages
		this.status = status
	}
	toggleStatus() {
		if (this.status) {
			this.status = false
		} else {
			this.status = true
		}
	}
}

const getMyLibrary = () => {
	return JSON.parse(localStorage.getItem('myLibrary'))
}

const setMyLibrary = () => {
	return localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}

if (localStorage.getItem('myLibrary') === null) {
	setMyLibrary()
}

const addToLibrary = () => {
	const bookTitle = document.querySelector('input[name="title"]').value
	const bookAuthor = document.querySelector('input[name="author"]').value
	const bookPages = document.querySelector('input[name="pages"]').value
	const bookStatus = document.querySelector('input[name="read-status"]')
		.checked
	myLibrary = getMyLibrary()
	myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookStatus))
	setMyLibrary()
	confirmation.innerText = 'Book Added!'
	setTimeout(() => {
		confirmation.innerText = ''
	}, 3000)
}

const openForm = () => {
	overlay.classList.remove('overlay-hidden')
	overlay.classList.add('overlay')
}

const escapeOverlay = e => {
	if (e.target === overlay && !overlay.classList.contains('hidden')) {
		overlay.classList.remove('overlay')
		overlay.classList.add('overlay-hidden')
	} else if (e.target === submitBtn) {
		e.preventDefault()
		overlay.classList.remove('overlay')
		overlay.classList.add('overlay-hidden')
	}
}

const createBook = () => {
	myLibrary = getMyLibrary()
	const currentBook = myLibrary[myLibrary.length - 1]
	const card = document.createElement('div')
	card.classList.add('card')
	const libraryContainer = document.querySelector('.library-container')
	libraryContainer.appendChild(card)
	card.setAttribute('data-index', myLibrary.indexOf(currentBook))
	card.innerHTML = `<h3 class="card-title">${currentBook.title}</h3>
	<h3 class="card-author">${currentBook.author}</h3>
	<h3 class="card-pages">${currentBook.pages}</h3>
	<input id="read" type="checkbox" ${currentBook.status ? 'checked' : undefined}>
	<div class="slider round"></div>
	<button class="delete-btn btn">Delete</button>
	`
}

const populateLibrary = () => {
	myLibrary = getMyLibrary()
	myLibrary.forEach(book => {
		const card = document.createElement('div')
		const libraryContainer = document.querySelector('.library-container')
		libraryContainer.appendChild(card)
		card.classList.add('card')
		card.setAttribute('data-index', myLibrary.indexOf(book))
		card.innerHTML = `<h3 class="card-title">${book.title}</h3>
		<h3 class="card-author">${book.author}</h3>
		<h3 class="card-pages">${book.pages}</h3>
		<input id="read" type="checkbox" ${book.status ? 'checked' : undefined}>
		<div class="slider round"></div>
		<button class="delete-btn btn">Delete</button>`
	})
}

const removeBook = e => {
	myLibrary = getMyLibrary()
	if (e.target.classList.contains('delete-btn')) {
		let index = e.target.parentElement.dataset.index
		myLibrary.splice(index, 1)
		e.target.parentElement.remove()
		setMyLibrary()
	}
}

window.addEventListener('load', populateLibrary)
window.addEventListener('click', removeBook)
addBtn.addEventListener('click', openForm)
overlay.addEventListener('click', escapeOverlay)
submitBtn.addEventListener('click', () => {
	addToLibrary()
	escapeOverlay(submitBtn)
	createBook()
})
