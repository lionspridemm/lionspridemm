export const metadata = {
  title: "Join the Pride — Lion’s Pride MM",
  description: "How to become part of the Lion’s Pride Motorcycle Ministry.",
};

export default function JoinPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Join the Pride</h1>
      <p className="prose-muted">
        Review the documents, meet the crew at an event, then reach out. We’ll connect you with a chapter lead.
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Read the <a className="text-[--lp-amber] hover:underline" href="/documents">Documents</a>.</li>
        <li>Attend an <a className="text-[--lp-amber] hover:underline" href="/events">Event or Ride</a>.</li>
        <li>Message us on the <a className="text-[--lp-amber] hover:underline" href="/contact">Contact</a> page.</li>
      </ol>
    </div>
  );
}
