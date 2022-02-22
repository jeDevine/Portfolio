import "./Projects.css"

const Projects = () => {
    const redirectNBA = () => {window.location.href="https://nba-finalproject.web.app/"}
    const redirectRR = () => {window.location.href="https://recipe-rescue-99e85.web.app"}
    return (
        <div className="projects">
            <div className="Container">
                <h1>NBAGalaxy</h1>
                <div className="NBAGalaxy" onClick={() => redirectNBA()}></div>
            </div>
            <div className="Container">
                <h1>Recipe Rescue</h1>
                <div className="RecipeRescue" onClick={() => redirectRR()}></div>
            </div>
        </div>
    )
}

export default Projects;


//https://recipe-rescue-99e85.web.app