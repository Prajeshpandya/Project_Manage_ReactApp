import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject(props) {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();

  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = duedate.current.value;

    if (
      title.current.value === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    props.onAdd({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDueDate,
    });
    
  };
    
  return (
    <>
      <Modal ref={modal}>
        <h2 className="mb-4 text-stone-800 font-bold">InValid Input !!</h2>
        <p className="mb-4 text-stone-800 ">Please fill the input fields..</p>
        <p className="mb-4 text-stone-800">Add all the data of project.. </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4 ">
          <li>
            <button onClick={props.onCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800  text-stone-50 hover:bg-stone-500"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label={"Title"} />
          <Input ref={description} label={"Description"} Istextarea />
          <Input type="date" ref={duedate} label={"Due Date"} />
        </div>
      </div>
    </>
  );
}
