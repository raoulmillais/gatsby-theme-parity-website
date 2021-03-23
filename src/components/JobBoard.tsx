import React, { useEffect, useState } from 'react';

export default function JobBoard() {
  const [currentJobs, setCurrentJobs] = useState([]);
  useEffect(() => {
    fetch(`https://boards-api.greenhouse.io/v1/boards/parity/departments/`)
      .then(res => res.json())
      .then(({ departments }) => {
        const filteredDepartments = departments.filter((department: any) => department.jobs.length > 0);
        setCurrentJobs(filteredDepartments);
      })
      .catch(err => console.log('API ERROR: ', err));
  }, []);

  return (
    <>
      <div className="divide-y divide-black">
        {currentJobs.map((department: any) => {
          return (
            <>
              <div className="px-4 py-8 lg:flex lg:justify-between lg:py-12">
                <div className="lg:w-1/3">
                  <h3 className="mt-0">{department.name}:</h3>
                </div>
                <div className="divide-y divide-gray-200 lg:w-2/3">
                  {department.jobs.map((jobPost: any) => {
                    return (
                      <>
                        <div>
                          <a href={jobPost.absolute_url} target="_blank" rel="noreferrer" className="no-underline">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center transition duration-150 ease-in-out hover:bg-white px-2 pt-4 pb-2 md:p-2">
                              <div>
                                <h5 className="m-0 pb-2">{jobPost.title}</h5>
                                <p className="m-0">{jobPost.location.name}</p>
                              </div>
                              <div className="flex justify-end">
                                <p className="text-sm text-parityPink m-0">
                                  View Job <span className="hidden md:inline-block">&#8658;</span>
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

{
  /* <a href="/" target="_blank" rel="noreferrer" className="no-underline">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b transition duration-200 ease-in-out hover:bg-white px-2 pt-4 pb-2 md:p-2">
                    <div>
                      <h5 className="m-0 pb-2">Technical Documentation Manager (m/f/d)</h5>
                      <p className="m-0">Berlin, Germany</p>
                    </div>
                    <div className="flex justify-end">
                      <p className="text-sm text-parityPink m-0">
                        View Job <span className="hidden md:inline-block">&#8658;</span>
                      </p>
                    </div>
                  </div>
                </a> */
}
