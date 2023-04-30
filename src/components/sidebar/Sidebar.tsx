import React from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarLeft">
                <div className="serverIcon">
                    <img src="./logo192.png" alt="" />
                </div>
                <div className="serverIcon">
                    <img src="./logo192.png" alt="" />
                </div>
            </div>
            <div className="sidebarRight">
                <div className="sidebarTop">
                    <h3>Discord</h3>
                    <ExpandMoreIcon />
                </div>
                <div className="sidebarChannels">
                    <div className="sidebarChannelsHeader">
                        <div className="sidebarHeader">
                            <ExpandMoreIcon />
                            <h4>テストチャンネル</h4>
                        </div>
                        <AddIcon className='sidebarAddIcon' />
                    </div>
                </div>
                <div className="sidebarChannelList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
                <div className="sidebarFooter">
                    <div className="sidebarAccount">
                        <img src="./icon.jpg" alt="" />
                        <div className="accountName">
                            <h4>kanon</h4>
                            <span>#4723</span>
                        </div>
                    </div>
                    <div className="sidebarVoice">
                        <MicIcon />
                        <HeadphonesIcon />
                        <SettingsIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
