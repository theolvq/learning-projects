const submitBtn = document.querySelector('.submit-btn')
const addBtn = document.querySelector('.add-btn')
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
	info() {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${
			this.status ? 'Already read!' : 'Not read yet.'
		}`
	}
}

const getMyLibrary = () => JSON.parse(localStorage.getItem('myLibrary'))

const setMyLibrary = () =>
	localStorage.setItem('myLibrary', JSON.stringify(myLibrary))

if (localStorage.getItem('myLibrary') === null) setMyLibrary()

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
	window.setTimeout((confirmation.innerText = ''), 3000)
	console.log(localStorage)
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
	const libraryContainer = document.querySelector('.library-container')
	libraryContainer.appendChild(card)
	card.classList.add('card')
	card.innerHTML = `<h3 class="card-title">${currentBook.title}</h3>
	<h3 class="card-author">${currentBook.author}</h3>
	<h3 class="card-pages">${currentBook.pages}</h3>
	<h3 class="card-read-status">${currentBook.status}</h3>`
}

addBtn.addEventListener('click', openForm)
submitBtn.addEventListener('click', () => {
	addToLibrary()
	createBook()
	escapeOverlay(submitBtn)
})
overlay.addEventListener('click', escapeOverlay)
