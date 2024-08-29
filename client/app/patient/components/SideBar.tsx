"use client";
const SideBar = () => {
  return (
    <>
      <div className="absolute left-0 min-h-screen w-[5rem] bg-red-50 flex items-center justify-center">
        <div className="flex relative flex-grow h-[70vh] flex-col items-center justify-around gap-3">
          <button className="p-3 text-[.5rem] rounded-sm bg-red-500 px-2">On Going <br/>Appointments</button>
          <button className="p-3 text-[.5rem] rounded-sm bg-red-500 px-2">Create new <br/> Appointment</button>
          <button className="p-3 text-[.5rem] rounded-sm bg-red-500 px-2">Past <br/> Appointments</button>
          <button className="p-3 text-[.5rem] rounded-sm bg-red-500 px-2">Your Profile</button>
        </div>
      </div>
    </>
  );
};
export default SideBar;
