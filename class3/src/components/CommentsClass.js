//? DOMASHNA - da go konvertirame istiot primer od casot (primerot za komentarite) 
//? i da go napravime vo klasna komponenta

import React from 'react';

export class CommentsClass extends React.Component{
    render() {

        console.log(this.props);

        function onLikeClick(){
            console.log("+1");
        }

        return(
            <>
                {this.props.comment.map((comment) => {
                    return(
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Unique ID</th>
                                        <th>Post author</th>
                                        <th>Content</th>
                                        <th>Likes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{comment.postId}</td>
                                        <td>{comment.author}</td>
                                        <td>{comment.text}</td>
                                        <td><button onClick={onLikeClick}>LIKE</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )
                })}
            </>
        )
    }
}