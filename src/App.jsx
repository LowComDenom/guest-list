import { useState } from "react";
import Guest from "./guests/Guest";
import GuestList from "./guests/GuestList";

export default function App() {
  const [ guestId, setGuestId ] = useState(null)

  return (
    <div>
      {
        guestId
        ? <Guest guestId={guestId} setGuestId={setGuestId} />
        : <GuestList setGuestId={setGuestId} />
      }
    </div>
  )
}
