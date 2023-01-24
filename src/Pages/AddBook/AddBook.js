import { useSelector } from "react-redux";
import { AddBookForm,  AddBookImg,  AddBookImgBox,  AddBookImgDesc,  AddBookImgDescBox,  AddBookImgInput,  AddBookImgLable,  AddBookInoutBox,  AddBookInput,  AddBookLabel,  AddBookOption,  AddBookSelect,  AddBookTextAria,  AddBookTextBtn,  AddBookTitle,  AddBookWrapper } from "./AddBook.style";
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import axios from "axios"
import { PlusIcon } from "../../assets/images/icons/icons";
import { language } from "../../Lang/Lang";
// import { useTranslation } from 'react-i18next';
export const AddBook = () => {
    // const {t} = useTranslation()
    const {lang} = useSelector((state) => state.lang)
    const {token} = useSelector((state) => state.token)
    const navigate = useNavigate()
    const [dropImgUrl, setDropImgUrl] = useState()
    const [dropImg, setDropImg] = useState()
    const [genres, setGenres] = useState([]) 
    const [authors, setAuthors] = useState([]) 
    useEffect(() => {
        if(!token){
            navigate("/login")
        }
        else{
            axios.get("http://localhost:5000/genre").then(data => {
                setGenres(data.data)
            }).catch(err => console.log(err))
        }
    }, [token]);


    const getAuthors = (id) => {
        axios.get(`http://localhost:5000/author/genreId/${id}`).then(data => {
            setAuthors(data.data) 
        }).catch(err => console.log(err))
    } 


    let BookImageInputRef = useRef()
    const BookTitleInputRef  = useRef()
    const BookPageInputRef  = useRef()
    const BookYearInputRef = useRef()
    const BookPriceInputRef = useRef()
    const BookGenreSelectRef = useRef()
    const BookAuthorSelectRef = useRef()
    const BookDescInputRef = useRef()

    const hendelSubmit = () => {
        const forData = new FormData();
        forData.append("title", BookTitleInputRef.current.value)
        forData.append("page", BookPageInputRef.current.value)
        forData.append("year", BookYearInputRef.current.value)
        forData.append("price", BookPriceInputRef.current.value)
        forData.append("genre_id", BookGenreSelectRef.current.value)
        forData.append("author_id", BookAuthorSelectRef.current.value)
        forData.append("description", BookDescInputRef.current.value)
        forData.append("image", BookImageInputRef.current.files[0] === undefined ? dropImg : BookImageInputRef.current.files[0])

        axios.post("http://localhost:5000/book", forData ,{
            headers: {
                "Authorization": token,
            }
        }).then(data => {
            console.log(data);
            navigate("/")
        }).catch(err => console.log(err))
    }

    const hendelUnploadFile = (file) => {
        const validFileExtensions = ["image/jpeg", "image/jpg", "image/png"]
        if(validFileExtensions.includes(file.type)){
            const fileReader = new FileReader()
            fileReader.onload = () => {
                const fileUrl = fileReader.result;
                setDropImgUrl(fileUrl)
                setDropImg(file)
            }
            
            fileReader.readAsDataURL(file)
        }
    }

    return <>
        <AddBookWrapper>
            <AddBookForm onSubmit={(evt) => {
                evt.preventDefault()
                hendelSubmit()
            }}>
                <AddBookImgBox>
                    <AddBookImgLable onDragOver={(evt) => {
                        evt.preventDefault();
                    }} 
                    onDrop={(evt) => {
                        evt.preventDefault()
                        const file = evt.dataTransfer.files[0]
                        hendelUnploadFile(file)
                    }}>
                        {dropImgUrl ? <AddBookImg src={dropImgUrl}/> : <AddBookImgDescBox>
                            <PlusIcon/>
                            <AddBookImgDesc>
                                {/* {t("addBook.imgDesc")} */}
                                {language[lang].addBook.imgDesc}
                            </AddBookImgDesc>
                        </AddBookImgDescBox>}
                        <AddBookImgInput type="file" ref={BookImageInputRef} onChange={() => {
                            hendelUnploadFile(BookImageInputRef.current.files[0]);
                        }} className="visually-hidden" required={dropImg ? false : true}/>
                    </AddBookImgLable>
                </AddBookImgBox>

                <AddBookInoutBox>
                    <AddBookTitle>
                        {/* {t("addBook.title")} */}
                        {language[lang].addBook.title}
                    </AddBookTitle>

                    <AddBookInput type="text" ref={BookTitleInputRef} aria-label="Enter book title" placeholder={
                        // t("addBook.titleInput")
                        language[lang].addBook.titleInput
                    } required/>
                    <AddBookInput type="number" ref={BookPageInputRef} aria-label="Enter book page" placeholder={
                        // t("addBook.pagesInput")
                        language[lang].addBook.pagesInput
                    } required/>
                    <AddBookInput type="number" ref={BookYearInputRef} aria-label="Enter book year" placeholder={
                        // t("addBook.yearInput")
                        language[lang].addBook.yearInput
                    } required/>
                    <AddBookInput type="number" ref={BookPriceInputRef} aria-label="Enter book price" placeholder={
                        // t("addBook.priceInput")
                        language[lang].addBook.priceInput
                    } required/>
                    <AddBookLabel>
                        <AddBookSelect ref={BookGenreSelectRef} onChange={() => {
                            getAuthors(BookGenreSelectRef.current.value)
                        }} required>
                            <AddBookOption value="">
                                {/* {t("addBook.genre")} */}
                                {language[lang].addBook.genre}
                            </AddBookOption>
                            {genres.map((item, i ) => (
                                <AddBookOption key={i} value={item.id}>
                                    {item.name}
                                </AddBookOption>
                            ))}
                        </AddBookSelect>
                    </AddBookLabel>
                    <AddBookLabel>
                        <AddBookSelect ref={BookAuthorSelectRef} required>
                            <AddBookOption value="">
                            {/* {t("addBook.author")} */}
                                {language[lang].addBook.author}
                            </AddBookOption>
                            {authors.map((item, i ) => (
                                <AddBookOption key={i} value={item.id}>
                                    {item.first_name} {item.last_name}
                                </AddBookOption>
                            ))}
                        </AddBookSelect>
                    </AddBookLabel>

                    <AddBookTextAria ref={BookDescInputRef} aria-label="Enter book description" placeholder="Description" required></AddBookTextAria>

                    <AddBookTextBtn type="submit">
                        {/* {t("button.create")} */}
                        {language[lang].button.create}
                    </AddBookTextBtn>
                </AddBookInoutBox>
            </AddBookForm>
        </AddBookWrapper>
    </>
} 