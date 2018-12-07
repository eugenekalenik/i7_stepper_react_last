(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(2),r=a.n(l),m=a(6),o=a(3),c=a(4),i=a(7),u=a(5),d=a(8),p=function(){return s.a.createElement("header",{className:"bg-secondary text-light pt-4 pb-4"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"m-0"},"Stepper")))},h=["Make","Model","Transmission","Fuel type"],f=["Manual gearbox","Semi-automatic","Automatic transmission"],E=["Petrol","Diesel","Electric"],k=[{make:"Alfa Romeo",models:["Brera","Giulia","Spider"],transmissions:f,fuelTypes:E},{make:"Bentley",models:["Azure","Continental","Mulsanne"],transmissions:f,fuelTypes:E},{make:"Cadillac",models:["Allante","Deville","Eldorado"],transmissions:f,fuelTypes:E}],g=function(e){var t=e.item,a=e.stepName,n=e.changeMethod;return s.a.createElement("button",{key:t,className:a===t?"btn btn-warning mr-2 mb-2":"btn btn-light mr-2 mb-2",onClick:n},t)},b=function(e){var t=e.make,a=e.makes,n=e.onChangeMake;return s.a.createElement("div",{className:"card p-4"},a.map(function(e){return s.a.createElement(g,{item:e.make,stepName:t,changeMethod:n},e.make)}))},y=function(e){var t=e.model,a=e.make,n=e.makes,l=e.onChangeModel;return n.map(function(e,r){if(a===e.make)return s.a.createElement("div",{key:r,className:"card p-4"},n[r].models.map(function(e){return s.a.createElement(g,{item:e,stepName:t,changeMethod:l},e)}))})},T=function(e){var t=e.fuelType,a=e.fuelTypes,n=e.onChangeFuelType;return s.a.createElement("div",{className:"card p-4"},a.map(function(e){return s.a.createElement(g,{item:e,stepName:t,changeMethod:n},e)}))},C=function(e){var t=e.transmission,a=e.transmissions,n=e.onChangeTransmission;return s.a.createElement("div",{className:"card p-4"},a.map(function(e){return s.a.createElement(g,{item:e,stepName:t,changeMethod:n},e)}))},v=function(e){var t=e.step,a=e.steps,n=e.make,l=e.model,r=e.transmission,m=e.fuelType,o=e.onChangeMake,c=e.onChangeModel,i=e.onChangeTransmission,u=e.onChangeFuelType;return s.a.createElement("div",{className:"container mt-4 mb-4"},s.a.createElement("h2",{className:"mt-4 mb-4"},t+1,". ",a[t]),0===t&&s.a.createElement(b,{make:n,makes:k,onChangeMake:o}),1===t&&s.a.createElement(y,{model:l,make:n,makes:k,onChangeModel:c}),2===t&&s.a.createElement(C,{transmission:r,transmissions:f,onChangeTransmission:i}),3===t&&s.a.createElement(T,{fuelType:m,fuelTypes:E,onChangeFuelType:u}))},M=function(e){var t=e.step,a=e.steps,n=e.make,l=e.model,r=e.transmission,m=e.fuelType,o=e.onBack,c=e.onContinue,i=e.onAdd,u=e.onReset,d=function(){return 0===t&&""===n||1===t&&""===l||2===t&&""===r||3===t&&""===m};return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"d-flex"},t>0&&s.a.createElement("button",{className:"btn btn-light mr-2",onClick:o},"Back"),t!==a.length-1&&s.a.createElement("button",{className:"btn btn-primary mr-2",onClick:c,disabled:d()},"Continue"),t===a.length-1&&s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"btn btn-success mr-2",onClick:i,disabled:d()},"Add"),s.a.createElement("button",{className:"btn btn-danger",onClick:u},"Reset"))))},N=function(e){var t=e.cars;return t.length?s.a.createElement("div",{className:"mt-4 container table-responsive"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"#"),s.a.createElement("th",null,"Make"),s.a.createElement("th",null,"Model"),s.a.createElement("th",null,"Transmission"),s.a.createElement("th",null,"Fuel type"))),s.a.createElement("tbody",null,t.map(function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,t+1),s.a.createElement("td",null,e.make),s.a.createElement("td",null,e.model),s.a.createElement("td",null,e.transmission),s.a.createElement("td",null,e.fuelType))})))):null},S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={steps:h,step:0,make:"",model:"",transmission:"",fuelType:"",cars:[]},a.back=function(){1===a.state.step&&a.setState({model:""}),a.setState({step:a.state.step-1})},a.continue=function(){a.setState({step:a.state.step+1})},a.addCar=function(){a.setState({cars:Object(m.a)(a.state.cars).concat([{make:a.state.make,model:a.state.model,transmission:a.state.transmission,fuelType:a.state.fuelType}])}),a.reset()},a.reset=function(){a.setState({step:0,make:"",model:"",transmission:"",fuelType:""})},a.changeMake=function(e){a.setState({make:e.target.innerText})},a.changeModel=function(e){a.setState({model:e.target.innerText})},a.changeTransmission=function(e){a.setState({transmission:e.target.innerText})},a.changeFuelType=function(e){a.setState({fuelType:e.target.innerText})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.step,a=e.steps,n=e.make,l=e.model,r=e.transmission,m=e.fuelType,o=e.cars;return console.log(this.state),s.a.createElement(s.a.Fragment,null,s.a.createElement(p,null),s.a.createElement(v,{step:t,steps:a,make:n,model:l,transmission:r,fuelType:m,onChangeMake:this.changeMake,onChangeModel:this.changeModel,onChangeTransmission:this.changeTransmission,onChangeFuelType:this.changeFuelType}),s.a.createElement(M,{step:t,steps:a,make:n,model:l,transmission:r,fuelType:m,onBack:this.back,onContinue:this.continue,onAdd:this.addCar,onReset:this.reset}),s.a.createElement(N,{cars:o}))}}]),t}(n.Component);a(15);r.a.render(s.a.createElement(S,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.857600a0.chunk.js.map