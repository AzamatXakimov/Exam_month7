import styled from "styled-components";

export const BooksSectionTeg = styled.section`
    position: relative;
`
export const BooksContainer = styled.div``;


export const BookList = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 22px;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`;


export const BookEmptyText = styled.h2`
    font-size: 32px;
    line-height: 48px;
    color: #000;

    .dark &{
        color: #fff;
    }
`