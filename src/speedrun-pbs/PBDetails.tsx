import { useParams } from "react-router";
import { getRunByCategory, type PBRunData } from "../utils/dataloader";


export default function PBDetails() {

    const { game, category } = useParams<{ game: string; category: string }>();

    if (!game || !category) {
        return <div>Error: Game or category tag is missing</div>;
    }

    const pbData: PBRunData = getRunByCategory(game, category);

    if (!pbData) {
        return <div>Error: PB not found for game {game} and category {category}</div>;
    }

    return (
        <div>
            <h1>{pbData.game} - {pbData.category} in {pbData.time}</h1>
            <iframe
                width="560"
                height="315"
                src={pbData.link1.replace("watch?v=", "embed/")}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <p>{pbData.description}</p>
            {pbData.link2 && (
                <p>Backup link : <a href={pbData.link2}>{pbData.link2}</a></p>
            )}
        </div>
    );
}