'use client';
import React, { useEffect, useState } from 'react';
import StatsGrid from '../components/statsgrid';
import MatchList from '../components/MatchList';

// Sample data for the player card, easily replaced by component props later
const playerProfile = {
    inGameName: '"rape who"',
    realName: 'george huot 🇮🇱',
    team: 'r gaming',
    age: '23 yrs',
    role: 'awper',
    portraitUrl: 'george.png',
    stats: [
        { name: 'rating', value: '1.25' },
        { name: 'dpr', value: '0.64' },
        { name: 'kast', value: '74.2%' },
        { name: 'impact', value: '1.35' },
        { name: 'adr', value: '86.5' },
        { name: 'kpr', value: '0.86' },
    ]
};

const PlayerStatsCard = () => {

    

    return (
            <div>
                <StatsGrid playerName="jacob"></StatsGrid>
                <StatsGrid playerName="kaleb"></StatsGrid>
                <StatsGrid playerName="george"></StatsGrid>
                <StatsGrid playerName="kyle"></StatsGrid>
                <StatsGrid playerName="aidan"></StatsGrid>
                <StatsGrid playerName="colton"></StatsGrid>
                <StatsGrid playerName="jucc"></StatsGrid>
            </div>
    );
};

export default PlayerStatsCard;