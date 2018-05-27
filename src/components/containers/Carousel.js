import { connect } from "react-redux"
import Carousel from "../ui/Carousel"
import {fetchCarousel} from "../../actions";

const mapStateToProps = (state) => {
  return {carouselList: state.carousel}
}

export default connect(mapStateToProps, {fetchCarousel})(Carousel)


