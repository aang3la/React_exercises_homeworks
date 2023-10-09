import { API_URL } from "../Uttils/constants";

// Servis odgovoren za zemanje na komentari koja bi se koristela vo poveke komponenti
export const getComments = () => {
    return fetch(`${API_URL}/comments`)
      .then((res) => res.json())
      .then((result) => result)
      .catch((err) => alert(err));
};

// Examples of functions to implement here
export const createComment = () => {
    // create the comment with POST method
}
export const deleteComment = () => {
    // delete comment
}