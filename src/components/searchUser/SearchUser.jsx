import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchUser } from "../../features/userSlice";

const SearchUser = () => {
  const [searchData, setSearchData] = useState("");
  console.log("search data", searchData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    <div className="">
      <input
        className="w-md border-2 border-white p-2 m-5 rounder text-white"
        type="text"
        placeholder="Search User"
        onChange={(e) => setSearchData(e.target.value)}
        value={searchData}
      />
    </div>
  );
};
export default SearchUser;
