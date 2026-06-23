import { MessageSquare, ShieldCheck, Users, Wifi } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  const messages = [
    { name: "Anaya", text: "Notes share kar diye.", tone: "bg-primary text-primary-content" },
    { name: "Rohan", text: "Study room 3 is open.", tone: "bg-base-100 text-base-content" },
    { name: "Maya", text: "Group call starts at 8.", tone: "bg-accent text-accent-content" },
  ];

  return (
    <div className="hidden lg:block">
      <div className="relative overflow-hidden rounded-lg border border-base-300 bg-base-100 p-8 shadow-xl">
        <div className="mb-8 flex items-center gap-4">
          <img src="/logo.png" alt="CampusTalks logo" className="size-16 rounded-lg object-cover" />
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Wifi className="size-4" />
              Live campus network
            </div>
            <h2 className="mt-1 text-3xl font-bold leading-tight">{title}</h2>
          </div>
        </div>

        <p className="mb-8 max-w-md text-base-content/70">{subtitle}</p>

        <div className="mb-8 grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-base-300 bg-base-200 p-4">
            <Users className="mb-3 size-5 text-secondary" />
            <p className="text-2xl font-bold">24</p>
            <p className="text-xs text-base-content/60">online now</p>
          </div>
          <div className="rounded-lg border border-base-300 bg-base-200 p-4">
            <MessageSquare className="mb-3 size-5 text-primary" />
            <p className="text-2xl font-bold">128</p>
            <p className="text-xs text-base-content/60">messages</p>
          </div>
          <div className="rounded-lg border border-base-300 bg-base-200 p-4">
            <ShieldCheck className="mb-3 size-5 text-success" />
            <p className="text-2xl font-bold">Safe</p>
            <p className="text-xs text-base-content/60">JWT login</p>
          </div>
        </div>

        <div className="space-y-3">
          {messages.map((message, index) => (
            <div
              key={message.name}
              className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className={`max-w-[78%] rounded-lg px-4 py-3 shadow-sm ${message.tone}`}>
                <p className="text-xs font-semibold opacity-80">{message.name}</p>
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;
