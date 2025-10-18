import CalendarEmbed from "@/components/CalendarEmbed";

const CAL_ID = "lionspridemm@gmail.com"; // <- replace with your real Calendar ID
const TIMEZONE = "America/Chicago";

export const metadata = {
  title: "Events & Rides — Lion’s Pride MM",
  description: "Upcoming rides, meetups, and outreach events.",
};

export default function EventsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Events & Rides</h1>

      <CalendarEmbed calId={CAL_ID} timeZone={TIMEZONE} />
      <div className="text-sm prose-muted">
        Prefer Google’s UI?{" "}
        <a
          className="text-[--lp-ice] hover:underline"
          href={`https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(CAL_ID)}`}
          target="_blank"
          rel="noopener"
        >
          Open in Google Calendar
        </a>
        .
      </div>
    </div>
  );
}
