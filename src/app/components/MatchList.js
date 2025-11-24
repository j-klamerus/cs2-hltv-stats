import React from 'react';


const MatchList = ({matchData}) => {

        <div className="bg-gray-800 text-white rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl p-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Recent Matches</h2>
            <div className="space-y-3">
                {matchData?.success ? 
                    matchData.data.map((match, index) => {
                        return (
                            <div key={index} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                                <div className="flex items-center space-x-6">
                                    <div className="text-center">
                                        <p className="text-xs text-gray-400 uppercase">Kills</p>
                                        <p className="text-xl font-bold text-green-400">{match.kills}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-gray-400 uppercase">Assists</p>
                                        <p className="text-xl font-bold text-blue-400">{match.assists}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-gray-400 uppercase">Deaths</p>
                                        <p className="text-xl font-bold text-red-400">{match.deaths}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-gray-400 uppercase">ADR</p>
                                        <p className="text-xl font-bold text-red-400">{match.adr}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-gray-400 uppercase">Score</p>
                                        <p className="text-xl font-bold text-red-400">{match.score}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-gray-400 uppercase">Map</p>
                                        <p className="text-xl font-bold text-red-400">{match.map}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                : <p className="text-gray-400">No matches found</p>}
            </div>
        </div>
}


export default MatchList;