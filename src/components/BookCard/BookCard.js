import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BookCardDesc, BookCardImg, BookCardItem, BookCardLink, BookCardTitle } from "./BookCard.style";
export const BookCard = ({single, obj}) => {
    const {token} = useSelector((state) => state.token);
    const [author, setAuthor] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/author/authorId/${obj.author_id}`, {
                headers: {
                    "Authorization": `${token}` 
                }
            }).then(data => {
                setAuthor(data.data)
            }).catch(err => console.log(err))
    }, [])

    return <>
        <BookCardItem style={single ? {marginRight: "20px"} : null}>
            <BookCardLink to={`/book-single/${obj.id}`}>
                <BookCardImg src={`http://localhost:5000/${obj.image}`}/>
                <BookCardTitle>
                    {obj.title}
                </BookCardTitle>
                <BookCardDesc>
                    {author.first_name} {author.last_name}
                </BookCardDesc>
            </BookCardLink>
        </BookCardItem>
    </>
}
