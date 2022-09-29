import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./AddressModal.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const emptyForm = {
  id: uuid(),
  name: "",
  lastName: "",
  houseNo: "",
  address: "",
  city: "",
  state: "",
  phone: "",
};

export function AddressModal({ open, setOpen, addressState, addressDispatch }) {
  const [addressForm, setAddressForm] = useState(emptyForm);

  /**
   *
   * @returns closes Modal
   */
  const handleClose = () => setOpen(false);

  /**
   *
   * @param {*} e
   * Submits Form
   */
  const addressFormSubmit = (e) => {
    e.preventDefault();
    addressDispatch({ type: "ADD_ADDRESS", payload: addressForm });
    setAddressForm(emptyForm);
    handleClose();
  };
  /**
   * Fills form with dummy values
   */

  const dummyAddressTrigger = () => 
    setAddressForm({
      id: uuid(),
      name: "Happy",
      lastName: "Singh",
      houseNo: "12",
      address: "Happy Palace, Near Sad Path",
      city: "Chandigarh",
      state: "Punjab",
      phone: "9435355879",
    });
  

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <div className='flex-col formContainer'>
            <h4 className='mt-1 ml-auto mr-auto'> Add New Address</h4>
            <form
              id='addressForm'
              onSubmit={addressFormSubmit}
              className='mt-1 formBox'>
              <input
                value={addressForm.name}
                type='text'
                className='inputBox py-1 mt-1'
                placeholder='Enter First Name'
                onChange={(e) =>
                  setAddressForm({ ...addressForm, name: e.target.value })
                }
              />
              <input
                value={addressForm.lastName}
                type='text'
                className='inputBox py-1 mt-1'
                placeholder='Enter Last Name'
                onChange={(e) =>
                  setAddressForm({ ...addressForm, lastName: e.target.value })
                }
              />
              <input
                value={addressForm.houseNo}
                type='text'
                className='inputBox py-1 mt-1'
                placeholder='House No:'
                onChange={(e) =>
                  setAddressForm({ ...addressForm, houseNo: e.target.value })
                }
              />
              <input
                value={addressForm.address}
                type='text'
                className='inputBox py-1 mt-1'
                placeholder='Address'
                onChange={(e) =>
                  setAddressForm({ ...addressForm, address: e.target.value })
                }
              />
              <input
                value={addressForm.city}
                type='text'
                className='inputBox py-1 mt-1'
                placeholder='City'
                onChange={(e) =>
                  setAddressForm({ ...addressForm, city: e.target.value })
                }
              />
              <input
                value={addressForm.state}
                type='text'
                className='inputBox py-1 mt-1'
                placeholder='State'
                onChange={(e) =>
                  setAddressForm({ ...addressForm, state: e.target.value })
                }
              />
              <input
                value={addressForm.phone}
                type='Number'
                className='inputBox py-1 mt-1'
                placeholder='Enter Phone Number'
                onChange={(e) =>
                  setAddressForm({ ...addressForm, phone: e.target.value })
                }
              />
              {console.log("Mstate",addressState,"state", addressForm)}
            </form>
            <div className='btnBox flex-row flex-wrap ml-auto mr-auto'>
              <button
                onClick={dummyAddressTrigger}
                className=' themetext btn link-btn btn-primary-link ml-2 mr-1 py-1'>
                Dummy Details
              </button>
              <button
                type='Submit'
                form='addressForm'
                className='themetext btn link-btn btn-primary-link ml-2 py-1 px-3'>
                Submit
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
