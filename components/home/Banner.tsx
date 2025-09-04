import Image from "next/image";

const Banner = () => {
    return (
        <div className="h-[237px] px-4 bg-black flex items-center justify-center">
            <div className="relative h-[137px] relative w-full">
                <Image
                    src="/reklam.jpg"
                    alt="Reklam"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover rounded-md"
                />
            </div>
        </div>
    );
};

export default Banner;
