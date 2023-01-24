import axios from "axios"
import { useEffect, useState } from "react"
import { useRef } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { language } from "../../Lang/Lang"
import { BookCard } from "../BookCard/BookCard"
import { Genres } from "../Genres/Genres"
import { Hero } from "../Hero/Hero"
import { Search } from "../Search/Search"
import { BookEmptyText, BookList, BooksContainer, BooksSectionTeg } from "./BooksSection.style"
// import { useTranslation } from 'react-i18next';
export const BooksSection = () => {
    const {lang} = useSelector((state) => state.lang)
    // const {t} = useTranslation()
    const state = useSelector((state) => state.token);
    const navigate = useNavigate()
    const [books, setBooks] = useState([])
    const bookSearchRef = useRef()
    const hendelSubmit = () => {
        if(bookSearchRef.current.value !== ""){
            navigate(`/books/${bookSearchRef.current.value}`)
        }
        else{
            navigate(`/books/1`)
        }
    }
    const {search} = useParams()

    useEffect(() => {
        if(Number(search)){
            axios.get(`http://localhost:5000/book/genreId/${search}`, {
                headers:{
                    "Authorization": state.token
                }
            }).then(data => {
                setBooks(data.data)
            }).catch(err => console.log(err))
        }
        else if(search){
            axios.get(`http://localhost:5000/book/search?book=${search}`, {
                headers:{
                    "Authorization": state.token
                }
            }).then(data => {
                setBooks(data.data)
            }).catch(err => console.log(err))
        }
    }, [search])

    const debounce = (delay) => {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(check, delay)
        }
    }

    const check = () => {
        if(bookSearchRef.current.value !== ""){
            navigate(`/books/${bookSearchRef.current.value}`)
        }
        else{
            navigate(`/books/1`)
        }
    }

    return <>
    
        <Hero />
        <BooksSectionTeg>
            <BooksContainer className="container">
                <Search inputRef={bookSearchRef} debounce={debounce} hendelSubmit={hendelSubmit}/>
                <Genres defoultUrl="books"/>

                <BookList>
                    {books.length ? books.map((item, i) => (
                        <BookCard key={i} obj={item} single={false}></BookCard>
                    )) : <BookEmptyText>
                        {/* {t("emtyTitle.title")} */}
                        {language[lang].emtyTitle.title}
                        </BookEmptyText>}
                </BookList>
            </BooksContainer>
        </BooksSectionTeg>
    </>
}