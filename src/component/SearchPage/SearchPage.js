import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

import './SearchPage.css';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AAUvwngFdQC3gzSlXOoyLsFL8kPeWFI-hz9C8mKR4GEeFA=s88-c-k-c0x00ffffff-no-rj"
                channel="ChonoLight"
                verified
                subs="230K"
                noOfVideo={1000}
                description="Hello. I'm a content creator, I also create beautiful videos Piano Relaxing Music on youtube. Hope to help people like me to relax and get back to your memories.
                Videos feature relaxing music that is ideal for sleep, study, meditation, zen, and yoga."
            />

            <hr />
            <VideoRow 
                views="2M"
                subs="700K"
                description="Hello. I'm a content creator, I also create beautiful videos Piano Relaxing Music on youtube. Hope to help people like me to relax and get back to your memories.
                Videos feature relaxing music that is ideal for sleep, study, meditation, zen, and yoga."
                timestamp="1 hours ago"
                channel="ChonoLight"
                title="Norway AMAZING Beautiful Nature with Relaxing Music and sound, 4k Ultra HD| Europe beautiful"
                image={`https://i.ytimg.com/vi/SMKPKGW083c/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBSEClxPK3MqcFgj2-BY3B-K-Gq5Q`}
            />

            <VideoRow 
                title="【4K】26 Countries of Beautiful EUROPE from Above 2020 | Cinematic Wolf Aerial™ Drone Film"
                views="7,339,810 views"
                subs="100K"
                timestamp="8 months ago"
                channel="One Man Wolf Pack"
                image={`https://i.ytimg.com/vi/oyFS7mb0zOI/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC0ZKdufgIHCwiQPRaZMjFdCqZ2Mg`}
                description="【4K】26 Countries of Beautiful EUROPE from Above 2020 | Cinematic Wolf Aerial™ Drone Film"
            />

            <VideoRow 
                views="2M"
                subs="700K"
                description="Hello. I'm a content creator, I also create beautiful videos Piano Relaxing Music on youtube. Hope to help people like me to relax and get back to your memories.
                Videos feature relaxing music that is ideal for sleep, study, meditation, zen, and yoga."
                timestamp="1 hours ago"
                channel="ChonoLight"
                title="Norway AMAZING Beautiful Nature with Relaxing Music and sound, 4k Ultra HD| Europe beautiful"
                image={`https://i.ytimg.com/vi/SMKPKGW083c/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBSEClxPK3MqcFgj2-BY3B-K-Gq5Q`}
            />


            <VideoRow 
                title="【4K】26 Countries of Beautiful EUROPE from Above 2020 | Cinematic Wolf Aerial™ Drone Film"
                views="7,339,810 views"
                subs="100K"
                timestamp="8 months ago"
                channel="One Man Wolf Pack"
                image={`https://i.ytimg.com/vi/oyFS7mb0zOI/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC0ZKdufgIHCwiQPRaZMjFdCqZ2Mg`}
                description="【4K】26 Countries of Beautiful EUROPE from Above 2020 | Cinematic Wolf Aerial™ Drone Film"
            />
        </div>
    )
}

export default SearchPage
