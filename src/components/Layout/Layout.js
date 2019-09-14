import React from 'react';
import styleClasses from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends React.Component {
    state = {
        isSideDrawerVisible: false
    }

    sideDrawerHandler = () => {
        this.setState((prevState) => {
            return { isSideDrawerVisible: !prevState.isSideDrawerVisible }
        });
    }

    closeSideDrawer = () => {
        if(this.state.isSideDrawerVisible) {
            this.setState({ isSideDrawerVisible: false });
        }
        
    }

    render() {
        return (
            <div className={styleClasses.Layout} onClick={this.closeSideDrawer}>
                <SideDrawer show={this.state.isSideDrawerVisible} />
                <Toolbar onDrawerToggleClick={this.sideDrawerHandler} />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}


export default Layout;