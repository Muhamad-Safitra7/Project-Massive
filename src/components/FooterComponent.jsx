import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faFacebookF,
	faTwitter,
	faInstagram,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons"

export default function FooterComponent() {
	return (
		<footer className="border-top" style={{backgroundColor:"black",}}>
			<div className="container footer-content" style={{ height:"40px"}}>
					<div>
						<div>
							
							<p style={{ color: "white",position: "relative", top: "12px"}}> © 2023 NusaTech | Powered by NUSATECH</p>

						<div className="d-flex flex-row gap-2" style={{ marginLeft:"1000px", marginTop: "-40px"}}>
							<Link to={"#"} style={{fontSize:"30px", color:"white"}}>
								<FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
							</Link>
							<Link to={"#"} style={{fontSize:"30px", color:"white"}}>
								<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
							</Link>
							<Link to={"#"} style={{fontSize:"30px", color:"white"}}>
								<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
							</Link>
							<Link to={"#"} style={{fontSize:"30px", color:"white"}}>
								<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
							</Link>
						</div>
					</div>
				</div>
				</div>
		</footer>
	)
}
