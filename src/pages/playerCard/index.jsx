import React/*, { useState }*/ from 'react';
import './playerCard.css';
//import api from '../../services/Api';

export default function PlayerCard() {

    return (
        <div className="player-card-container">
            
            <div className="profile-informations">
                <h1 className="player-name">Sire saol</h1>
                <div className="profile-picture">
                    <img src="https://images.chesscomfiles.com/uploads/v1/user/29470396.2067fb7d.200x200o.d0ac00b9e40c.png"></img>
                </div>
                <h1>From: Cedro-CE</h1>
            </div>

            <div className="player-mmrs">
                <div className="bullet">
                    <h1>Bullet MMR</h1>
                    <h2>1086</h2>
                </div>

                <div className="blitz">
                    <h1>Blitz MMR</h1>
                    <h2>1086</h2>
                </div>

                <div className="fast">
                    <h1>Fast MMR</h1>
                    <h2>1086</h2>
                </div>

                <div className="problems">
                    <h1>Problems MMR</h1>
                    <h2>1086</h2>
                </div>

                <div className="problems-race">
                    <h1>Problems race MMR</h1>
                    <h2>1086</h2>
                </div>
            </div>
            <div className="player-history">
                <h1>I HAVE NO IDEA HOW I WILL DO tHIS PARt xD</h1>
            </div>
        </div>
    )
}