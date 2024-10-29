import Profile from"../../assets/profile.png"

function Header() {
  return (
    <div className="flex justify-between w-11/12 mx-auto border-b-2">
     <h1 className="text-xl md:text-3xl   font-bold">Knowledge-cafe</h1>
     <img className=" w-10 h-10 md:w-auto md:h-auto " src={Profile} alt="" />
    </div>
  )
}

export default Header
