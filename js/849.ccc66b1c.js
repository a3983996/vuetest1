"use strict";(self["webpackChunksimpletest1"]=self["webpackChunksimpletest1"]||[]).push([[849],{7849:function(e,s,a){a.r(s),a.d(s,{default:function(){return b}});var t=a(3396),n=a(9242);const o={class:"mb-3"},i=(0,t._)("label",{for:"exampleInputEmail1",class:"form-label"},"Email address",-1),r=(0,t._)("div",{id:"emailHelp",class:"form-text"}," We'll never share your email with anyone else. ",-1),l={class:"mb-3"},u=(0,t._)("label",{for:"exampleInputPassword1",class:"form-label"},"Password",-1),d=(0,t._)("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function p(e,s,a,p,m,c){const h=(0,t.up)("Vue3Loading");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(h,{active:m.isLoading},null,8,["active"]),(0,t._)("form",{onSubmit:s[2]||(s[2]=(0,n.iM)(((...e)=>c.signIn&&c.signIn(...e)),["prevent"]))},[(0,t._)("div",o,[i,(0,t.wy)((0,t._)("input",{type:"email",autocomplete:"on",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=e=>m.user.username=e),id:"exampleInputEmail1","aria-describedby":"emailHelp"},null,512),[[n.nr,m.user.username]]),r]),(0,t._)("div",l,[u,(0,t.wy)((0,t._)("input",{type:"password",autocomplete:"on",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=e=>m.user.password=e),id:"exampleInputPassword1"},null,512),[[n.nr,m.user.password]])]),d],32)],64)}var m={data(){return{user:{username:"",password:""},isLoading:!1}},methods:{signIn(){const e="https://vue3-course-api.hexschool.io/admin/signin";this.isLoading=!0,this.$http.post(e,this.user).then((e=>{if(this.isLoading=!1,e.data.success){const{token:s,expired:a}=e.data;document.cookie=`hexToken=${s};\n           expires=${new Date(a)}`,this.$router.push("/dashboard/products")}}))}}},c=a(89);const h=(0,c.Z)(m,[["render",p]]);var b=h}}]);
//# sourceMappingURL=849.ccc66b1c.js.map