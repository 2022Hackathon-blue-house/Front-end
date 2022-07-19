import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';

import './App.css';

let Write_Button = styled.button`
width: 200px;
height: 50px;
background-color: #b7c5e7;
border: 0;
outline: 0;
margin-top: 30px;
border-radius: 15px;
font-weight: bold;
font-size: large;

&:hover{  
    background-color: #7394e0;
}

&:focus{  
    
}
`

function List(){

    let navigate = useNavigate();

    let [list, setList] = useState(['안녕']);

    return(
        <div className="App">

            <Write_Button onClick={()=>{navigate('/write')}}>글 쓰기</Write_Button>
            
            <br/>

            <table className="table_title">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>날짜</th>
                    </tr>
                </thead>
            </table>

            {
                list.map((a, i)=>{
                    return(
                        <div>
                            <table className="table_content">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>제목</td>
                                        <td>날짜</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }

        </div>
    )
}


export default List;