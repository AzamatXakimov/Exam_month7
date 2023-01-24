import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GenresInner, GenresItem, GenresList, GenresNav, GenresNavLink, GenresTitle } from "./Genres.style"
// import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux/es/exports"
import { language } from "../../Lang/Lang"
export const Genres = ({defoultUrl}) => {
    const {lang} = useSelector((state) => state.lang)
    const [genres, setGenres] = useState([]) 
    const navigate = useNavigate()
    const {search} = useParams()
    useEffect(() => {
        axios.get("http://localhost:5000/genre").then(data => {
            setGenres(data.data)
            console.log(data.data);
            if(!search){
                navigate(""+data.data[0].id)
            }
        }).catch(err => console.log(err))
    }, [])
    // const {t} = useTranslation()
    return <>
        <GenresInner>
            <GenresTitle>
                {/* {t("ganres.title")} */}
                {language[lang].ganres.title}
            </GenresTitle>

            <GenresNav>
                <GenresList>
                    {genres.map((item, i) => (
                        <GenresItem key={i}>
                            <GenresNavLink to={`/${defoultUrl}/`+item.id} >
                                {item.name}
                            </GenresNavLink>
                        </GenresItem>
                    ))}
                </GenresList>
            </GenresNav>
        </GenresInner>
    </>
}