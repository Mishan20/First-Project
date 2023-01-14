import axios from "axios";
import { useState, useEffect } from "react";

function StudentResult() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.post("http://localhost/20it0497/backend/getresult.php", {
            studentid: localStorage.getItem('Studentid')
        }).then(function (response) {
            setdata(response.data);
            // console.log(response.data);
        }).catch(function (response) {
            alert("Something went wrong");
        });

    }, []);
    return (
        <div style={{height:"1000px"}}>
            <h2 className="  text-center">STUDENT RESULT</h2>
            <table className="table caption-top bg-dark text-light" style={{width:"70%", marginLeft:"15%", marginRight:"15%" }}>
                <thead>
                    <tr>
                        <th scope="col">Subject</th>
                        <th scope="col">Result</th>
                        {/* <th scope="col">Handle</th> */}
                    </tr>
                </thead>
                <tbody>
                    
                    {data.map((res, ind) => (
                        <tr>
                            <td key={res.subject}>{res.subject}</td>
                            <td key={res.result}>{res.result}</td>
                            {/* <td key={res.sub}>{res.name}</td> */}
                        </tr>
                    ))}


                </tbody>
            </table>

        </div>

    );



}
export default StudentResult;



