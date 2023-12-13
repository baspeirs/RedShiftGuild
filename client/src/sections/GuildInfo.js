import React from "react";
import '../styles/GuildInfo.css';
import { AdminCard } from "../common/AdminCard";
import { RaidGroupCard } from "../common/RaidGroupCard";
import { useSelector } from "react-redux";

export const GuildInfo = () => {
    const admins = useSelector(state => state.admins.admins);
    return (
        <>
            <h2 className="section-header">Guild Information</h2>
            <section id="guild-info">
                <div id="guild-admins">
                    <h3 id="admin-header">Admins</h3>
                    {admins.map(({ admin, role, quote }) => {
                        return <AdminCard
                            admin={admin}
                            role={role}
                            quote={quote}
                        />
                    })};
                </div>
                <div id="raid-info">
                    <h3>Raid Schedule</h3>
                    <p>Server Time (ST) is the same as Eastern Standard Time</p>
                    <RaidGroupCard />
                    <div>
                        <p>Groups may also organize for Kara and Classic Raid Content (just for fun)</p>
                        <p>Utilize discord chats for non-weekly raids, guild rquests, and general nonsense</p>
                    </div>

                </div>
            </section>
        </>

    )
}