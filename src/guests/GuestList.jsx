import { useEffect, useState } from "react"
import { getGuests } from "../api/get"

export default function GuestList( { setGuestId } ) {
  const [guests, setGuests] = useState([])

  useEffect(() => {
    const fetchGuests = async () => {
      const data = await getGuests()
      setGuests(data)
    }
    fetchGuests()
  },[])

  return (
    <section>
      <h1>Guest List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id} onClick={() => setGuestId(guest.id)}>
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <p>Select a guest to see more details.</p>
    </section>
  )
}
