import { Actor } from "@/types";
import ActorCard from "../actor-card/ActorCard";

type ActorsListProps = {
  actors: Actor[];
};

export default function ActorsList({ actors }: ActorsListProps) {
  return (
    <section>
      <h3 className="text-xl font-bold">Casting</h3>
      <div className="flex flex-row flex-wrap sm:flex-nowrap sm:w-200">
        {actors.map((actor) => {
          return (
            <ActorCard key={actor.id} className="p-1 basis-1/2" actor={actor} />
          );
        })}
      </div>
    </section>
  );
}
