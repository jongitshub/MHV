import { Link } from "react-router-dom"


function HomeDash() {
  return (
    <div className="bg-blue-50">
        <div className="flex space-x-2">
          <div className="card glass w-96 p-2">
          <figure>
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
          alt="car!" />
          </figure>
          <div className="card-body">
        <h2 className="card-title">Personal Information</h2>
        <p>Update your information here.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"><Link to="/update">Update Info</Link></button>
        </div>
          </div>
        </div>
        <div className="card glass w-96 p-2">
          <figure>
        <img
          src="https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg"
          alt="car!" />
          </figure>
          <div className="card-body">
        <h2 className="card-title">Pharmacy</h2>
        <p>Need to refill a prescription?</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link to="/pharmacy">Refill Now!</Link></button>
        </div>
          </div>
        </div>
        <div className="card glass w-96 p-2">
          <figure>
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/703/150/non_2x/speech-bubble-chat-message-icon-in-clipart-style-vector.jpg"
          alt="car!" />
          </figure>
          <div className="card-body">
        <h2 className="card-title">Messages</h2>
        <p>Need to talk to your provider?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Secure Messaging!</button>
        </div>
          </div>
        </div>
        <div className="card glass w-96 p-2">
          <figure>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5xLZP6DmTDeBqeo3HrOHW55dKTKBYrWP3Q&s"
          alt="car!" />
          </figure>
          <div className="card-body">
        <h2 className="card-title">Health Records</h2>
        <p>Looking for something? We'll help you find it!</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"><Link to="/records">Check Records</Link></button>
        </div>
          </div>
        </div>
        </div>

        
    </div>
    
  )
}

export default HomeDash
