import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    // console.log(id, user);

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        // console.log(linkedin, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume
        };
        fetch('https://job-portal-server-seven-psi.vercel.app/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')
                }
            });
    };
    return (

        <div className="card bg-base-100 w-full   shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Apply Now!</h1>
            <form onSubmit={submitJobApplication} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Linked In URL</span>
                    </label>
                    <input
                        type="url"
                        name="linkedin"
                        placeholder="linkedin url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github URL</span>
                    </label>
                    <input
                        type="URL"
                        name="github"
                        placeholder="github URL"
                        className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input
                        type="URL"
                        name="resume"
                        placeholder="resume URL"
                        className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>

    );
};

export default JobApply;