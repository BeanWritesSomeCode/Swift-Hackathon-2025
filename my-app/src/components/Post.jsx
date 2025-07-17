import React from "react";

export function Post({headline, text, avatar})
{
    return (
        <div className="post">
            <div className="post-header">
            <img src={avatar} alt="Avatar" className="avatar-post" />
            <h2>{headline}</h2>
            </div>
            <p>{text}</p>
        </div>
    );
}
export default Post