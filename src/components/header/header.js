import React from 'react';
import './header.css';

const HeaderTitleItem = ['发现音乐', '我的音乐', '朋友', '商城', '音乐人', '下载客户端'];

class HeaderNavLi extends React.Component {
    render() {
        if (this.props.item === '下载客户端') {
            return (
                <li key={this.props.item} className="lst">
                    <span>
                        <a hidefocus="true" className="z-slt" href="/#">
                            <em>{this.props.item}</em>
                            <sub className="cor">&nbsp;</sub>
                        </a>
                    </span>
                    <sup className="hot">&nbsp;</sup>
                </li>
            )
        } else {
            return (
                <li key={this.props.item}>
                    <span>
                        <a hidefocus="true" href="/#">
                            <em>{this.props.item}</em>
                            <sub className="cor">&nbsp;</sub>
                        </a>
                    </span>
                </li>
            )
        }

    }
}

class HeaderNav extends React.Component {
    render() {
        const listItems = HeaderTitleItem.map((number) =>
            <HeaderNavLi item={number} key={number} />
        );
        return (
            <ul className="m-nav j-tflag" >{listItems}</ul>
        )
    }
}

class Header extends React.Component {

    render() {
        return (
            <div>
                <div className="music-top m-top">
                    <div className="content f-cb">
                        <h1 className="music-logo logo">
                            <a href="/#" hidefocus="true">网易云音乐</a>
                        </h1>
                        <HeaderNav />
                    </div>
                </div>
                <div className="m-subnav m-subnav-up f-pr j-tflag"></div>
            </div>
        )
    }
}

export default Header;