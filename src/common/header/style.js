import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0 
`
export const Logo = styled.div`
    position: absolute;
    height:56px;
    display:block;
    width:100px;
    background:url(${logoPic});
    background-size:contain;
    top:0;
    left:0;
`
export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right: 70px;
    box-sizing:box-content;
`
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left {
        float:left
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active {
        color:#ea6f5a;
    }
`
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .zoom {
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        &.focused{
            background:#777;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    border-radius:19px;
    margin-top:9px;
    padding:0 30px 0 20px;
    box-sizing:box-content;
    border:none;
    outline:none;
    background:#eee;
    font-size:14px;
    margin-left:20px;
    color:#666
    &::placeholder {
        color:#999;
    }
    &.focused {
        width:240px
    }
    &.slide-enter {
        width:160px
        transition:all .5s ease-out
    }
    &.slide-enter-active {
        width:240px;
    }
    &.slide-exit {
        width:240px
        transition:all .5s ease-out;
    }
    &.slide-exit-active {
        width:160px;
    }
`
export const SearchInfo = styled.div`
    position:absolute;
    background:#fff;
    left:25px;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,0.2)
`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696
`
export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        float:left;
        display:block;
        font-size:12px;
        margin-right:2px; 
        transition:.2s all ease-in;
        transform-origin:center center;
    }
`
export const SearchInfoList = styled.div`
    overflow:hidden;
`
export const SearchInfoItem = styled.a`
    padding: 0 5px;
    font-size:12px;
    line-height:20px;
    border:1px solid #ddd;
    margin-right:10px;
    margin-bottom:15px;
    color:#787878;
    border-radius:3px;
    float:left;
    display:block;
`
export const Addition = styled.div`
    height:56px;
    position:absolute;
    top:0;
    right:0
`
export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149
    }
    &.writing{
        color:#fff;
        background:#ec6149
    }
`

