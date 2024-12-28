import { useState } from "react";
import UseJobs from "../../Hooks/UseJobs";
import HotJobCard from "../HotJobCard";
import { BiSearch } from "react-icons/bi";

const AllJob = () => {
    const [sort, setSort] = useState(false);
    const [search, setSearch] = useState("");
    const [jobs, loading] = UseJobs(sort, search);
    // console.log(jobs);
    // console.log(sort);
    if (loading) {
        return <h2>Job is Loading</h2>
    }


    return (
        <div>
            <h1 className="py-5 text-4xl font-bold text-center">All Jobs</h1>
            <div className="w-11/12 mx-auto bg-base-200 gap-4 py-5 p-3 flex items-center ">
                <button
                    onClick={() => setSort(!sort)}
                    className={`btn btn-neutral ${sort && "btn-success"}`}
                >{sort == true ? "Sorted by Salary" : "Sort By Salary"}
                </button>
                <BiSearch></BiSearch>
                <input type="text"
                    onKeyUp={(e) => setSearch(e.target.value)}
                    className="input w-full max-w-2xl"
                    placeholder="Search Jobs by Location" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-20">
                {jobs?.map((job) => (
                    <HotJobCard key={job._id} job={job}></HotJobCard>
                ))}
            </div>
        </div>
    );
};

export default AllJob;