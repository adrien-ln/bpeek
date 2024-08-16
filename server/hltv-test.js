import { HLTV } from 'hltv';

async function getMatches() {
    const matches = await HLTV.getMatches();
    console.log(matches);
}

// getFrenchMatches();

async function getTeamRanking() {
    const ranking = await HLTV.getTeamRanking({ country: 'France' });
    console.log(ranking);
}

getTeamRanking();