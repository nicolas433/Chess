import React /*, { useState }*/ from "react";
import api from "../../services/Api";

import "./playerCard.css";
import diamondIcon from "../../assets/icons/diamond.ico";
import platinumIcon from "../../assets/icons/platinum.ico";
import goldIcon from "../../assets/icons/gold.ico";
import twitchIcon from "../../assets/icons/twitch.ico";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const MMR = [
  {
    name: "one year ago",
    bullet: 700,
    blitz: 900,
    rapid: 700,
    exercice: 1000,
    exercice_race: 0,
    amt: 2100
  },
  {
    name: "six mounths ago",
    bullet: 800,
    blitz: 900,
    rapid: 700,
    exercice: 1000,
    exercice_race: 0,
    amt: 2100
  },
  {
    name: "three mounths ago",
    bullet: 900,
    blitz: 900,
    rapid: 700,
    exercice: 1000,
    exercice_race: 0,
    amt: 2100
  },
  {
    name: "two mounths ago",
    bullet: 1000,
    blitz: 900,
    rapid: 700,
    exercice: 1000,
    exercice_race: 0,
    amt: 2100
  },
  {
    name: "one mounth ago",
    bullet: 1200,
    blitz: 900,
    rapid: 700,
    exercice: 1000,
    exercice_race: 0,
    amt: 2100
  },
  {
    name: "twenty days ago",
    bullet: 1600,
    blitz: 900,
    rapid: 700,
    exercice: 1000,
    exercice_race: 0,
    amt: 2100
  },
  {
    name: "ten days ago",
    bullet: 2000,
    blitz: 900,
    rapid: 700,
    exercice: 1000,
    exercice_race: 0,
    amt: 2100
  }
];

export default function PlayerCard() {
  return (
    <div className="player-card-container">
      <div className="player-card-header">
        <h1 className="player-title">GM</h1>
        <div className="player-status"></div>
        <h1 className="player-name">Player-name</h1>
        <div className="player-account-status">
          <img src={diamondIcon} alt=""></img>
        </div>
        <div className="player-twitch">
          <img src={twitchIcon} alt=""></img>
        </div>
      </div>

      <div className="player-card-main">
        <div className="profile-picture">
          <img src="https://images.chesscomfiles.com/uploads/v1/user/29470396.2067fb7d.200x200o.d0ac00b9e40c.png"></img>
        </div>

        <h1 className="player-nickname">Player_nickname</h1>
        <h1 className="player-country">Player_country</h1>

        <div>
          <h2 className="player-followers">Followers</h2>
          <h2 className="player-followers-num">234678</h2>
        </div>

        <div>
          <h2 className="player-fide">Fide ranking</h2>
          <h2 className="player-fide-num">3000</h2>
        </div>
      </div>

      <div className="player-mmrs">
        <LineChart
          width={600}
          height={300}
          data={MMR}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <Line type="monotone" dataKey="rapid" stroke="#1884d8" />
          <Line type="monotone" dataKey="blitz" stroke="#6889d8" />
          <Line type="monotone" dataKey="bullet" stroke="#288458" />
          <Line type="monotone" dataKey="exercice" stroke="#9894d8" />
          <Line type="monotone" dataKey="exercice_race" stroke="#388568" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <YAxis />
          <XAxis dataKey="name" />
          <Legend />
        </LineChart>
      </div>

      <div className="player-history">
        <h1>I HAVE NO IDEA HOW I WILL DO tHIS PARt xD</h1>
      </div>
    </div>
  );
}
