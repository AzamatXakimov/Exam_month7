import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { AuthorSingleBottomBox, AuthorSingleBottomBoxInner, AuthorSingleContainer, AuthorSingleDesc, AuthorSingleImg, AuthorSingleInfoBox, AuthorSingleInner, AuthorSingleLink, AuthorSingleList, AuthorSingleText, AuthorSingleTitle, AuthorSingleYearBox, AuthorSingleYearDash, AuthorSingleYearDesc, AuthorSingleYearInner, AuthorSingleYearText } from "./AuthorSingle.style"

import { BookCard } from "../../components/BookCard/BookCard";
import { language } from "../../Lang/Lang";
// import { useTranslation } from 'react-i18next';

export const AuthorSingle = () => {
    // const {t} = useTranslation()
    const {lang} = useSelector((state) => state.lang)
    const {authorId} = useParams()
    const {token} = useSelector((state) => state.token);
    const [author, setAuthor] = useState({})
    const [authorBooks, setAuthorBooks] = useState([])

    useEffect(() => {
        if(authorId !== undefined){
            axios.get(`http://localhost:5000/author/authorId/${authorId}`, {
                headers: {
                    "Authorization": `${token}` 
                }
            }).then(data => {
                setAuthor(data.data)
            }).catch(err => console.log(err))
            axios.get(`http://localhost:5000/author/books/${authorId}`, {
                headers: {
                    "Authorization": `${token}` 
                }
            }).then(data => {
                setAuthorBooks(data.data)
            }).catch(err => console.log(err))
        }
    }, [])
    return <>
        <AuthorSingleContainer className="container">
            <AuthorSingleInner>
                <AuthorSingleImg src={author.image ? `http://localhost:5000/${author.image}` : ""} alt="Author Image"/>

                <AuthorSingleInfoBox>
                    <AuthorSingleTitle>
                        {author.first_name} {author.last_name}
                    </AuthorSingleTitle>
                    <AuthorSingleDesc>
                        {author.bio}
                    </AuthorSingleDesc>

                    <AuthorSingleYearBox>
                        <AuthorSingleYearInner>
                            <AuthorSingleYearDesc>
                                Tavallud sanasi
                            </AuthorSingleYearDesc>

                            <AuthorSingleYearText>
                                {author.date_of_birth}
                            </AuthorSingleYearText>
                            
                            <AuthorSingleYearDesc>
                                {author.country}
                            </AuthorSingleYearDesc>
                        </AuthorSingleYearInner>

                        <AuthorSingleYearDash>
                            -
                        </AuthorSingleYearDash>

                        <AuthorSingleYearInner>
                            <AuthorSingleYearDesc>
                                Vafot etgan sana
                            </AuthorSingleYearDesc>

                            <AuthorSingleYearText>
                                {author.date_of_death}
                            </AuthorSingleYearText>

                            <AuthorSingleYearDesc>
                                {author.country}
                            </AuthorSingleYearDesc>
                        </AuthorSingleYearInner>
                    </AuthorSingleYearBox>
                </AuthorSingleInfoBox>
            </AuthorSingleInner>

            <AuthorSingleBottomBox>
                <AuthorSingleBottomBoxInner>
                    <AuthorSingleText>
                        {/* {t("auhtorSingle.text")} */}
                        {language[lang].auhtorSingle.text}
                    </AuthorSingleText>

                    <AuthorSingleLink to="/books">
                        {/* {t("auhtorSingle.link")} */}
                        {language[lang].auhtorSingle.link}
                    </AuthorSingleLink>
                </AuthorSingleBottomBoxInner>

                <AuthorSingleList>
                    {authorBooks.map((item, i) => <BookCard key={i} obj={item} single={true}/>)}
                </AuthorSingleList>
            </AuthorSingleBottomBox>
        </AuthorSingleContainer>
    </>
}
