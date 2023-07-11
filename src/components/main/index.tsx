import Tech from "./tech";
import Projetos from "./projetos";
import Sobre from "./sobre";

function Main() {
    return (
        <div className="mx-auto max-w-6xl px-2 sm:px-2 lg:px-8">
            <Sobre />
            <Projetos />
            <Tech />
        </div>
    )
}

export default Main;