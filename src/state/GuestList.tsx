import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const handleAdd = () => {
    setGuests([...guests, name]);
    setName("");
  };

  return (
    <div>
      <h3>Guest List</h3>
      {guests && (
        <ul>
          {guests.map((guest) => (
            <li key={guest}>{guest}</li>
          ))}
        </ul>
      )}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add Guest</button>
    </div>
  );
};

export default GuestList;
