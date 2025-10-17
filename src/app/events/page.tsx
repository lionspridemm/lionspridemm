const CAL_ID = "lionspridemm@gmail.com"; // replace with your Google Calendar ID
const TIMEZONE = "America/Chicago"; // adjust to your timezone

export const metadata = {
  title: "Events & Rides — Lion’s Pride MM",
  description: "Upcoming rides, meetups, and outreach events.",
};

export default function Events() {
  const src = `https://calendar.google.com/calendar/embed?mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showTz=0&wkst=1&bgcolor=%231b1816&ctz=${encodeURIComponent(
    TIMEZONE
  )}&src=${encodeURIComponent(CAL_ID)}&color=%237cc5ff`;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Events & Rides</h1>
      <p className="prose-muted">
        This feed stays current from our Google Calendar. Want to ride with us? Check the dates and{" "}
        <a href="/contact" className="text-[--lp-ice] hover:underline">contact us</a>.
      </p>

      <div className="card overflow-hidden">
        <div className="aspect-video">
          <iframe
            title="Lion’s Pride MM Calendar"
            src={src}
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div>

      <div className="text-sm prose-muted">
        Prefer monthly view?{" "}
        <a
          className="text-[--lp-ice] hover:underline"
          href={`https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(CAL_ID)}`}
          target="_blank"
          rel="noopener"
        >
          Open the calendar in Google
        </a>.
      </div>
    </div>
  );
}
