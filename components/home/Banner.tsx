import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full bg-black/90 rounded-md">
            <div className="relative aspect-[36/9] w-full">
                <Image
                    src="/ChatGPT Image 11 Eyl 2025 11_46_39.png"
                    alt="Reklam"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover rounded-md bg-black"
                />
            </div>
        </div>
    );
};

export default Banner;
