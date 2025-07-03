import { importPBData, type PBGameData } from '../utils/dataloader';
import PBGame from "./components/PBGame"


export default function PBList() {

    const pbData = importPBData();

    return (
        <div>
            <h1>PB List</h1>
            <p>This is the PB List page.</p>

            {pbData.map((game: PBGameData, index) => (
                <div key={index}>
                    <PBGame {...game} />
                </div>
            ))}
        </div>
    );
}