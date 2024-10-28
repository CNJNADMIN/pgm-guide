import Image from "next/image";
import SleekTable from "../components/SleekTable";

// Mock data from your Excel-like structure
const excelData = [
  {
    Time: "12:00 AM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "12:30 AM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "1:00 AM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "1:30 AM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "2:00 AM",
    Monday: "Classic Arts Showcase",
    Tuesday: "Classic Arts Showcase",
    Wednesday: "Classic Arts Showcase",
    Thursday: "Classic Arts Showcase",
    Friday: "Classic Arts Showcase",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "2:30 AM",
    Monday: "Classic Arts Showcase",
    Tuesday: "Classic Arts Showcase",
    Wednesday: "Classic Arts Showcase",
    Thursday: "Classic Arts Showcase",
    Friday: "Classic Arts Showcase",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "3:00 AM",
    Monday: "Classic Arts Showcase",
    Tuesday: "Classic Arts Showcase",
    Wednesday: "Classic Arts Showcase",
    Thursday: "Classic Arts Showcase",
    Friday: "Classic Arts Showcase",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "3:30 AM",
    Monday: "Classic Arts Showcase",
    Tuesday: "Classic Arts Showcase",
    Wednesday: "Classic Arts Showcase",
    Thursday: "Classic Arts Showcase",
    Friday: "Classic Arts Showcase",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "4:00 AM",
    Monday: "Classic Arts Showcase",
    Tuesday: "Classic Arts Showcase",
    Wednesday: "Classic Arts Showcase",
    Thursday: "Classic Arts Showcase",
    Friday: "Classic Arts Showcase",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "4:30 AM",
    Monday: "Classic Arts Showcase",
    Tuesday: "Classic Arts Showcase",
    Wednesday: "Classic Arts Showcase",
    Thursday: "Classic Arts Showcase",
    Friday: "Classic Arts Showcase",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "5:00 AM",
    Monday: "Classic Arts Showcase",
    Tuesday: "Classic Arts Showcase",
    Wednesday: "Classic Arts Showcase",
    Thursday: "Classic Arts Showcase",
    Friday: "Classic Arts Showcase",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "5:30 AM",
    Monday: "Classic Arts Showcase",
    Tuesday: "Classic Arts Showcase",
    Wednesday: "Classic Arts Showcase",
    Thursday: "Classic Arts Showcase",
    Friday: "Classic Arts Showcase",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "6:00 AM",
    Monday: "Classic Arts Showcase",
    Tuesday: "Classic Arts Showcase",
    Wednesday: "Classic Arts Showcase",
    Thursday: "Classic Arts Showcase",
    Friday: "Classic Arts Showcase",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "6:30 AM",
    Monday: "Classic Arts Showcase",
    Tuesday: "Classic Arts Showcase",
    Wednesday: "Classic Arts Showcase",
    Thursday: "Classic Arts Showcase",
    Friday: "Classic Arts Showcase",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "7:00 AM",
    Monday: "Strata",
    Tuesday: "GCTV",
    Wednesday: "Conflict Zone",
    Thursday: "This Is America",
    Friday: "WH Chronicle",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "7:30 AM",
    Monday: "In Good Shape",
    Tuesday: "Global 3000",
    Wednesday: "Focus On Europe",
    Thursday: "Tomorrow Today",
    Friday: "EuroMaxx",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "8:00 AM",
    Monday: "Democracy Now",
    Tuesday: "Democracy Now",
    Wednesday: "Democracy Now",
    Thursday: "Democracy Now",
    Friday: "Democracy Now",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "8:30 AM",
    Monday: "Democracy Now",
    Tuesday: "Democracy Now",
    Wednesday: "Democracy Now",
    Thursday: "Democracy Now",
    Friday: "Democracy Now",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "9:00 AM",
    Monday: "Aging Insights",
    Tuesday: "Inspire",
    Wednesday: "CogniDiet",
    Thursday: "Money Thoughts",
    Friday: "Profonde",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "9:30 AM",
    Monday: "CMS & You",
    Tuesday: "Wine-ing",
    Wednesday: "Navigate Autism",
    Thursday: "Public Banking",
    Friday: "Aging Insights",
    Saturday: "CLTV",
    Sunday: "Our Garden",
  },
  {
    Time: "10:00 AM",
    Monday: "CLTV",
    Tuesday: "I Am Not Cancer",
    Wednesday: "New Beginnings C",
    Thursday: "College Planning",
    Friday: "Our Garden",
    Saturday: "Navigate Autism",
    Sunday: "La Verdad",
  },
  {
    Time: "10:30 AM",
    Monday: "Riverwatch",
    Tuesday: "Riverwatch",
    Wednesday: "Riverwatch",
    Thursday: "Riverwatch",
    Friday: "Riverwatch",
    Saturday: "I Am Not Cancer",
    Sunday: "Guitar Tales",
  },
  {
    Time: "11:00 AM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Dr. Joy",
    Sunday: "Guitar Tales",
  },
  {
    Time: "11:30 AM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Focus On",
    Sunday: "The XChange",
  },
  {
    Time: "12:00 PM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "CMS & You",
    Sunday: "Real Talk on Racism",
  },
  {
    Time: "12:30 PM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "New Beginnings",
    Sunday: "The Quantum Healer",
  },
  {
    Time: "1:00 PM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "1:30 PM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "2:00 PM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "2:30 PM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "3:00 PM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "3:30 PM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "4:00 PM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "4:30 PM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "5:00 PM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "5:30 PM",
    Monday: "Variety Program",
    Tuesday: "Variety Program",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Variety Program",
    Sunday: "Backstory",
  },
  {
    Time: "6:00 PM",
    Monday: "Variety Program",
    Tuesday: "Cafe Improv",
    Wednesday: "Variety Program",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Cafe Improv",
    Sunday: "Wine-ing",
  },
  {
    Time: "6:30 PM",
    Monday: "Variety Program",
    Tuesday: "Cafe Improv",
    Wednesday: "The Quantum Healer",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Cafe Improv",
    Sunday: "Nonprofit Spotlight",
  },
  {
    Time: "7:00 PM",
    Monday: "Variety Program",
    Tuesday: "Cafe Improv",
    Wednesday: "Money Thoughts",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Cafe Improv",
    Sunday: "Variety Program",
  },
  {
    Time: "7:30 PM",
    Monday: "Variety Program",
    Tuesday: "Cafe Improv",
    Wednesday: "The XChange",
    Thursday: "Variety Program",
    Friday: "Variety Program",
    Saturday: "Cafe Improv",
    Sunday: "Variety Program",
  },
  {
    Time: "8:00 PM",
    Monday: "Paltrocast",
    Tuesday: "Early Evening Show",
    Wednesday: "Paltrocast",
    Thursday: "Nonprofit Spotlight",
    Friday: "Early Evening Show",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "8:30 PM",
    Monday: "The NY Experience",
    Tuesday: "Central NJ Buy Local",
    Wednesday: "Backstory",
    Thursday: "Central NJ Buy Local",
    Friday: "The NY Experience",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "9:00 PM",
    Monday: "Dream Big Show",
    Tuesday: "Mercer Influencers",
    Wednesday: "This Is America",
    Thursday: "Mercer Influencers",
    Friday: "Paltrocast",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "9:30 PM",
    Monday: "Dream Big Show",
    Tuesday: "Tom & Doug Show",
    Wednesday: "Tomorrow Today",
    Thursday: "Profonde",
    Friday: "Tom & Doug Show",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "10:00 PM",
    Monday: "NASA TV",
    Tuesday: "NASA TV",
    Wednesday: "NASA TV",
    Thursday: "NASA TV",
    Friday: "NASA TV",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "10:30 PM",
    Monday: "NASA TV",
    Tuesday: "NASA TV",
    Wednesday: "NASA TV",
    Thursday: "NASA TV",
    Friday: "NASA TV",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "11:00 PM",
    Monday: "NASA TV",
    Tuesday: "NASA TV",
    Wednesday: "NASA TV",
    Thursday: "NASA TV",
    Friday: "NASA TV",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
  {
    Time: "11:30 PM",
    Monday: "NASA TV",
    Tuesday: "NASA TV",
    Wednesday: "NASA TV",
    Thursday: "NASA TV",
    Friday: "NASA TV",
    Saturday: "Variety Program",
    Sunday: "Variety Program",
  },
];

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    const ampm = hour < 12 ? "AM" : "PM";
    const adjustedHour = hour % 12 === 0 ? 12 : hour % 12;
    slots.push(`${adjustedHour}:00 ${ampm}`);
    slots.push(`${adjustedHour}:30 ${ampm}`);
  }
  return slots;
};

export default function Home() {
  const timeSlots = generateTimeSlots();

  // Map data from excelData instead of static mock data
  const data = timeSlots.map((time) => {
    const matchingEntry = excelData.find((entry) => entry.Time === time);
    return (
      matchingEntry || {
        Time: time,
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
        Sunday: "",
      }
    );
  });
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] overflow-hidden">
      {/* Header Section */}
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/logo-card.jpg)" }}
      >
        <div className="flex flex-col items-center gap-4 sm:gap-6 h-[300px] sm:h-[350px] justify-center drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] w-full px-4 py-4 sm:px-8">
          <a
            href="https://cnjn.org"
            target="_blank"
            rel="noopener noreferrer"
            className="pb-2 sm:pb-4"
          >
            <Image
              src="/logo-white.png"
              alt="CNJN Logo"
              width={400}
              height={32}
              className="max-w-full h-auto"
              priority
            />
          </a>
          <h1 className="text-xl sm:text-2xl font-bold mb-0 sm:mb-1">
            {new Date().toLocaleString("default", { month: "long" })} Program
            Guide {new Date().getFullYear()}
          </h1>

          <p className="text-center text-sm sm:text-base max-w-[600px]">
            Central New Jersey Network can be watched on Comcast channels 28 and
            30, Verizon channels 43 and 45, as well as on Roku, Amazon Fire TV,
            and from the Apple TV app store.
          </p>
        </div>
      </div>

      {/* Main Content Section - Takes Remaining Space */}
      <main className="flex flex-col items-center justify-center gap-8 p-8 sm:p-20 overflow-auto">
  <div style={{ textAlign: "center", width: "100%" }}>
    <div className="table-wrapper">
      <SleekTable data={data} />
    </div>
    <a
      href="https://cnjn.org"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex justify-center"
    >
      <button className="w-full max-w-[200px] bg-[#3FA2C8] hover:bg-[#46B293] text-white font-normal py-2 rounded-md shadow-sm transition-all duration-300 ease-in-out drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] mt-4">
        RETURN HOME
      </button>
    </a>
  </div>
</main>
      <footer className="p-6 text-center text-white/80 sm:p-6">
        Central New Jersey Network © {new Date().getFullYear()}. All Rights
        Reserved.
      </footer>
    </div>
  );
}
