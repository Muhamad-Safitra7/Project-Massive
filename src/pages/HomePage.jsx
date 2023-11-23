import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faListCheck,
	faPeopleLine,
	faBullhorn,
	faCircleCheck,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import "./css/HomePage.css"

export default function Beranda() {
	return (
		<main id="beranda">
			<section id="hero">
				<div className="container text-center " style={{marginTop: "-80px", }}>
					<h3>
						KELAS PUBLIC SPEAKING ONLINE
					</h3>
					<br />
					<h1>
						Bangun Kepercayaan Diri Dengan  <br />
						Metode Online
					
					</h1>
					<br />
					<p>
						Atasi Rasa Takut Bicara Dengan Kelas Public Speaking Selama
						<br /> Sebulan dan dapatkan Garansi Mengulang Kelas, Dibimbing secara 
						<br /> langsung oleh Mentor dan dapatkan Recording kelas saat belajar.
					</p>
					<Link to={"/program"} className="btn btn-primary">
						Gabung Sekarang
					</Link>
				</div>
			</section>


			<div className="container">
				

				<section id="benefit">
					<h2 className="text-center mb-5">BELAJAR DI BIJAK CUAN</h2>
					<br />
					<div className="row gap-2 gap-lg-0 align-items-center">
						<div className="col-lg-4">
							<div >
								<div className="card-header text-center" style={{backgroundColor: "gray",border: "1px solid black", borderRadius: "10px",}}>
								<FontAwesomeIcon icon={faPeopleLine} /> 
									<h4 className="text-center">Kursus Public Speaking</h4>
								</div>
								<div className="card-body"></div>
								<div className="card-footer" style={{backgroundColor: "lightgray",border: "1px solid black", borderRadius: "10px",marginTop: "-15px",}}>
									<p className="text-center">Menyediakan Kursus Untuk Public<br /> 
									Speaking dengan metode<br /> 
									pembelajaran secara daring </p>

									<Link to={"/program"} >
										See More
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div >
								<div className="card-header text-center" style={{backgroundColor: "gray",border: "1px solid black", borderRadius: "10px",}}>
								<FontAwesomeIcon icon={faPeopleLine} /> 
									<h4 className="text-center">Kursus Public Speaking</h4>
								</div>
								<div className="card-body"></div>
								<div className="card-footer" style={{backgroundColor: "lightgray",border: "1px solid black", borderRadius: "10px",marginTop: "-15px",}}>
									<p className="text-center">Menyediakan Kursus Untuk Public<br /> 
									Speaking dengan metode<br /> 
									pembelajaran secara daring </p>

									<Link to={"/program"} >
										See More
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div >
								<div className="card-header text-center" style={{backgroundColor: "gray",border: "1px solid black", borderRadius: "10px",}}>
								<FontAwesomeIcon icon={faPeopleLine} /> 
									<h4 className="text-center">Kursus Public Speaking</h4>
								</div>
								<div className="card-body"></div>
								<div className="card-footer" style={{backgroundColor: "lightgray",border: "1px solid black", borderRadius: "10px",marginTop: "-15px",}}>
									<p className="text-center">Menyediakan Kursus Untuk Public<br /> 
									Speaking dengan metode<br /> 
									pembelajaran secara daring </p>

									<Link to={"/program"} >
										See More
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div >
								<div className="card-header text-center" style={{backgroundColor: "gray", border: "1px solid black", borderRadius: "10px",}}>
								<FontAwesomeIcon icon={faBullhorn} />
									<h4 className="text-center">Kursus Public Speaking</h4>
								</div>
								<div className="card-body"></div>
								<div className="card-footer" style={{backgroundColor: "lightgray",border: "1px solid black", borderRadius: "10px",marginTop: "-15px",}}>
									<p className="text-center">Menyediakan Kursus Untuk Public<br /> 
									Speaking dengan metode<br /> 
									pembelajaran secara daring </p>

									<Link to={"/program"} >
										See More
									</Link>
								</div>
							</div>
						</div>
						<br /><br />
						<h2 className="text-center mb-5">BELAJAR DI BIJAK CUAN</h2>
						<br />

					<div className="row d-none d-lg-flex gap-5 justify-content-between mb-5">
						<div className="col-lg-3 d-flex align-items-center gap-3" img src="../assets/home/1.png" style={{border: "1px solid black", borderRadius: "10px",}}>
						</div>
						<div className="col-lg-3 d-flex align-items-center gap-3" img src="./assets/home/1.png" style={{border: "1px solid black", borderRadius: "10px",}}>
						</div>
						<div className="col-lg-3 d-flex align-items-center gap-3">
							<FontAwesomeIcon icon={faCircleCheck} />
							<p>
								Data Yang Aktual Berdasarkan <b>Riset Mendalam</b>
							</p>
						</div>
						<div className="col-lg-3 d-flex align-items-center gap-3" img src="../assets/home/1.png" style={{border: "1px solid black", borderRadius: "10px",}}>
						</div>
						<div className="col-lg-3 d-flex align-items-center gap-3" img src="./assets/home/1.png" style={{border: "1px solid black", borderRadius: "10px",}}>
						</div>
						<div className="col-lg-3 d-flex align-items-center gap-3">
							<FontAwesomeIcon icon={faCircleCheck} />
							<p>
								Data Yang Aktual Berdasarkan <b>Riset Mendalam</b>
							</p>
						</div>
						<div className="col-lg-3 d-flex align-items-center gap-3" img src="/assets/home/1.png" style={{border: "1px solid black", borderRadius: "10px",}}>
						</div>
						<div className="col-lg-3 d-flex align-items-center gap-3" img src="./assets/home/8.png" style={{border: "1px solid black", borderRadius: "10px",}}>
						</div>
						<div className="col-lg-3 d-flex align-items-center gap-3">
							<FontAwesomeIcon icon={faCircleCheck} />
							<p>
								Data Yang Aktual Berdasarkan <b>Riset Mendalam</b>
							</p>
						</div>
						<div className="col-lg-3 d-flex align-items-center gap-3" img src="../assets/home/1.png" style={{border: "1px solid black", borderRadius: "10px",}}>
						</div>
						<div className="col-lg-3 d-flex align-items-center gap-3"alt="img" src="./assets/home/1.png" style={{border: "1px solid black", borderRadius: "10px",}}>
						</div>
						<div className="col-lg-3 d-flex align-items-center gap-3">
							<FontAwesomeIcon icon={faCircleCheck} />
							<p>
								Data Yang Aktual Berdasarkan <b>Riset Mendalam</b>
							</p>
						</div>
					</div>
					</div>
				</section>

			</div>
		</main>
	)
}
