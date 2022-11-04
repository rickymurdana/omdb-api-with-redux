import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

export default function ModalComponent({ data, close }) {
    const [movieDetail, setMovieDetail] = useState();
    const [loading, setLoading] = useState(false);
    const apiKey = 'b09bee0d';

    const fetchDetail = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`http://www.omdbapi.com/?i=${data.imdbID}&apikey=${apiKey}`)
            setMovieDetail(res.data);
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDetail();
    }, [])

    return (
            <>
                <div id="detailModal" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.6)',
                }} onClick={() => close(false)}>
                    <div style={{
                        position: 'fixed',
                        background: 'white',
                        width: '65%',
                        height: '65%',
                        overflow: 'hidden',
                        scrollBehavior: 'smooth',
                        top: '50%',
                        left: '50%',
                        borderRadius: 10,
                        zIndex: "1000",
                        overflowY: "auto",
                        transform: 'translate(-50%,-50%)'
                    }}>
                        {!loading ? 
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem',
                                padding: '2rem'
                            }}>
                                <div>
                                    <img src={movieDetail?.Poster} alt={movieDetail?.Title} width="300" height="400" loading="lazy"/>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'justify'
                                }}>
                                    <h3 style={{ textAlign: 'center' }}>{movieDetail?.Title}</h3>
                                    <div className="card" style={{ padding: '1rem' }}>
                                        <div style={{ 
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '1.5rem'
                                        }}>
                                            <div style={{
                                                width: '50%'
                                            }}>
                                                <p>Year: {movieDetail?.Year}</p>
                                                <p>Released: {movieDetail?.Released}</p>
                                                <p>Director: {movieDetail?.Director}</p>
                                                <p>Plot: {movieDetail?.Plot}</p>
                                            </div>
                                            <div style={{
                                                width: '50%'
                                            }}
                                            >
                                                <p>Actors: {movieDetail?.Actors}</p>
                                                <p>Awards: {movieDetail?.Awards}</p>
                                                <p>Genre: {movieDetail?.Genre}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            :
                            <Loading />
                        }
                    </div>
                </div>
            </>
    )
}