import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddJob = () => {
    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries())
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const { min, max, currency, ...newJob } = initialData;
        console.log(newJob)
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        console.log(newJob);

        fetch('http://localhost:5000/job', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Has been added !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    Navigate('/myPostedJobs')
                }
            })
    };
    return (
        <div>
            <h2 className="text-3xl">Post a new Job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Job title"
                        className="input input-bordered" required />
                </div>
                {/* job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select defaultValue={"Pick a Job Field"} className="select select-ghost w-full max-w-xs">
                        <option disabled>Pick a Job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </div>
                {/* salary range */}
                <p className="mt-4">Salary Range</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input
                            type="text"
                            name="min"
                            placeholder="min"
                            className="input input-bordered" required />

                    </div>
                    <div className="form-control">

                        <input
                            type="text"
                            name="max"
                            placeholder="max"
                            className="input input-bordered" required />

                    </div>
                    <div className="form-control">

                        <select defaultValue={"Currency"} name="currency" className="select select-ghost w-full max-w-xs">
                            <option disabled>Currency </option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                            <option>Teaching</option>
                        </select>
                    </div>
                </div>
                {/* Job Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>

                    <textarea
                        className="textarea textarea-bordered"
                        name="description"
                        placeholder="job description" required></textarea>
                </div>
                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input
                        type="text"
                        name="company"
                        placeholder="company name"
                        className="input input-bordered" required />
                </div>
                {/* Requirements*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>

                    <textarea
                        className="textarea textarea-bordered"
                        name="requirements"
                        placeholder="put each requirements in a new line" required></textarea>
                </div>
                {/* responsibilities*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>

                    <textarea
                        className="textarea textarea-bordered"
                        name="responsibilities"
                        placeholder="write each responsibility in a new line" required></textarea>
                </div>
                {/* HR Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input
                        type="text"
                        name="hr_email"
                        placeholder="HR Email"
                        className="input input-bordered" required />
                </div>
                {/* application Deadline*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input
                        type="date"
                        name="applicationDeadline"
                        placeholder="Deadline"
                        className="input input-bordered" required />
                </div>
                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input
                        type="text"
                        name="company_logo"
                        placeholder="Company Logo URL"
                        className="input input-bordered" required />
                </div>
                {/* submit button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit </button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;