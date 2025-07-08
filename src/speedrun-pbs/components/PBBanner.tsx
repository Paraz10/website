

export type BannerProps = {
    game_tag: string;
    alt: string;
}

export default function PBBanner({ game_tag, alt }: BannerProps) {

    return (
        <div>
            <img
                src={"/banners/banner_" + game_tag + ".jpg"}
                alt={alt}
                className="pb-banner"
            />
        </div>

    );
}