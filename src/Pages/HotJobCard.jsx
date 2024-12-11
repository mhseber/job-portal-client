import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
const HotJobCard = ({ job }) => {
    const { title, company, company_logo, requirements, description, location, salaryRange } = job
    return (
        <div className="card card-compact bg-base-100  border-4 border-white shadow-xl shadow-white">
            <div className="flex gap-2 m-2">
                <figure>
                    <img
                        className="w-16"
                        src={company_logo}
                        alt="logo" />
                </figure>
                <div>
                    <h4 className="text-2xl">{company}</h4>
                    <p className="flex gap-1 items-center"><FaMapMarkerAlt />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge bg-white text-black">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {
                        requirements.map(skill => <p
                            className="border rounded-md text-center px-2 hover:text-black hover:bg-white"
                        >{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center mt-4">
                    <p className="flex items-center"> Salary: <BsCurrencyDollar /> {salaryRange.min}-{salaryRange.max}{salaryRange.currency}</p>
                    <button className="btn btn-primary text-white">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;