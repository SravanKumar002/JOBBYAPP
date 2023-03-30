import {AiFillStar} from 'react-icons/ai'
import {IoLocationSharp, IoBagRemoveSharp} from 'react-icons/io5'

import './index.css'

const SimilarJobs = props => {
  const {eachSimilarJob} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = eachSimilarJob

  return (
    <li className="similar-job-card">
      <div className="logo-container">
        <img
          alt="similar job company logo"
          className="company-logo"
          src={companyLogoUrl}
        />
        <div>
          <h1 className="title-heading">{title}</h1>
          <div className="star-container">
            <AiFillStar className="star-icon" />
            <p className="rating mt-3">{rating}</p>
          </div>
        </div>
      </div>
      <div className="middle-wise-container">
        <div className="middle-container">
          <IoLocationSharp className="location-icon" />
          <p className="rating mt-3">{location}</p>
        </div>

        <div className="middle-container pr-4">
          <IoBagRemoveSharp className="location-icon" />
          <p className="rating mt-3">{employmentType}</p>
        </div>
      </div>
      <hr className="line" />
      <h1 className="description">Description</h1>
      <p className="description-paragraph">{jobDescription}</p>
    </li>
  )
}

export default SimilarJobs
