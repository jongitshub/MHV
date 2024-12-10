

function PersonalInfoCard() {
  return (
    <>
    <div className="w-1/3 card card-side bg-base-100 shadow-xl">
  <figure>
    <img 
      src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Personal Information</h2>
    <p>Click the button to update your information.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Update</button>
    </div>
  </div>
</div>
      
    </>
  )
}

export default PersonalInfoCard
