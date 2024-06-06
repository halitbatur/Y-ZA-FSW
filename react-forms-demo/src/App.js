import { useState } from "react";

function App() {
  // const [name, setName] = useState("Tod");
  // const [lastName, setLastName] = useState("Tod");
  // const [email, setEmail] = useState("Tod");
  const [members, setMembers] = useState("");
  const [formData, setFormData] = useState({
    name: " ",
    lastName: "",
    email: "",
  });

  // console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMembers([...members, formData]);
    // setFormData({name: '', lastName:'', email:''})
  };

  console.log(members);

  return (
    <div>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Member Form</h2>
            <div className="Field">
              <label htmlFor="name">
                First name <sup>*</sup>
              </label>
              <input
                type="text"
                value={formData.name}
                id="name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="Field">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                value={formData.lastName}
                id="lastName"
                name="lastName"
                onChange={handleChange}
              />
            </div>
            <div className="Field">
              <label htmlFor="email">
                Email address <sup>*</sup>
              </label>
              <input
                type="text"
                value={formData.email}
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="btn">
              <button type="submit">Create Member</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="members">
        {members.length > 0 ? (
          <ul>
            {members.map((member, index) => (
              <li key={index}>
                {member.name} {member.lastName} {member.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>No memebers yet</p>
        )}
      </div>
    </div>
  );
}

export default App;
