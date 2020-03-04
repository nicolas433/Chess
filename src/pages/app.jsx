import React from 'react';
import Search from './search';
import PlayerCard from './playerCard';

import './app.css';

export default function App() {
    return (
        <div className="app-container">
            <Search></Search>
            <PlayerCard></PlayerCard>
        </div>
    )
}