import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservation, SafeUser } from "../types";

interface TripsClientProps{
    reservations:SafeReservation[];
    currentUser?:SafeUser | null;
}


const TripsClient:React.FC<TripsClientProps>=({
    reservations,
    currentUser
})=>{
    return(
        <div>
            <Container>
                <Heading
                  title="Trips"
                  subtitle="Where you've been and where you're going"
                />
            </Container>
        </div>
    )
}
 export default TripsClient;