import user1 from "./assets/avatar1.avif";
import user2 from "./assets/avatar2.avif";
import user3 from "./assets/avatar3.avif";
import user4 from "./assets/avatar4.avif";
import Image from "next/image";

const Coach = () => (
  <div className="flex">
    {[
      { name: "User 1", image: user1 },
      { name: "User 2", image: user2 },
      { name: "User 3", image: user3 },
      { name: "User 4", image: user4 },
    ].map((user) => (
      <Image
        key={user.name}
        src={user.image}
        alt={user.name}
        width={56}
        height={56}
        className="not-first:-ml-6 border-2 border-white rounded-full"
      />
    ))}
  </div>
);

export default Coach;