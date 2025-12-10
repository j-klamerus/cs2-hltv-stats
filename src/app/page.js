'use client';
import StatsGrid from "./components/statsgrid";

export default function Home() {
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
}
