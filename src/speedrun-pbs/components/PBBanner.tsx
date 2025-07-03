

export type BannerProps = {
    game_tag: string;
    alt: string;
}

export default function PBBanner({ game_tag, alt }: BannerProps) {

    return (
        <div className="pb-banner">
            <img
                src={"/public/banners/banner_" + game_tag + ".jpg"}
                alt={alt}
            />
        </div>

    );
}