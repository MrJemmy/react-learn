import Table from "react-bootstrap/Table";

const students = [
  {
    name: "Jaimin",
    email: "jaimin@gmail.com",
    address: [
      { house_no: 30, city: "Ahmedabad", country: "India" },
      { house_no: 31, city: "Ahmedabad", country: "India" },
      { house_no: 32, city: "Ahmedabad", country: "India" },
    ],
  },
  {
    name: "Gunjan",
    email: "gunjan@gmail.com",
    address: [
      { house_no: 30, city: "Ahmedabad", country: "India" },
      { house_no: 31, city: "Ahmedabad", country: "India" },
      { house_no: 32, city: "Ahmedabad", country: "India" },
    ],
  },
  {
    name: "Shivam",
    email: "shivam@gmail.com",
    address: [
      { house_no: 30, city: "Ahmedabad", country: "India" },
      { house_no: 31, city: "Ahmedabad", country: "India" },
      { house_no: 32, city: "Ahmedabad", country: "India" },
    ],
  },
  {
    name: "Harsh",
    email: "harsh@gmail.com",
    address: [
      { house_no: 30, city: "Ahmedabad", country: "India" },
      { house_no: 31, city: "Ahmedabad", country: "India" },
      { house_no: 32, city: "Ahmedabad", country: "India" },
    ],
  },
];

function Students() {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, id) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Table>
                    <thead>
                      <tr>
                        <th>House No.</th>
                        <th>City</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.address.map((inner_item, inner_id) => {
                        return (
                          <tr key={inner_id}>
                            <td>{inner_item.house_no}</td>
                            <td>{inner_item.city}</td>
                            <td>{inner_item.country}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Students;
