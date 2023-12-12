import React from 'react';

const Profil = () => {
  const handleCancel = () => {
    console.log('Cancel button clicked');
  };
  
  const handleConfirm = () => {
    console.log('Confirm button clicked');
  };

  return (
    <section>
      <br />
      <br />
      <br />
      <div className="profill" id="profil">
        <div className="borderp">
        <div className="container pt-5 pb-5">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid black",
                padding: "35px",
                marginBottom:"-5px"
              }}
            >
          <div className="profil">
            <div className="container text-center">
              <div classname=" d-flex justfy-content-around">
              <br />
              <br />
              <img src="assets/Foto user/Profile user.jpg" className= "card-img-top"alt="" />
            
              <h1>Jasmine Amelia</h1>
              <p>
                Fresh Graduate IT Engineer
                <br />
                <br />
                Jakarta, Indonesia
                <br />
                Level: 1
              </p>
            
              <button className="tmb1">
                Change Profile Picture
                <i className='bx bxs-pencil' style={{ color: '#fffdfd', textAlign:"justify",  }}></i>
              </button>
              <button className="tmb2">
                On Edit
                <i className='bx bxs-pencil' style={{ color: '#fffdfd' }}></i>
              </button>
            </div>
            </div>
            </div>
            </div>
            <div className="container text-left" style={{ marginBottom: "10px", textAlign: "left" }}>
            <div className="container pt-5 pb-5">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid black",
                padding: "70px",
                width:"100%"
              }}
            >
              <h1>Profile Data </h1>
              <br />
              <div className="kotak">
                <p>
                  Nama : <input type="text" placeholder="Jasmine Amelia" />
                </p>
                <br />
                <p>
                  Address : <input type="text" placeholder="Soekarno Street No.23 Bekasi" />
                </p>
                <br />
                <p>
                  Gender : <input type="text" placeholder="Female" />
                </p>
                <br />
                <p>
                  Phone : <input type="number" placeholder="0812 8476 1829" />
                </p>
                <br />
                <p>
                  Gmail : <input type="email" placeholder="jasmineamelia@gmail.com" />
                </p>
                <br />
                <button onClick={handleCancel} className="tmb3">
                  Cancel
                </button>
                <button onClick={handleConfirm} className="tmb4">
                  Confirm
                </button>
                <br />
              </div>
            </div> 
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;