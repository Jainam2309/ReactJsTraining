import reviwes from "./ProfileData";
import Testinomial from "./Testinomial";

export default function Profile() {
    return(
        <div>
            <h2>Employee Details</h2>
            <Testinomial reviwes={reviwes}/>
        </div>
    )
}