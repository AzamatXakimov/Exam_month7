import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { language } from "../../Lang/Lang"
import { AuthorCard } from "../AuthorCard/AuthorCard"
import { Genres } from "../Genres/Genres"
import { Hero } from "../Hero/Hero"
import { Search } from "../Search/Search"
import { AuthorContainer, AuthorEmptyText, AuthorList, AuthorSectionTeg } from "./AuthorSection.style"
// import { useTranslation } from 'react-i18next';
export const AuthorSection = () => {
    // const {t} = useTranslation()
    const {lang} = useSelector((state) => state.lang)
    const state = useSelector((state) => state.token)
    const [authors, setAuthors] = useState([])
    const navigate = useNavigate()
    const authorSearchRef = useRef()
    const hendelSubmit = () => {
        if(authorSearchRef.current.value !== ""){
            navigate(`/authors/${authorSearchRef.current.value}`)
        }
        else{
            navigate(`/authors/1`)
        }
    }

    const {search} = useParams()


    useEffect(() => {
        if(Number(search)){
            axios.get(`http://localhost:5000/author/genreId/${search}`, {
                headers:{
                    "Authorization": state.token
                }
            }).then(data => {
                setAuthors(data.data)
            }).catch(err => console.log(err))
        }
        else if(search){
            axios.get(`http://localhost:5000/author/search?author=${search}`, {
                headers:{
                    "Authorization": state.token
                }
            }).then(data => {
                setAuthors(data.data)
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
        if(authorSearchRef.current.value !== ""){
            navigate(`/authors/${authorSearchRef.current.value}`)
        }
        else{
            navigate(`/authors/1`)
        }
    }

    return <>
        <Hero />
        <AuthorSectionTeg>
            <AuthorContainer className="container">
                <Search inputRef={authorSearchRef} debounce={debounce} hendelSubmit={hendelSubmit}/>
                <Genres defoultUrl="authors" />

                <AuthorList>
                    {authors.length ? authors.map((item, i) => (
                        <AuthorCard key={i} obj={item}></AuthorCard>
                    )) : <AuthorEmptyText>
                        {/* {t("emtyTitle.title")} */}
                        {language[lang].emtyTitle.title}
                    </AuthorEmptyText>}

                </AuthorList>
            </AuthorContainer>
        </AuthorSectionTeg>
    </>
}