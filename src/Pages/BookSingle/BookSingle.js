import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BookSingleBottomBox, BookSingleBottomBoxInner, BookSingleContainer, BookSingleDesc, BookSingleImg, BookSingleInfoBox, BookSingleInfoMiniBox, BookSingleInfoMiniText, BookSingleInfoMiniTitle, BookSingleInner, BookSingleLine, BookSingleLineBox, BookSingleLineTitle, BookSingleLink, BookSingleList, BookSingleText, BookSingleTitle } from "./BookSingle.style";
import { BookCard } from "../../components/BookCard/BookCard";
import { language } from "../../Lang/Lang";
// import { useTranslation } from 'react-i18next';

export const BookSingle = () => {
    // const {t} = useTranslation()
    const {lang} = useSelector((state) => state.lang)
    const {bookId} = useParams();
    const {token} = useSelector((state) => state.token);
    const [book, setBook] = useState({})
    const [authorBooks, setAuthorBooks] = useState([])

    useEffect(() => {
        if(bookId !== undefined){
            axios.get(`http://localhost:5000/book/bookId/${bookId}`, {
                headers: {
                    "Authorization": `${token}` 
                }
            }).then(data => {
                setBook(data.data)
                console.log(data.data);
            }).catch(err => console.log(err))
        }
    }, [bookId])

    useEffect(() => {
        if(book.author_id !== undefined){
            axios.get(`http://localhost:5000/author/books/${book.author_id}`, {
                headers: {
                    "Authorization": `${token}` 
                }
            }).then(data => {
                console.log(data);
                setAuthorBooks(data.data)
            }).catch(err => console.log(err))
        }
    }, [book])
    return <>
        <BookSingleContainer className="container">
            <BookSingleInner>
                <BookSingleImg src={book.image ? `http://localhost:5000/${book.image}` : ""}/>

                <BookSingleInfoBox>
                    <BookSingleTitle>
                        {book.title}
                    </BookSingleTitle>
                    <BookSingleInfoMiniBox>
                        <BookSingleInfoMiniText>Sahifalar soni:</BookSingleInfoMiniText>

                        <BookSingleInfoMiniTitle>{book.page} page</BookSingleInfoMiniTitle>
                    </BookSingleInfoMiniBox>
                    <BookSingleInfoMiniBox>
                        <BookSingleInfoMiniText>Chop etilgan:</BookSingleInfoMiniText>

                        <BookSingleInfoMiniTitle>{book.year} years</BookSingleInfoMiniTitle>
                    </BookSingleInfoMiniBox>
                    <BookSingleInfoMiniBox>
                        <BookSingleInfoMiniText>Kitob narxi:</BookSingleInfoMiniText>

                        <BookSingleInfoMiniTitle>${book.price}</BookSingleInfoMiniTitle>
                    </BookSingleInfoMiniBox>

                    <BookSingleLineBox>
                        <BookSingleLineTitle>
                            To’liq ma’lumot
                        </BookSingleLineTitle>
                        <BookSingleLine></BookSingleLine>
                    </BookSingleLineBox>
                    
                    <BookSingleDesc>
                        {book.description}
                    </BookSingleDesc>
                </BookSingleInfoBox>
            </BookSingleInner>

            <BookSingleBottomBox>
                <BookSingleBottomBoxInner>
                    <BookSingleText>
                        {/* {t("bookSingle.text")} */}
                        {language[lang].bookSingle.text}
                    </BookSingleText>

                    <BookSingleLink to="/books">
                        {/* {t("bookSingle.link")} */}
                        {language[lang].bookSingle.link}
                    </BookSingleLink>
                </BookSingleBottomBoxInner>

                <BookSingleList>
                    {authorBooks.map((item, i) => <BookCard key={i} obj={item} single={true}/>)}
                </BookSingleList>
            </BookSingleBottomBox>
        </BookSingleContainer>
    </>
}
