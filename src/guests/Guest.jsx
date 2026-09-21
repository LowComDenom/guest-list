import { useEffect, useState } from "react"
import { getGuest } from "../api/get"

export default function Guest({ guestId, setGuestId }) {
  const [guest, setguest] = useState(null);

  useEffect(() => {
    const fetchGuest = async () => {
      const data = await getGuest(guestId);
      setguest(data);
    };
    fetchGuest();
  }, [guestId]);

  if (!guest) return <p>Loading...</p>;

  return (
    <article>
      <h1>{guest.name} - {guest.id}</h1>
      <p>{guest.email}</p>
      <p>{guest.phone}</p>
      <p>{guest.bio}</p>
      <p>{guest.job}</p>
      <button onClick={() => setGuestId(null)}>Back</button>
    </article>
  );
}
