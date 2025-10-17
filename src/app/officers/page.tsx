export default function Officers() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Officer name="Don Aulbert" title="President" />
      <Officer name="Nick Lanham" title="Vice President / Chaplain" />
      <Officer name="Jeff Miller" title="Ride Captain" />
      <Officer name="Angela Aulbert" title="Secretary / Chaplain" />
      <Officer name="Jon Sansoucie" title="Media Officer" />
    </div>
  );
}

function Officer({ name, title }: { name: string; title: string }) {
  return (
    <div className="card p-5">
      <div className="font-semibold">{name}</div>
      <div className="text-sm prose-muted">{title}</div>
    </div>
  );
}
