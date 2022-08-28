import React from "react";
import ProfileImage from '../img/profileImg.jpg';
import cover from '../img/cover.jpg';
import './ProfileCard.css'

const ProfileCard = () => {
    return(
        <div className="ProfileCard">
            <div className="ProfileImage">
                <img src={cover} alt="" />
                <img src={ProfileImage} alt="" />
            </div>

            <div className="ProfileName">
                <span> Dede Syarifudin</span>
                <span>Teknik Komputer Dan Jaringan</span>
               
            </div>

            <div className="Follower">
                <hr />
               <div>
                <div className="follow">
                    <span>16,000</span><br />
                    <span>followers</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>1</span><br />
                    <span>following</span>
                </div>
               </div>
               <hr />
            </div>
            
        </div>
    )
}

export default ProfileCard;