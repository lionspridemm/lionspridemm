export default function Documents() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Documents & Bylaws</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li><a className="text-[--lp-amber] hover:underline" href="/docs/lions-pride-bylaws.pdf" target="_blank" rel="noopener">Bylaws (PDF)</a></li>
        <li><a className="text-[--lp-amber] hover:underline" href="#">Statement of Faith (PDF)</a></li>
        <li><a className="text-[--lp-amber] hover:underline" href="#">Code of Conduct (PDF)</a></li>
        <li><a className="text-[--lp-amber] hover:underline" href="#">Prospect Handbook (PDF)</a></li>
      </ul>
    </div>
  );
}
