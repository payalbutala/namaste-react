import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // We will destructure to avoid repetitive writing -> resData.info
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  // const { resName, cuisine } = props;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h5 className="resto-name">{name}</h5>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{avgRating} starts</h6>
      <h6>{costForTwo}</h6>
      <h6>{sla?.deliveryTime} minutes</h6>
    </div>
  );
};

export default RestaurantCard;
