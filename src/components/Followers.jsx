import logo from "../../img/Youtube.jpeg";
import FollowerChart from "./FollowerChart";
import CountryFollower from "./CountryFollower";
export default function Subscriper() {
  return (
    <>
      <div className="main-div grid grid-cols-1 md:grid grid-cols-3  mx-auto  justify-between items-center ">
        <div className="logo&follower text-center gap-10 flex items-center  w-[400px] h-[350px] border border-[rgb(230,33,23)] shadow-2xl rounded-lg">
          <div className="space-y-3 w-[400px]">
            <h1 className="text-center ms-[150px] pt-0">
              <img src={logo} alt="" className="w-[110px] h-[80px] " />
            </h1>
            <div className="text-5xl  font-bold">
              45.8 <span>k</span>
            </div>
            {/* <h3 className='text-2xl'>Subscriper</h3> */}
            <h1 className="text-xl">Subscriber</h1>
            <div className="w-[250px]  mx-auto bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-[rgb(230,33,23)] text-xs font-medium text-white-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "70%" }}
              >
                {" "}
                85%
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-2xl  rounded-lg border border-[rgb(230,33,23)] ">
          <FollowerChart className="w-full h-full " />
        </div>
        <div className=" h-[400px] pt-[100px]">
          <CountryFollower className="text-center " />
        </div>
      </div>
    </>
  );
}
