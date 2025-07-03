import { useParams } from "react-router";
import { getRunByCategory, type PBRunData } from "../utils/dataloader";


export default function PBDetails() {

    const { game, category } = useParams<{ game: string; category: string }>();

    if (!game || !category) {
        return <div>Error: Game or category tag is missing</div>;
    }

    const pbDate: PBRunData = getRunByCategory(game, category);

    if (!pbDate) {
        return <div>Error: PB not found for game {game} and category {category}</div>;
    }

    return (
        <div>
            <h1>PB Details</h1>
            <p>This is the PB Details page.</p>
        </div>
    );
}