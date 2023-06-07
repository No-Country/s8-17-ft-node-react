export default function TablePlan({ plan }: any) {
  return (
    <div className="w-[70%] flex items-start justify-around max-lg:w-[90%]">
      <div className="w-[100%] flex flex-col h-auto max-sm:hidden">
        <h3 className="w-[100%] border-2 p-2 text-center">SUBSCRIPTIONS</h3>
        <h3 className="w-[100%] border-2 p-2">Request</h3>
        <h3 className="w-[100%] border-2 p-2">Save recipes</h3>
        <h3 className="w-[100%] border-2 p-2">Access to recipes</h3>
        <h3 className="w-[100%] border-2 p-2">Edit profile</h3>
        <h3 className="w-[100%] border-2 p-2">Add favourites</h3>
        <h3 className="w-[100%] border-2 p-2">Search recipes</h3>
        <h3 className="w-[100%] border-2 p-2">Comments</h3>
        <h3 className="w-[100%] border-2 p-2">Calendar</h3>
      </div>
      <div className={`w-[100%] flex flex-col h-auto ${plan === "free" && "bg-[#69CC75]"}`}>
        <h1 className="w-[100%] border-2 p-2 text-center">FREE</h1>
        <h3 className="w-[100%] border-2 p-2">5 Create</h3>
        <h3 className="w-[100%] border-2 p-2">Only their own</h3>
        <h3 className="w-[100%] border-2 p-2">10 recipes</h3>
        <h3 className="w-[100%] border-2 p-2">✅</h3>
        <h3 className="w-[100%] border-2 p-2">✅</h3>
        <h3 className="w-[100%] border-2 p-2">✅</h3>
        <h3 className="w-[100%] border-2 p-2">❌</h3>
        <h3 className="w-[100%] border-2 p-2">❌</h3>
      </div>

      <div className={`w-[100%] flex flex-col h-auto ${plan === "semichef" && "bg-[#49A3FA]"}`}>
        <h1 className="w-[100%] border-2 p-2 text-center">SEMI CHEF</h1>
        <h3 className="w-[100%] border-2 p-2">15 Create</h3>
        <h3 className="w-[100%] border-2 p-2">All</h3>
        <h3 className="w-[100%] border-2 p-2">All</h3>
        <h3 className="w-[100%] border-2 p-2">✅</h3>
        <h3 className="w-[100%] border-2 p-2">✅</h3>
        <h3 className="w-[100%] border-2 p-2">✅</h3>
        <h3 className="w-[100%] border-2 p-2">✅</h3>
        <h3 className="w-[100%] border-2 p-2">❌</h3>
      </div>

      <div className={`w-[100%] flex flex-col h-auto ${plan === "chef" && "bg-[#EF47A0]"}`}>
        <h1 className="w-[100%] border-2 p-2 text-center">MASTER CHEF</h1>
        <h3 className="w-[100%] border-2 p-2">30 Create</h3>
        <h3 className="w-[100%] border-2 p-2">All</h3>
        <h3 className="w-[100%] border-2 p-2">All</h3>
        <h3 className="w-[100%] border-2 p-2">✅</h3>
        <h3 className="w-[100%] border-2 p-2">✅</h3>
        <h3 className="w-[100%] border-2 p-2">✅</h3>
        <h3 className="w-[100%] border-2 p-2">✅</h3>
        <h3 className="w-[100%] border-2 p-2">✅</h3>
      </div>
    </div>
  );
}
