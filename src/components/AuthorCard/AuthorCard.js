import { AuthorCardImg, AuthorCardItem, AuthorCardLink, AuthorCardText, AuthorCardTextBox, AuthorCardTitle } from "./AuthorCard.style"

export const AuthorCard = ({obj}) => {
    return<>
        <AuthorCardItem>
            <AuthorCardLink to={`/author-single/${obj.id}`}>
                <AuthorCardImg src={`http://localhost:5000/${obj.image}`}/>
                <AuthorCardTextBox>
                    <AuthorCardTitle>
                        {obj.first_name} {obj.last_name}
                    </AuthorCardTitle>
                    <AuthorCardText>
                        {obj.date_of_birth}-{obj.date_of_death}
                    </AuthorCardText>
                </AuthorCardTextBox>
            </AuthorCardLink>
        </AuthorCardItem>
    </>
}
