webpackJsonp([26],{585:function(e,t,r){var a=r(0)(r(852),r(853),null,null,null);e.exports=a.exports},852:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(18),l=r.n(a),n=r(154),s=r.n(n),i=r(39),u=r.n(i),o=r(90),c=r.n(o),p=r(12);t.default={components:{XHeader:s.a,Group:u.a,Cell:c.a},computed:l()({},Object(p.b)(["userInfo"])),data:function(){return{}}}},853:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"details-wrapper"},[a("x-header",{staticClass:"mobile-header__default",attrs:{title:"个人信息"}}),e._v(" "),a("div",{staticClass:"setting-wrapper__index"},[a("group",{staticClass:"mobile-cell__wrapper"},[a("cell",{attrs:{title:"我的头像","align-items":"center"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r(173),expression:"require('../../assets/images/user/F01.png')"}],staticStyle:{width:"40px","vertical-align":"middle"},attrs:{alt:""}})]),e._v(" "),a("cell",{attrs:{title:"我的账号",primary:"content",value:e.userInfo?e.userInfo.user_name:"--"}}),e._v(" "),a("cell",{attrs:{title:"真实姓名",primary:"content",value:e.userInfo?e.userInfo.name:""}}),e._v(" "),a("cell",{attrs:{title:"我的等级",primary:"content",value:e.userInfo?e.userInfo.level:"--"}}),e._v(" "),a("cell",{attrs:{title:"手机号码",primary:"content",value:e.userInfo?e.userInfo.phone:"--"}}),e._v(" "),a("cell",{attrs:{title:"电子邮箱",primary:"content",value:e.userInfo?e.userInfo.email:"--"}}),e._v(" "),a("cell",{attrs:{title:"QQ号码",primary:"content",value:e.userInfo?e.userInfo.qq:"--"}})],1)],1)],1)},staticRenderFns:[]}}});