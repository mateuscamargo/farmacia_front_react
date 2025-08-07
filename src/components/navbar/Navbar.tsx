import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="flex justify-center items-center py-4 px-4 text-sky-900 bg-transparent absolute top-0 left-0 w-full z-10">
                <div className="container flex justify-between items-center text-lg h-24">
                    <Link to="/home" className="pl-4 inline-block">
                        <img
                        src="https://ik.imagekit.io/mateuscamargo/ChatGPT%20Image%206%20de%20ago.%20de%202025,%2021_30_39.png?updatedAt=1754527863070"
                        alt="TrendCura Logo"
                        className="h-[70px] w-auto"
                        />
                    </Link>

                    <div className="flex gap-4 mr-4">
                        <Link to="/produtos" className="bg-white text-sky-900 rounded hover:bg-indigo-200 transition px-2 py-1">
                        Produtos
                        </Link>

                        <Link
                        to="/categorias" className="bg-white text-sky-900 rounded hover:bg-indigo-200 transition px-2 py-1">
                        Categorias
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
