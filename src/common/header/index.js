import React, { Component }from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
}from './style';


class Header extends Component {
    getListArea =(show)  => {
        const { list,page,totalPage,handleMouseIn,handleMouseOut,changePage } = this.props;
        const pageList = [];
        const jsList = list.toJS();
        if (jsList.length > 0) {
            for (let i = (page-1) * 10; i < page * 10 ;i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }
        if (show) {
            return (
                <SearchInfo onMouseEnter={ handleMouseIn } onMouseLeave = { handleMouseOut }>
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch onClick={() => changePage(page,totalPage,this.spinIcon)}>
                            <i className="iconfont spin" ref={(spinIncon) => this.spinIcon = spinIncon}>&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else return null;
    }
    render ()  {
        const { focused, mouseIn, handleFocus,handleBlur,list } = this.props;
        return (
           <HeaderWrapper>
               <Logo></Logo>
               <Nav>
                   <NavItem className="left active">首页</NavItem>
                   <NavItem className="left">下载App</NavItem>
                   <NavItem className="right">登录</NavItem>
                   <NavItem className="right">
                       <i className="iconfont">&#xe636;</i>
                   </NavItem>
                   <SearchWrapper>
                       <CSSTransition
                           in={focused}
                           timeout={500}
                           classNames="slide"
                       >
                           <NavSearch
                               className={focused ? 'focused':''}
                               onFocus={() => handleFocus(list)}
                               onBlur={handleBlur}
                           ></NavSearch>
                       </CSSTransition>
                       <i className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe614;</i>
                       {this.getListArea(focused || mouseIn)}
                   </SearchWrapper>
                   <Addition>
                       <Button className="writing">
                           <i className="iconfont">&#xe615;</i>
                           写文章
                       </Button>
                       <Button className='reg'>注册</Button>
                   </Addition>
               </Nav>
           </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused:state.getIn(['header','focused']),
        mouseIn:state.getIn(['header','mouseIn']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus (list) {
            console.log(list);
            if (list.size === 0) dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFoucs());
        },
        handleBlur () {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseIn () {
            dispatch(actionCreators.handleMouseIn())
        },
        handleMouseOut () {
            dispatch(actionCreators.handleMouseOut())
        },
        changePage (page,totalPage,spin) {
            let originAngle = spin.style.transform.replace(/\D/g,'');
            if (originAngle) {
                console.log(originAngle);
                originAngle = parseInt(originAngle,10);
            } else originAngle = 0;
            spin.style.transform = `rotate(${360 + originAngle}deg)`
            if (page < totalPage)
                dispatch(actionCreators.handleChangePage(page+1));
            else dispatch(actionCreators.handleChangePage(1));
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);