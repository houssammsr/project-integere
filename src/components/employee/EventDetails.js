import "./EventDetails.css";
const EventDetails = ({ onClose }) => {
  return (
    <div className="event-details">
      <div className="event-info">
        <img className="event-img-icon" alt="" src="/eventimg1@2x.png" />
        <div className="event-title-container">
          <b className="event-title">Omra Juillet 2023</b>
          <div className="organisation-name">ESI-SBA SW</div>
        </div>
      </div>
      <div className="description">
        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam maximus dui nec tortor molestie porttitor. Duis odio magna,
        elementum nec purus id, lobortis viverra tortor. Aliquam vel efficitur
        felis. Suspendisse malesuada eros a lobortis pellentesque. Nunc Aliquam
        vel efficitur felis. Suspendisse malesuada eros a lobortis pellentesque.
        NuncAliquam vel efficitur felis. Suspendisse malesuada eros a lobortis
        pellentesque. NuncAliquam vel efficitur felis. Suspendisse lobortis
        pellentesque. NuncAliquam vel efficitur felis. Suspendisse lobortis
        pellentesque. NuncAliquam vel efficitur felis. Suspendisse.
      </div>
    </div>
  );
};

export default EventDetails;
