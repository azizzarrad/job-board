const jobData = {
    "featuredJobs": [
        {
            "id": 1,
            "title": "Senior Frontend Developer",
            "company": "ABC Tech Solutions",
            "location": "San Francisco, CA",
            "description": "We are looking for an experienced Senior Frontend Developer to join our dynamic team...",
            "applyLink": "https://example.com/apply/1"
        },
        {
            "id": 2,
            "title": "Full Stack Developer",
            "company": "TechCo Innovations",
            "location": "New York, NY",
            "description": "TechCo Innovations is seeking a talented Full Stack Developer to work on exciting projects...",
            "applyLink": "https://example.com/apply/2"
        },
        {
            "id": 3,
            "title": "Backend Engineer",
            "company": "XYZ Software",
            "location": "Seattle, WA",
            "description": "Join our Backend Engineering team and contribute to the development of cutting-edge software...",
            "applyLink": "https://example.com/apply/3"
        }
    ]
};


function populateFeaturedJobs() {
    const jobListingsContainer = document.querySelector('.job-listings');

    jobData.featuredJobs.forEach(job => {
        const jobListing = document.createElement('div');
        jobListing.classList.add('job-listing');

        const titleElement = document.createElement('h3');
        titleElement.textContent = job.title;

        const companyElement = document.createElement('p');
        companyElement.textContent = `Company: ${job.company}`;

        const locationElement = document.createElement('p');
        locationElement.textContent = `Location: ${job.location}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = job.description;

        const applyLinkElement = document.createElement('a');
        applyLinkElement.textContent = 'Apply Now';
        applyLinkElement.href = job.applyLink;

        jobListing.appendChild(titleElement);
        jobListing.appendChild(companyElement);
        jobListing.appendChild(locationElement);
        jobListing.appendChild(descriptionElement);
        jobListing.appendChild(applyLinkElement);

        jobListingsContainer.appendChild(jobListing);
    });
    function filterJobs() {
        const searchInput = document.querySelector('#job-search-input').value.toLowerCase();
        const jobListings = document.querySelectorAll('.job-listing');
    
        jobListings.forEach(jobListing => {
            const titleElement = jobListing.querySelector('h3');
            const title = titleElement.textContent.toLowerCase();
    
            if (title.includes(searchInput)) {
                jobListing.style.display = 'block';
            } else {
                jobListing.style.display = 'none'; 
            }
        });
    }
}


window.addEventListener('load', populateFeaturedJobs);
const searchInput = document.querySelector('#job-search-input');
searchInput.addEventListener('input', filterJobs);