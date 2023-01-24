import styled from "styled-components";

export const AuthorSectionTeg = styled.section`
    position: relative;
`
export const AuthorContainer = styled.div``;

export const AuthorList = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
`;

export const AuthorEmptyText = styled.h2`
    font-size: 32px;
    line-height: 48px;
    color: #000;

    .dark &{
        color: #fff;
    }
`