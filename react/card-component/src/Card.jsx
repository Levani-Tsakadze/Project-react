import profilePic from "./assets/Levani.jfif"


function Card(){

    return(
        <div className="Card">
            <img src={profilePic} alt="Zangi photo"></img>
            <h2>Levani Tsakadze</h2>
            <p>I studing in Goa and I dont playing Roblox</p>
        </div>
    );
}
export default Card