import axios from "axios";
import { useEffect, useState } from "react";

const UseJobs = (sort, search) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/job?sort=${sort}&search=${search}`).then(res => {
            setLoading(false);
            setJobs(res.data);
        });
    }, [sort, search]);
    return [jobs, loading];
};

export default UseJobs;