import Book from "./Book";
import book from "./Book";
let book1 =new Book("Demon slayer","Koyoharu Gotouge",true)
let book2= new Book("naruto","Masashi Kishimoto",false)
let books:Book[]=[]

books.push(book1,book2)
// for (let i = 0; i < books.length; i++) {
//
//     if(books[i].alreadyRead){
//         console.log(` you already read ${info}`)
//     }else {
//         console.log(`you still need to read this book ${info}`)
//     }
// }
books.forEach((ele)=>{
    let info= `${ele.title} by ${ele.author}`
    if (ele.alreadyRead){
        console.log(`you already read ${info}`)
    }else {
        console.log(`you still need read this ${info}`)
    }
})
