import { useEffect } from "react";
import Cover from "./Cover";
import FinishPage from "./FinishPage";
import PhotoPage from "./PhotoPage";
import WishPage from "./WishPage";

type PageType = "cover" | "photos" | "wishes" | "finish";

type BookProps = {
    page: PageType;
    setPage: (page: PageType) => void;
};

export default function Book({ page, setPage }: BookProps) {
    useEffect(() => {
        if (page === "cover") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [page]);

    return (
        <div className="w-full h-screen bg-pink-100 flex justify-center items-center relative">
            {page === "cover" && <Cover onNext={() => setPage("photos")} />}
            {page === "photos" && (
                <PhotoPage onNext={() => setPage("wishes")} onBack={() => setPage("cover")} />
            )}
            {page === "wishes" && (
                <WishPage onFinish={() => setPage("finish")} onBack={() => setPage("photos")} />
            )}
            {page === "finish" && <FinishPage onBack={() => setPage("wishes")} />}
        </div>
    );
}
