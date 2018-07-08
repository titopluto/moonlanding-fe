import React from "react"
import "../../static/css/pageContentStyles.css"
import {FaQuoteLeft, FaQuoteRight} from "react-icons/lib/fa/"


export const PageContent = (props) => (
  <div className=" content-wrapper container">
    <div className="card">
      <div className="card-block">
        <h3 className="card-title text-center">The Dalhousie Internetworking Web Portal</h3>
        <p className="card-blockquote">
          <FaQuoteLeft/>
          This site is an online gateway to connect to the state of art lab facility of the first graduate program in
          the world that focuses on Internetworking. The founding of this program and laboratory facility was led by
          Dr.William Robertson.
          The Internetworking laboratory is equipped with products from major vendors of networking industry such as
          Cisco and Juniper. The laboratory equipment handles advanced network technologies includes routing, switching,
          security, QoS, network management, data storage, wireless and voice.
          The Internetworking laboratory serves as the basic source of hands on experience and practical knowledge about
          current technologies for our students.
          <FaQuoteRight/>
        </p>

      </div>
    </div>
  </div>
)

export default PageContent
