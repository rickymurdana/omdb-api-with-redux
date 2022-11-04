import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavMovie } from "../redux/actions/actions";
import ModalComponent from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function FavMovie() {
    const favMovie = useSelector((state) => state.favMovie);
    const dispatch = useDispatch();
    
    const [modal, setModal] = useState(false);
    const [detail, setDetail] = useState();
    const [list, setList] = useState();

    const handleDislike = (item, idx) => {
        const arr = list.filter((el, i) => el.imdbID !== item.imdbID)
        
        setList(arr);
        dispatch(removeFavMovie(item));
    }

    useEffect(() => {
        setList(favMovie)
    }, []);

    return (
        <>
            <div className="mt-3 mx-auto">
            <div>
                { favMovie?.length ? 
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col">TITLE</th>
                                <th scope="col">YEAR</th>
                                <th scope="col">IMDB ID</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {favMovie.map((item, i) => {
                                return (
                                <tr key={i} className="table-row">
                                    <th style={{ cursor: 'pointer' }} onClick={() => {setModal(true); setDetail(item)}}>{item.Title}</th>
                                    <td>{item.Year}</td>
                                    <td>{item.imdbID}</td>
                                    <td>
                                        <div style={{ width: 25, height: 26, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={ () => { handleDislike(item, i) }}> <FontAwesomeIcon icon={faHeart} color="white" size="xl" /> </div>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    :
                    ''
                }
                </div>
                {modal && <ModalComponent data={detail} close={setModal}/>}
            </div>
        </>
    )
}

export default FavMovie;