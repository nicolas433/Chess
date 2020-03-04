import React/*, { useState }*/ from 'react';
import './search.css';
//import api from '../../services/Api';

export default function Search() {
    return (
        <div className="search-container">
            <form className="player-search-form" action="submit">
                <label className="search-label">
                    Nome do jogador
                    <input
                        className="search-input"
                        name="playerName">
                    </input>
                </label>
                <button
                    className="search-button"
                    type='submit'>
                    Search
                </button>
            </form>
        </div>
    )
}