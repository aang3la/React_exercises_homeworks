//? DOMASHNA
//? da napravime komponenta student koja ke ima: ime, prezime i index
//? neka ovaa komponenta gi pokazuva studentite vo nekoja tabela
//? i taa lista da se prakja kako props od app.js
//? da prakjame pokraj listata i uste edno property koe ke bide nekoj tekst: semestar
//? neka toj semestar se pokazuva na ekranot vo nekoj h1 element vednas posle tabelata

//? Da stavime PropTypes na listata od studenti i neka taa lista bide required
//? Neka ima PropTypes i za semestarot
//? Ako slucajno semestarot ne e praten, sekogas da se ispishuva tekstot 'zimski'
import PropTypes from "prop-types";

export const Student = ({ students }) => {
    console.log(students);
    return (
            <div>
                <h1>Students</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Index</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => {
                            return (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.surname}</td>
                                    <td>{student.index}</td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>
            </div>
    )
    
};

Student.propTypes = {
    students: PropTypes.arrayOf(PropTypes.object).isRequired,
};

