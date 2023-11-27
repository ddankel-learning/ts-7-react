import { useEffect, useRef, useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 21 },
  { name: "Michael", age: 22 },
];

const UserSEarchWithAutoFocus: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = () => {
    const foundUser = users.find((item) => item.name.toLowerCase() === name.toLowerCase());
    setUser(foundUser);
  };

  return (
    <div>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSearch}>Find User</button>
      <div>{!user && "No matching user"}</div>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};

export default UserSEarchWithAutoFocus;
