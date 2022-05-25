import Table from "./components/Table";
import RowList from "./components/RowList";
import CreateForm from "./components/CreateForm";
import Modal from "./components/Modal";
import data from "./data/data.json";
import { useState } from "react";

function App() {
  const [heroData, setHeroData] = useState(data);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({
    name: "",
    age: "",
    secretIdentity: "",
    power: "",
    index: ""
  });

  const onSave = (forma) => {
    const copyData = { ...heroData };
    copyData.members.push(forma);
    setHeroData(copyData);
  };
  const handleDelete = (index) => {
    console.log(index);
    const copyData = { ...heroData };
    copyData.members.splice(index, 1);
    setHeroData(copyData);
  };
  // const handleEdit = (index) =>
  const editForm = (name, age, secretIdentity, power, index) => {
    setEdit(true);
    setEditData({ name: name, age: age, secretIdentity: secretIdentity, power: power, index: index });
  };
  const closeEdit = () => {
    setEdit(false);
  };
  const editFinish = (data, index) => {
    setEdit(false)
    const copyData = { ...heroData };
    copyData.members[index]= data;
    setHeroData(copyData)
  }

  return (
    <div className="jumbotron text-center">
      <Table
        squad={heroData.squadName}
        town={heroData.homeTown}
        base={heroData.secretBase}
      >
        <RowList
          Data={heroData.members}
          delete={handleDelete}
          edit={editForm}
        />
      </Table>
      <CreateForm save={onSave} />
      {edit && <Modal close={closeEdit} editing={editData} editFinish={editFinish} />}
    </div>
  );
}

export default App;
