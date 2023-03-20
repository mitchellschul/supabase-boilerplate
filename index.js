import { createClient } from
    "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://widktmukhmqbnxotphwt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZGt0bXVraG1xYm54b3RwaHd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0NDUzNzcsImV4cCI6MTk5MzAyMTM3N30.q5boQwgCL4hCoU7rPneWzg36s0egd_Gjkx5jHLEHp0g'
const supabase = createClient(supabaseUrl, supabaseKey)


async function getBooks() {
    let { data: Books, error } = await supabase
        .from('Books')
        .select('*')
    let bookList = document.getElementById('books');
    bookList.innerHTML = '<tr><th>Title</th><th>Author</th><th>ISBN</th><th>Descripton</th></tr>';
    for (let book of Books) {

        bookList.innerHTML += `<tr><td>${book.title}</td>
        <td> ${book.author} </td> <td> ${book.isbn} </td> <td> ${book.desc} </td></tr>`;
    }
}

window.onload = function () {
    getBooks();
}

