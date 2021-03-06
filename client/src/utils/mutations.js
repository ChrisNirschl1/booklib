import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      email
      bookCount
      savedBooks {
        bookId
        image
        title
        authors
        description
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $username: String!, $password: String!) {
    login(email: $email, username: $username, password: $password) {
      token
      user {
        _id
        username
      email
      bookCount
      savedBooks {
        bookId
        image
        title
        authors
        description
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($book: BookInput!) {
    saveBook(book: $book) {
        _id
        username
      email
      bookCount
      savedBooks {
      bookId
      image
      title
      authors
      description
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation deleteBook($bookID: String!) {
    deleteBook(bookID: $bookId) {
        _id
        username
      email
      bookCount
      savedBooks {
      bookId
      image
      title
      authors
      description
      }
    }
  }
`;