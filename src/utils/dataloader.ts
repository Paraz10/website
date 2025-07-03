import PBdata from '../data/speedrun-pbs.json';


export type PBRunData = {
    "category": string;
    "category_tag": string;
    "date": string;
    "time": string;
    "link1": string;
    "link2": string;
    "description": string;
}


export type PBGameData = {
    "game": string;
    "game_tag": string;
    "runs": PBRunData[];
}



export function importPBData(): PBGameData[] {
    if (!Array.isArray(PBdata)) {
        throw new Error("Invalid PB data format");
    }
    return PBdata as PBGameData[];
}


export function getGameByTag(tag: String): PBGameData {
    const game = PBdata.find((game: PBGameData) => game.game_tag === tag);
    if (!game) {
        throw new Error(`Game with tag ${tag} not found`);
    }
    return game;
}


export function getRunByCategory(gameTag: string, categoryTag: string): PBRunData{
    const game = getGameByTag(gameTag);
    const run = game.runs.find((run: PBRunData) => run.category_tag === categoryTag);
    if (!run) {
        throw new Error(`Run with category tag ${categoryTag} not found in game ${gameTag}`);
    }
    return run;
}