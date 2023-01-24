import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { addMe } from "../../redux/me/meActions";
import { Main } from "./Home.style";
import { AuthorSection } from "../../components/AuthorSection/AuthorSection";
import { BooksSection } from "../../components/BooksSection/BooksSection";
import { AuthorSingle } from "../AuthorSingle/AuthorSingle";
import { BookSingle } from "../BookSingle/BookSingle";

export const Home = () => {
    const state = useSelector((state) => state.token)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(!state.token){
            navigate("/login")
        }
        else{
            axios.get("http://localhost:5000/user/me", {
                headers: {
                    "Authorization": `${state.token}` 
                }
            }).then(data => {
                dispatch(addMe(data.data))
                localStorage.setItem("me", JSON.stringify(data.data))
            }).catch(err => console.log(err))
        }

    }, [state.token]);
    

    return <>
        <Header/>
        <Main>    
            <Routes>
                <Route path="/" element={<Navigate to={"authors"} replace={true}/>}/>
                <Route path="authors/*" element={<AuthorSection />}/>
                <Route path="authors/:search" element={<AuthorSection />}/>
                <Route path="books/*" element={<BooksSection />}/>
                <Route path="books/:search" element={<BooksSection />}/>
                <Route path="author-single/:authorId" element={<AuthorSingle />}/>
                <Route path="book-single/:bookId" element={<BookSingle />}/>
            </Routes>
        </Main>
    </>
}
