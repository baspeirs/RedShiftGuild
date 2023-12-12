import React from "react";
import '../styles/GuildInfo.css';
import { AdminCard } from "../common/AdminCard";
import { RaidGroupCard } from "../common/RaidGroupCard";

export const GuildInfo = () => {

    return (
        <>
            <h2 className="section-header">Guild Information</h2>
            <section id="guild-info">
                <div id="guild-contacts">
                    <h3>Admins</h3>
                    <AdminCard />
                    <AdminCard />
                    <AdminCard />
                </div>
                <div id="raid-info">
                    <h3>Raid Schedule</h3>
                    <p>Server Time (ST) is the same as Eastern Standard Time</p>
                    <RaidGroupCard />
                    <p>Groups may also organize for Kara and Classic Raid Content (just for fun)</p>
                    <p>Utilize discord chats for non-weekly raids, guild rquests, and general nonsense</p>
                </div>
            </section>
        </>

    )
}