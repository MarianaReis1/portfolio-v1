import IpTrackerImg from '../media/IpTrackerImg.png'

export default function IpTracker (props) {
    console.log(props)
    return (
        <div className="projects__ipTracker" >
            <img className="projects__ipTracker-img" src={IpTrackerImg} alt={props.data.gifAlt} />
            <h4 className="projects__ipTracker-title">{props.data.title}</h4>
            <h6 className="projects__ipTracker-subtitle">{props.data.tools}</h6>
            <span>
                <div className="projects__ipTracker-seeMore">See More</div>
                <p className="projects__ipTracker-description">{props.data.quickDescription}</p>
            </span>
        </div>
    )
}
