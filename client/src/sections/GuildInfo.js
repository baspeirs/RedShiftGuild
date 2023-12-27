import React from "react";
import '../styles/GuildInfo.css';
import { AdminCard } from "../common/AdminCard";
import { RaidGroupCard } from "../common/RaidGroupCard";
import { useSelector } from "react-redux";

export const GuildInfo = () => {
    const admins = useSelector(state => state.admins.admins);
    return (
        <>
            <h2 className="section-header">GUILD INFORMATION</h2>
            <div className='section-subheader'>
                <p>Gaze upon your royalty and ponder the requirements set before you</p>
            </div>
            <section id="guild-info">
                <div id="guild-admins">
                    <h2 id="admin-header">Admins</h2>
                    {admins.map(({ admin, role, quote }, index) => {
                        return <AdminCard
                            key={index}
                            admin={admin}
                            role={role}
                            quote={quote}
                        />
                    })};
                </div>
                <div id="raid-info">
                    <h2>Raid Schedule</h2>
                    <p>Server Time (ST) is the same as Eastern Standard Time</p>
                    <RaidGroupCard />
                    <div id="raid-info-footer">
                        <p>Groups may also organize for Kara and Classic Raid Content (just for fun)</p>
                        <p>Utilize discord chats for non-weekly raids, guild rquests, and general nonsense</p>
                    </div>

                </div>
            </section>
        </>

    )
}
