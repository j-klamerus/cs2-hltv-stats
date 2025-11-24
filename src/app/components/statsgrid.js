import { React, useState, useEffect } from 'react';

const StatsGrid = ({playerName}) => {

    const [statsData, setStatsData] = useState(null);
    const [averages, setAverages] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch(`api/stats?name=${playerName}`)
            const result = await response.json();
            setStatsData(result);
            const calculatedAverages = calcStats(result);
            setAverages(calculatedAverages)
        } catch(e) {
            console.log(e)
        };
        }
        fetchData();
    }, [])

    const calcStats = (stats) => {
        let totalKills = 0;
        let totalDeaths = 0;
        let avgKD;
        let totalRating = 0;
        let totalHSP = 0;
        let totalADR = 0;
        let totalRounds = 0;

        let numberOfMatches = 10;

        stats.data.map((match) => {
            totalRating += Number(match.rating);
            totalKills += Number(match.kills);
            totalDeaths += Number(match.deaths);
            totalHSP += Number(match.hsPercent);
            totalADR += Number(match.adr);
            const [team1Score, team2Score] = match.score.split(":");
            totalRounds += Number(team1Score) + Number(team2Score);

        })
        //console.log(totalKills, totalADR, totalDeaths, totalHSP, totalRating, totalRounds);
        const calculatedAverages = {
            KPR: (totalKills / totalRounds).toFixed(2),
            ADR: (totalADR / numberOfMatches).toFixed(1),
            DPR: (totalDeaths / totalRounds).toFixed(2),
            rating: (totalRating / numberOfMatches).toFixed(2),
            HSP: (totalHSP / numberOfMatches).toFixed(1),
            KD: (totalKills / totalDeaths).toFixed(2)
        };

        //console.log(KPR, ADR, DPR, rating, HSP, avgKD);

        return calculatedAverages;
    }

    const renderPlayerInfo = () => {
        switch(playerName) {
            case 'jacob':
                return <p>Jacob 🇺🇸 | Complexity | 23 </p>
            case 'george':
                return <p>George 🇮🇱 | R Gaming | 23</p>
            case 'kaleb':
                return <p>Kaleb 🇺🇸 | R Gaming | 23</p>
            case 'aidan':
                return <p>Aidan 🇺🇸 | R Gaming | 23</p>
            case 'colton':
                return <p>Colton 🇺🇸 | R Gaming | 23</p>
            case 'jucc':
                return <p>Jack 🇺🇸 | R Gaming | 23</p>
            case 'kyle':
                return <p>Kyle 🇺🇸 | R Gaming | 24</p>

        }
    }

    const renderIGN = () => {
        switch(playerName) {
            case 'jacob':
                return <p>greg</p>
            case 'george':
                return <p>who</p>
            case 'kaleb':
                return <p>kaleB</p>
            case 'aidan':
                return <p>wowbugasshair</p>
            case 'colton':
                return <p>beerusoomafoo</p>
            case 'jucc':
                return <p>JuccOP</p>
            case 'kyle':
                return <p>Toaster</p>
        }
    }

    const renderStatMeter = (statKey) => {
        let value = Number(averages[statKey])
        switch(statKey) {
            case 'KPR':
                if(value < 0.5) {
                    return <div className="h-full w-full bg-red-500"></div>
                } else if (value > 0.8) {
                    return <div className="h-full w-full bg-green-500"></div>
                } else {
                    return <div className="h-full w-full bg-yellow-500"></div>
                }
            case 'ADR':
                if(value > 85) {
                    return <div className="h-full w-full bg-green-500"></div>
                } else if( value < 50) {
                    return <div className="h-full w-full bg-red-500"></div>
                } else {
                    return <div className="h-full w-full bg-yellow-500"></div>
                }
            case 'DPR':
                if(value > 0.75) {
                    return <div className="h-full w-full bg-red-500"></div>
                } else if(value < 0.66) {
                    return <div className="h-full w-full bg-green-500"></div>
                } else {
                    return <div className="h-full w-full bg-yellow-500"></div>
                }
            case 'rating':
                if(value > 1.3) {
                    return <div className="h-full w-full bg-green-500"></div>
                } else if(value < 0.95) {
                    return <div className="h-full w-full bg-red-500"></div>
                } else {
                    return <div className="h-full w-full bg-yellow-500"></div>
                }
            case 'HSP':
                if(value > 60) {
                    return <div className="h-full w-full bg-green-500"></div>
                } else if(value < 45) {
                    return <div className="h-full w-full bg-red-500"></div>
                } else {
                    return <div className="h-full w-full bg-yellow-500"></div>
                }
            case 'KD':
                if(value > 1.2) {
                    return <div className="h-full w-full bg-green-500"></div>
                } else if(value < 0.9) {
                    return <div className="h-full w-full bg-red-500"></div>
                } else {
                    return <div className="h-full w-full bg-yellow-500"></div>
                }
        }
    }

    return(
        <div className="p-4 md:p-10 min-h-screen flex flex-col items-center justify-center bg-gray-600 font-sans">
            
            {statsData?.success ? (
                <div className="bg-gray-800 text-white rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl transition-all duration-300 mb-6">

                    {/* Main Layout: Portrait (Left) & Info/Stats (Right) */}
                    <div className="flex flex-col md:flex-row h-auto">

                        {/* 1. Portrait Section (Left) */}
                        <div className="md:w-1/3 flex-shrink-0 relative">
                            {/* Placeholder Image for Player Portrait */}
                            <img 
                                src={`${playerName}.png`} 
                                alt="Player Profile Image" 
                                className="object-cover w-full h-full min-h-[200px] md:min-h-full [object-position:50%_25%]"
                                onError={(error) => {
                                    error.target.onerror = null;
                                    error.target.src = "default.jpg"
                                }}
                            />
                        </div>

                        {/* 2. Info & Stats Section (Right) */}
                        <div className="md:w-2/3 p-6 space-y-6">

                            {/* 2a. Player Biographical Information (Top) */}
                            <header className="border-b border-gray-700 pb-4">
                                {/* In-Game Name (Top Line) */}
                                <h1 className="text-4xl font-black text-amber-400 leading-tight mb-1">
                                    {renderIGN()}
                                </h1>
                                {/* Real Name, Team Name, and Age (Single Line) */}
                                <h3 className="text-base text-gray-400 font-medium">
                                    {renderPlayerInfo()}
                                </h3>
                            </header>

                            {/* 2b. Player Statistics Grid (6-Item Grid) */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {averages != null ? 
                                Object.entries(averages).map(([key, value]) => {
                            return ( <div className="stat-item bg-gray-700 p-3 rounded-lg shadow-inner flex flex-col" key={key}>
                                        {/* Stat Name (Smaller, above, Left-Aligned) */}
                                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                                                {key}
                                        </span>
                                        {/* Stat Value (Much Bigger, Left-Aligned) */}
                                        <span className="text-4xl font-extrabold text-white-400 mt-1">
                                                    {value}
                                        </span>
                                        
                                        <div className="h-2 bg-gray-600 rounded-full overflow-hidden w-full mt-3">
                                            {/* Bar is a fixed, full-width block of single color */}
                                            {renderStatMeter(key)}
                                        </div>
                                    </div> )
                                })   
                            :<div>loading</div>}
                            </div>
                            {/* End of Stats Grid */}
                        </div>

                    </div>
                </div>
            ) : (
                <div className="text-white text-xl">Loading...</div>
            )}
        </div>
    );
};

export default StatsGrid;
