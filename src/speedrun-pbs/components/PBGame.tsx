import { type PBGameData } from "../../utils/dataloader";
import PBBanner from "./PBBanner";


export default function PBGame(gameData: PBGameData) {

    

    return (
        <div>
            <PBBanner game_tag={gameData.game_tag} alt={"Banner for " + gameData.game} />
            {gameData.runs.map((run, index) => (
                <div key={index}>
                    <a href={"/speedrun-pbs/" + gameData.game_tag + "/" + run.category_tag}>
                        {run.category + " : " + run.time}
                    </a>
                </div>
            ))}
        </div>
    );
}