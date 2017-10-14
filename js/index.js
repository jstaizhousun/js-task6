$(document).ready(function(){
//定义
var userName = document.getElementsByTagName("input")[0],
	passWord = document.getElementsByTagName("input")[1],
	warm     = document.getElementById("warm"),
	btn      = document.getElementsByTagName("button")[0],
	nameType = false,
	passType = false;
//获得焦点
userName.onfocus = function(){
	this.className = "login-user-active";			//改变样式
}
passWord.onfocus = function(){
	this.className = "login-pwd-active";			//改变样式
}
//失去焦点
userName.onblur = function(){	
	this.className = "login-user";					//改变样式
}
passWord.onblur = function(){
	this.className = "login-pwd";					//失去焦点改变样式
}
//监控输入框
userName.oninput = function(){
	var name = this.value;
	var judge = /^[a-zA-Z0-9]{4,16}$/				//检测输入值是否为a-zA-Z0-9,长度为4-16										//改变样式
	if (name === "" ){						  		//判断未输入值
		warm.innerHTML = "用户名不能为空";			//提示
		warm.className = "hint";					//提示样式
		nameType = false;
	}else {
		if (judge.test(name)===true){				//通过检测
			warm.innerHTML = "用户名格式正确";		//提示
			warm.className = "hint-true";			//提示样式
			nameType = true;
			
		}else {										//未通过
			warm.innerHTML = "用户名不合法";		//提示
			warm.className = "hint";				//提示样式
			nameType = false;		
		}
	}
	console.log("nameType:"+nameType)
}
passWord.oninput = function(){
	var pass = this.value;
	var judge = /^.{4,16}$/							//检测输入值长度是否为4~16
	if (pass === "" ){						  		//判断未输入值
		warm.innerHTML = "密码不能为空";			//提示
		warm.className = "hint";					//提示样式
		passType = false;
	}else {
		if (judge.test(pass)===true){				//通过检测
			warm.innerHTML = "密码格式正确";		//提示
			warm.className = "hint-true";			//提示样式
			passType = true;
		}else {										//未通过	
			warm.innerHTML = "密码长度应为4~16";	//提示
			warm.className = "hint";				//提示样式
			passType = false;
		}
	}
	console.log("passType:"+passType)
}
//点击按钮发起异步请求，将输入框的值发送给接口
// btn.onclick = function(){
// 	console.log("用户名："+userName.value)
// 	console.log("密码："+passWord.value)
// 	if(nameType==true&&passType==true){
// 		var ajax = new XMLHttpRequest();
// 		ajax.open("POST","/carrots-admin-ajax/a/login",true);              //发起异步请求
// 		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// 		ajax.send("name="+userName.value+"&pwd="+passWord.value);		   //发送用户名密码
// 		ajax.onreadystatechange = function(){
// 			if (ajax.readyState === 4) {									   //DONE 表示服务器已接收或者接收失败
// 				//接收成功
// 				if(ajax.status>=200 && ajax.status<300||ajax.status==304){ 
// 					var txt = JSON.parse(ajax.responseText);				   //接收服务器返回文本并转化
// 					console.log("返回文本："+txt.message)

// 					if (txt.message === "success"){		
// 						warm.innerHTML = "登陆成功"
// 					}else{
// 						warm.innerHTML = txt.message;
// 					}
// 				}
// 			}else {
// 				warm.innerHTML = "错误代码："+ajax.status;
// 			}
// 		
// 		}
// 	}else{
// 		alert("用户名/密码不合法")
// 	 }
// }
//原生再见
btn = $(btn);
    btn.click(function(){
 	console.log("用户名："+userName.value+nameType)
 	console.log("密码："+passWord.value+passType)
    	if(nameType==true&&passType==true){
	        $.ajax({
	            type: "POST",										//干什么--寄快递
	            url: "/carrots-admin-ajax/a/login",					//寄到哪里
	            data: {"name":userName.value,"pwd":passWord.value},	//快递内容
	            dataType: "json",									//怎么包装
	            success: function(data){							//快递送到
	                if(data.message === "success"){					//联系人正确
	                    warm.innerHTML = "登录成功";
	                    warm.className = "hint-true";
	                    location.href = "http://119.10.57.69:880/jnshu3931/js-task-6/pages/bgstage.html#/"
	                }else{											
	                    warm.innerHTML = data.message;
	                    warm.className = "hint";				    //出了什么事
	                }
	            }
	        });
	    }else{
 		alert("用户名/密码不合法")
	 	}
	});
});