import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';


function VideoSidebar({ likes,shares,messages }) {

    const [liked , setLiked] = useState(false);

    return (
        <div className='videoSidebar'>
            <div className='videoSidebar_icons'>
                    {liked ? (
                        <FavoriteIcon style={{fontSize:40}} onClick={(e) => setLiked(false)}/>
    ):(
        <FavoriteBorderIcon style={{fontSize:40}} onClick={(e) => setLiked(true)} />
    )
}

            <p>
                { liked ? likes+1 : likes}
                </p>
            </div>
            <div className='videoSidebar_icons'>
                <CommentIcon style={{fontSize:40}}/>
                <p>{messages}</p>
            </div>
            <div className='videoSidebar_icons'>
                <ShareIcon style={{fontSize:40}}/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
