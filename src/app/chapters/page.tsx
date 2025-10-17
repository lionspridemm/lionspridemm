export default function Chapters() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Chapter name="St. Louis, MO" lead="Chapter Lead: TBD" email="lionspridemm@gmail.com" phone="(636) 299-0857" />
      <Chapter name="East Metro, IL" lead="Chapter Lead: TBD" email="lionspridemm@gmail.com" phone="(636) 299-0857" />
    </div>
  );
}
function Chapter({ name, lead, email, phone }:{ name:string; lead:string; email:string; phone:string }) {
  return (
    <div className="card p-5">
      <div className="font-semibold text-lg">{name}</div>
      <div className="text-sm prose-muted mt-1">{lead}</div>
      <div className="text-sm mt-2 flex flex-col">
        <span>Email: <a className="text-[--lp-amber] hover:underline" href={`mailto:${email}`}>{email}</a></span>
        <span>Phone: <a className="text-[--lp-amber] hover:underline" href={`tel:${phone.replace(/[^\\d]/g,"")}`}>{phone}</a></span>
      </div>
    </div>
  );
}
