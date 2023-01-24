import { useSelector } from "react-redux";
import { AddAuthorForm,  AddAuthorImg,  AddAuthorImgBox,  AddAuthorImgDesc,  AddAuthorImgDescBox,  AddAuthorImgInput,  AddAuthorImgLable,  AddAuthorInoutBox,  AddAuthorInput,  AddAuthorLabel,  AddAuthorOption,  AddAuthorSelect,  AddAuthorTextAria,  AddAuthorTextBtn,  AddAuthorTitle,  AddAuthorWrapper } from "./AddAuthor.style";
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import axios from "axios"
import { PlusIcon } from "../../assets/images/icons/icons";
import { language } from "../../Lang/Lang";
// import { useTranslation } from 'react-i18next';
export const AddAuthor = () => {
    // const {t} = useTranslation()
    const {lang} = useSelector((state) => state.lang)
    const {token} = useSelector((state) => state.token)
    const navigate = useNavigate()
    const [dropImgUrl, setDropImgUrl] = useState()
    const [dropImg, setDropImg] = useState()
    const [genres, setGenres] = useState([]) 
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



    let AuthorImageInputRef = useRef()
    const AuthorFirstNameInputRef = useRef()
    const AuthorLastNameInputRef = useRef()
    const AuthorBirthdayInputRef = useRef()
    const AuthorDateOfDeathInputRef = useRef()
    const AuthorCountryInputRef = useRef()
    const AuthorGenreInputRef = useRef()
    const AuthorBioInputRef = useRef()

    const hendelSubmit = () => {
        const forData = new FormData();
        forData.append("first_name", AuthorFirstNameInputRef.current.value)
        forData.append("last_name", AuthorLastNameInputRef.current.value)
        forData.append("date_of_birth", AuthorBirthdayInputRef.current.value)
        forData.append("date_of_death", AuthorDateOfDeathInputRef.current.value)
        forData.append("country", AuthorCountryInputRef.current.value)
        forData.append("genre_id", AuthorGenreInputRef.current.value)
        forData.append("bio", AuthorBioInputRef.current.value)
        forData.append("image", AuthorImageInputRef.current.files[0] === undefined ? dropImg : AuthorImageInputRef.current.files[0])

        axios.post("http://localhost:5000/author", forData ,{
            headers: {
                "Authorization": token,
            }
        }).then(data => {
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
        <AddAuthorWrapper>
            <AddAuthorForm onSubmit={(evt) => {
                evt.preventDefault()
                hendelSubmit()
            }}>
                <AddAuthorImgBox>
                    <AddAuthorImgLable onDragOver={(evt) => {
                        evt.preventDefault();
                    }} 
                    onDrop={(evt) => {
                        evt.preventDefault()
                        const file = evt.dataTransfer.files[0]
                        hendelUnploadFile(file)
                    }}>
                        {dropImgUrl ? <AddAuthorImg src={dropImgUrl}/> : <AddAuthorImgDescBox>
                            <PlusIcon/>
                            <AddAuthorImgDesc>
                                {/* {t("addauthor.imgDesc")} */}
                                {language[lang].addauthor.imgDesc}
                            </AddAuthorImgDesc>
                        </AddAuthorImgDescBox>}
                        <AddAuthorImgInput type="file" ref={AuthorImageInputRef} onChange={() => {
                            hendelUnploadFile(AuthorImageInputRef.current.files[0]);
                        }} className="visually-hidden" required={dropImg ? false : true}/>
                    </AddAuthorImgLable>
                </AddAuthorImgBox>

                <AddAuthorInoutBox>
                    <AddAuthorTitle>
                        {/* {t("addauthor.title")} */}
                        {language[lang].addauthor.title}
                    </AddAuthorTitle>

                    <AddAuthorInput type="text" ref={AuthorFirstNameInputRef} aria-label="Enter author first name" placeholder={
                        // t("addauthor.fName")
                        language[lang].addauthor.fName
                    } required/>
                    <AddAuthorInput type="text" ref={AuthorLastNameInputRef} aria-label="Enter author last name" placeholder={
                        // t("addauthor.lName")
                        language[lang].addauthor.lName
                    } required/>
                    <AddAuthorInput type="number" ref={AuthorBirthdayInputRef} aria-label="Enter author date of birth" placeholder={
                        // t("addauthor.dateOfDirth")
                        language[lang].addauthor.dateOfDirth
                    } required/>
                    <AddAuthorInput type="number" ref={AuthorDateOfDeathInputRef} aria-label="Enter author date of death" placeholder={
                        // t("addauthor.dateOfDeath")
                        language[lang].addauthor.dateOfDeath
                    } required/>
                    <AddAuthorInput type="text" ref={AuthorCountryInputRef} aria-label="Enter author country" placeholder={
                        // t("addauthor.country")
                        language[lang].addauthor.country
                    } required/>
                    <AddAuthorLabel>
                        <AddAuthorSelect ref={AuthorGenreInputRef} required>
                            <AddAuthorOption value="">
                                {/* {t("addauthor.genre")} */}
                                {language[lang].addauthor.genre}
                            </AddAuthorOption>
                            {genres.map((item, i ) => (
                                <AddAuthorOption key={i} value={item.id}>
                                    {item.name}
                                </AddAuthorOption>
                            ))}
                        </AddAuthorSelect>
                    </AddAuthorLabel>

                    <AddAuthorTextAria ref={AuthorBioInputRef} aria-label="Enter author bio" placeholder="Bio" required></AddAuthorTextAria>

                    <AddAuthorTextBtn type="submit">
                        {/* {t("button.create")} */}
                        {language[lang].button.create}
                        </AddAuthorTextBtn>
                </AddAuthorInoutBox>
            </AddAuthorForm>
        </AddAuthorWrapper>
    </>
} 