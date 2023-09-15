//? Da napravime komponenta vo koja ke prikazuvame komentari
// neka sekoj komentar ima id, author, text.
  // neka listata so komentari ja imate vo app.js i pratite preku props vo kreiranata komponenta
  // tamu da gi prikazeme informaciite
  // neka bidat vo tabela
  // pokraj ova imate nekoe kopce LIKE sto vo konzola ke pecati +1

import PropTypes from "prop-types";
export function Comments(props) {

    console.log(props);
    function onLikeClick() {
        console.log("+1");
      }

    return(
        <div>
            {
                props.comment.map((comment) => {
                    return (
                        <>
                            <table>
                                <tr>
                                    <th>ID of the post</th>
                                    <th>Author of the post</th>
                                    <th>Text(content)</th>
                                    <th>Likes</th>
                                </tr>
                                <tr>
                                    <td>{comment.postId}</td>
                                    <td>{comment.author}</td>
                                    <td>{comment.text}</td>
                                    <td><button onClick={onLikeClick}>LIKE</button></td>
                                </tr>
                                <tr>
                                    
                                </tr>
                            </table>
                        </>
                    )
                })
            }
        </div>
    )
};

Comments.propTypes = {
    comment: PropTypes.arrayOf(PropTypes.object).isRequired,
}

Comments.defaultProps = {
    comment: [{postId: "no ID", author: "unnamed", text: "empty field"}]
}