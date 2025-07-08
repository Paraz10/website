import { type PBGameData } from "../../utils/dataloader";
import PBBanner from "./PBBanner";


export default function PBGame(gameData: PBGameData) {

    

    return (
        <div>
            <h2>{gameData.game} </h2>
            <PBBanner game_tag={gameData.game_tag} alt={"Banner for " + gameData.game} />
            <ul>
                {gameData.runs.map((run, index) => (
                    <li key={index}>
                        <a href={"/speedrun-pbs/" + gameData.game_tag + "/" + run.category_tag}>
                            {run.category + " : " + run.time}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}