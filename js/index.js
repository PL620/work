(function(){
    String.prototype.trim = function(){
        return this.replace(/^\s+|\s+$/g,'');
    }
    var data = {
        "files":[
            {
                name:'音乐',
                time:'2016/06/12 18:35:24',
                id:1,
                pid:0
            },
            {
                name:'教育',
                id:1,
                time:'2016/06/12 18:35:52',
                pid:1
            },
            {
                name:'体育',
                id:2,
                time:'2016/06/12 18:35:52',
                pid:0
            } 
        ]  
    }


    
    var timer = 0;
    var bar_in_onoff = true;
    $('#bar_in .b').on('click',function(){
        return false;
    })
    $('#bar_in .b').click(function(){                     //查看框
        
	    if(bar_in_onoff){
            $('.slecte2').html('');
            $('.slecte2').css('opacity',0);
	   	    $(this).css('transform','rotate(90deg)');
            var frame = $('.frame .strongs').get();
            var strongs = $('.frame .strongs').get();
            var id = $('.frame').attr('index');
            var pid = $('.frame').attr('data_set');
            var html = ''; 
            for (var i = 0; i < strongs.length; i++) {                   
                    html += '<li index="'+id[i]+'" data_set="'+pid[i]+'">'+strongs[i].innerHTML+'</li>';                     
            };   
            if(html){
                $('.slecte2').css('opacity',1);
            }
            $('.slecte2').append(html);
            $('.slecte2').show();
	   	    bar_in_onoff = false;
	    }else{
	    	$(this).css('transform','rotate(0deg)');
	    	bar_in_onoff = true;
            $('.slecte2').hide();
	    }                     
    });


    var bar_list_onoff1 = true;
	$('#bar_list .e').click(function(){                   //刷新
	   if(bar_list_onoff1){
	   	   $(this).css('transform','rotate(1080deg)');
	   	   bar_list_onoff1 = false;
	    }else{
	    	$(this).css('transform','rotate(0deg)');
	    	bar_list_onoff1 = true;
	    }                     
    });


	var bar_list_onoff = true;
	$('#bar_list .d').click(function(){                  //这是解除在docment的点击事件
       return false;
    });


    $('.slecte').click(function(){                       //这是解除在docment的点击事件
       return false;
    });


	$('#bar_list .d').on('click',function(){             //查看框的下拉列表
		if(bar_list_onoff){
			$(this).css('transform','rotate(-90deg)')
			bar_list_onoff = false;
			$('.slecte').show();
		}else{
			$(this).css('transform','rotate(0deg)')
			bar_list_onoff = true;
			$('.slecte').hide();
		}	
	});


    $('#aside_list li').each(function(i,elem){             //展现我的文档
    	$(elem).on('click',function(){
    		var clone = $(this).html()
    		for (var i = 0; i < $('.slecte li').length; i++) {
    			if($('.slecte li')[i].innerHTML == clone){
    				return
    			}
    		};
    		var li = $('<li>');
    		li.html(clone);
    		$('.slecte').append(li);
    	})
    });


	$('#header_div2 figure img').on('dblclick',function(){    //头像
		alert('请你选择你需要的照片')
	});

	var onoff1 = true;
	$(document).contextmenu(function(ev){//阻止右击事件
       ev.preventDefault();
    }); 


    $(function(){
	    $('#header_list .e').on('click',function(){                //点击x后浏览器关闭
	      window.close();
	    })
    });


    $('#bar_search .b').on("click",function(){                    //点击侧栏的点会切换新建文件夹
        var da = data;
        if(onoff1){
        	$('#striping').hide();
        	$('#piece').show();
        	onoff1 = !onoff1;
            $('#piece').html('');  
            getPage(da);
        }else{
        	onoff1 = !onoff1;
        	$('#striping').show();
        	$('#piece').hide();
            $('#piece').html('');  
            getPage(da);
        }
    });





    $('#bar_search .a').on("click",function(){                 //点击侧栏的点会出现和消失
    	$('#aside_left').toggle();
    });	

	$('#content').on('mousedown',function(ev){                 //这是让box更随鼠标移动，当点击是出现
	    var diy = ev.pageY-$('#header').height()-$('#nav').height()-$('#bar').height();
		var dix = ev.pageX;
	    $('#box_list2').hide();
	 	$('#box_list3').hide();
	 	if(ev.button ==2){
		    $('#box').css({
			    top:diy,
			    left:dix
			    }).css("display","block");
		    $('#box_list1 .c').on("mouseover",function(){
		        $('#box_list2').show();
		        $('#box_list3').hide();
		    })
		    $('#box_list1 .e').on("mouseover",function(){
		        $('#box_list3').show();
		        $('#box_list2').hide();
		    })
		}
	});	


    var setInterval_onoff = true;

    $(document).click(function(){                     //点击document中除开box的区域是，box消失
        $('#box').hide();
        var allgou = $('.gou').get();
        var allSelected = $('.allSelected').get();
        $('.slecte2').hide();
        $('.slecte').hide();
        $(this).css('transform','rotate(0deg)')
		bar_list_onoff = true;
        bar_in_onoff = true;
        $(allgou).each(function(i,elem){              
            $(elem).on('click',function(){                    //点击勾选，可以删除
                for (var i = 0; i < allgou.length; i++) {
                    if(allgou[i].checked !== true){
                        allSelected.checked = false; 
                    }else{
                        allSelected.checked = true;
                    }
                };
                if(this.checked !== false){
                    $(this).parent().next().next().next().show();
                }
            })
        })
        if(!allgou){
            allSelected.checked = false;
        }
    });


    $('#box').on('click',function(){                   
    	return false;                                 //解除doc上的点击
    });


    function toDou(n){                                //时间的判断
        return n = n<10?'0'+n:''+n;
    };

 
    function CreatElement(val,time){                          //新建文件夹    
        var NeweUl = '<ul class="frame clear" index="" data_set="">'+
                        '<li class="a">'+
                            '<div class="icon">'+
                                '<input type="checkbox" class="gou">'+
                            '</div>'+                           
                            '<strong class="strongs"></strong>'+
                            '<div class="edtor">'+
                                 '<input type="text" class="input" autofocus value="'+val+'">'+
                              '</div>'+
                            '<div class="delete">'+
                                '<div class="rename">重命名</div>'+
                                '<div class="sure">确定</div>'+
                                '<div class="share" title="分享"></div>'+
                                '<div class="down" title="下载"></div>'+
                                '<div class="cancel" title="删除"></div>'+
                            '</div>'+
                        '</li>'+
                        '<li class="b"></li>'+
                        '<li class="Time">'+time+'</li>'+
                    '</ul>';        
        NeweUl = $(NeweUl)[0];
        return  NeweUl;
    };
    
   
    function jianli(id,pid,name,time){
        var html =  '<ul class="frame clear" index="'+id+'" data_set="'+pid+'">'+
                        '<li class="a">'+
                            '<div class="icon">'+
                                '<input type="checkbox" class="gou">'+
                            '</div>'+             
                            '<strong class="strongs">'+name+'</strong>'+
                            '<div class="edtor">'+
                                '<input type="text" class="input" value="" style="display:none">  '+
                            '</div>'+
                            '<div class="delete" style="display:none">'+
                                    '<div class="rename">重命名</div>'+
                                    '<div class="sure">确定</div>'+
                                    '<div class="share" title="分享"></div>'+
                                    '<div class="down" title="下载"></div>'+
                                    '<div class="cancel" title="删除"></div>'+
                                '</div>'+
                            '</li>'+
                            '<li class="b"></li>'+
                            '<li class="Time">'+time+'</li>'+
                    '</ul>';
        return html;
    }


    getPage(data);                                                         //刷新出结构
    function getPage(data){ 
        var json = data['files'];                                          //从后台获取数据 渲染页面    
        var html ='';     
        for (var i = 0; i < json.length; i++) {
            if(json[i].pid == 0){
                html += jianli(json[i].id,json[i].pid,json[i].name,json[i].time);
            }
        };
        $('#striping_new').html(html);
        GouFn();
        shanFn();
        DblclickFn();
        StrongFn();    
    };

    var newjson = data['files'];
    function DblclickFn(){                                               //双点击进入
        var html = '';
        var frame = $('.frame').get();
        for (var i = 0; i < frame.length; i++) {
            $(frame[i]).on('dblclick',function(){
                var content = $('.strongs',this).html();                 //文件名
                var data_set = $(this).attr('data_set');                 //这是文件的层次 
                var ip = $(this).attr('index');                          //属于哪个文件  
                var str = '<strong class="count" index="'+ip+'" data_set="'+data_set+'">'+content+'</strong>';
                $('#bar_in .c').html($(str)[0]);
                for (var i = 0; i < newjson.length; i++) {
                    if(newjson[i].pid == (data_set+1) && newjson[i].id == ip){
                        html += jianli(newjson[i].id,newjson[i].pid,newjson[i].name,newjson[i].time);
                    }
                };
                $('#striping_new').html(html);
                GouFn();
                shanFn();
                DblclickFn();
                StrongFn();
            })
        };
        
    }
    
    
    
    $('#bar_list .b').on('click',function(){                                          //后退
        var dat = parseInt($('#bar_in .c strong').attr('data_set'));                 //层级
        var ind = parseInt($('#bar_in .c strong').attr('index'));                    //所属文件
        var content = '';
        var html = '';
        for (var i = 0; i < newjson.length; i++) {
            if(newjson[i].pid == dat){
                html += jianli(newjson[i].id,newjson[i].pid,newjson[i].name,newjson[i].time);
            }
            if(newjson[i].pid == (dat-1) && newjson[i].id == ind){
                content = newjson[i].name;
            }
        }  
        if(dat > 0){
            dat = dat - 1;
        }else{
           dat = 0; 
        }
        var str = '<strong class="count" index="'+ind+'" data_set="'+(dat)+'">'+content+'</strong>';
        str = $(str)[0];
        $('#bar_in .c').html(str);      
        $('#striping_new').html(html);
        GouFn();
        shanFn();
        DblclickFn();
    })


    function time(){
        var date = new Date();
        var time = toDou(date.getFullYear())+"/"+toDou(date.getMonth()+1)+"/"+toDou(date.getDate().toString())+' ' +toDou(date.getHours().toString())+':'+toDou(date.getMinutes())+':'+toDou(date.getSeconds());
        return time;

    }

    $('#nav_list .e').on('click',function(){            //新建文件夹的调用
        Creat();
    });
    $('#box_list1 .b').on('click',function(){           //新建文件夹的调用
        Creat();
        
    });

    var allgou = $('.gou').get();
    var parent = $('#striping_new').get();
    var edtor = null,edtorInput,nowLi;
    var allframe = $('.frame').get();                    //所有的复制框               
    var newcreat = $('#box_list1 .b')[0];                //点击新建文件夹
    var allstrong = $('#striping_new .strongs').get();                 //所有的strong
    var allinput = $('.input').get();                    //所有的输入框
    var allSelected = $('.allSelected')[0];              //总的勾选


    var num = 2;
    function Creat(){

        var vall ='新建文件夹';
        if(newcreat.isCreateFile){
            edtorInput.select();
            return;
        }
        var times = time();
        nowLi = CreatElement(vall,times);
        

        for (var i = 0; i < allgou.length; i++) {                 //勾选禁用
            allgou[i].disabled = true;    
        }

        var strong = $('.strongs',nowLi)[0];      
        var sure = $('.sure',nowLi)[0];
        var cancel = $('.cancel',nowLi)[0];
        var this_gou = $('.gou',nowLi)[0];
        edtorInput = $('.input',nowLi)[0];

        newcreat.isCreateFile = true;
        allSelected.checked = false;
        allSelected.disabled = true;
    

        $(parent).prepend(nowLi);

        $(edtorInput).on('blur',function(){              //是焦点后获得值
            vall = $(this).val();
            strong.innerHTML = vall;
        });
        

        $(sure).on('click',function(){
            var allstrong = $('#striping_new .strongs').get();
            $(edtorInput).attr('autofocus',true)
            strong.innerHTML = (strong.innerHTML ='')?'新建文件夹':vall;
            for (var i = 0; i < allstrong.length; i++) {
                if( strong !== allstrong[i] && (allstrong[i].innerHTML.trim() === edtorInput.value.trim())){
                    edtorInput.select();
                    return;
                }          
            };
            var nowgou = $('.gou',$(this).parent().prev().prev().prev());
            GouFn();
            for (var i = 0; i < allgou.length; i++) {
                allgou[i].disabled = false;
            };
            newcreat.isCreateFile = false; 
            $(edtorInput).hide();
            allSelected.disabled = false;
            $(this).parent().hide();  

            num++;
            var index = $('#bar_in .c strong').attr('index');
            var data_set = $('#bar_in .c strong').attr('data_set');
            var name = $(this).parent().prev().prev().html();
            var time = $(this).parents('.a').next().next().html();
            if(!data_set){
                data_set = 0;
                index = num;
            }else{
                data_set ++;
            }
            $(this).parents('.frame').attr('index',index);
            $(this).parents('.frame').attr('data_set',data_set);
            var json = {
                "name": name,
                "time": time,
                "id": index,
                "pid": data_set
            };
            data['files'].push(json);
            DblclickFn();
        
        });


        $(cancel).on('click',function(){                        //删除
            var allSelected = $('.allSelected').get();
            var allgou = $('.gou').get();
            $(this).parents('.frame').remove();
            for (var i = 0; i < allgou.length; i++) {
                allgou[i].disabled = false;
                if(allgou[i].checked !== true){

                   allSelected.checked = false; 
                }else{
                    allSelected.checked = true;
                }
            };
            allSelected.disabled = false;
            newcreat.isCreateFile = false; 
            if(!allgou){
                allSelected.checked = false;
            };       
        });
    };

    function StrongFn(){
        var strong = $('#bar_in strong').get();
        if(!strong.innerHTML){
        }else{
            $(strong).attr('index',0).attr('data_set',0)
        }   
    }


    $(allSelected).on('click',function(){                                 //总勾选 
        if(this.checked !== false){
            for (var i = 0; i < allgou.length; i++) {
                allgou[i].checked = true;
                $(allgou[i]).parent().next().next().next().show();
            };
        }else{
            for (var i = 0; i < allgou.length; i++) {
                allgou[i].checked = false;
                $(allgou[i]).parent().next().next().next().hide();
            };
        }
    })



    $('.slecte2').on('click',function(){                   
        return false;                                         //解除doc上的点击
    });
    



    $('.slecte2').on('mouseover',function(){
        var lis = $('.slecte2 li').get();
        var val = '';
        $(lis).each(function(i,elem){                        //bar_in上的strong                     
            $(elem).on('click',function(){
                var ind = $(this).attr('index');
                var dat = $(this).attr('data_set');
                for (var i = 0; i < newjson.length; i++) {
                    if(newjson[i].id == ind && newjson[i].pid == dat){
                        val = jianli(newjson[i].id,newjson[i].pid,newjson[i].name,newjson[i].time);
                    }
                };
                $('#striping_new').html(val);
                GouFn();
                shanFn();
                DblclickFn();
                StrongFn();
            })  
        })
    })
    
          
    function shanFn(){                                     //删除的函数
        var dates = data['files'];
        var canc = $('.cancel').get();
        for (var i = 0; i < canc.length; i++) {
            $(canc[i]).on('click',function(){
                var content = $(this).parent().prev().prev().html();
                $(this).parents('.frame').remove();
                for (var i = 0; i < dates.length; i++) {
                   if(dates[i].name == content){
                     dates.splice(i,1);
                   }
                };
            })
        }; 
    }

    function DateCancel(This){
       

    }



    function Rename(This){
        var renames = $('.frame .rename').get();
         
        for (var i = 0; i < renames.length; i++) {
            $(renames[i]).on('click',function(){
                var hanDate = data['files'];
                var Input = $('.input',$(this).parent().prev());
                var Strong = $('.strongs',$(this).parent().prev().prev()).get();
                var Sure = $(this).next();
                var val = '新建文件夹';
                Input.attr('autofocus',true)
                Input.show();
                Input.on('blur',function(){
                     $(this).val()?val = $(this).val():val;
                })
                Sure.on('click',function(){
                    var allstrong = $('.strongs').get();
                    for (var i = 0; i < allstrong.length; i++) {
                        if(allstrong[i].innerHTML === val.trim()){
                            Input.select();
                            return;
                        }
                    };
                    $('.gou',$(this).parent().prev().prev().prev()).attr('checked',false);
                    var s = $(this).parent().prev().prev();
                    for (var i = 0; i < hanDate.length; i++) {
                        if(hanDate[i].name == s.html()){
                            hanDate[i].name = val;
                        }
                    };
                    s.html(val)
                    Input.hide();
                    $(this).parent().hide();                        
                })      
            });
        };      
    }

    function getNum(){
        var allgou = $('.gou').get();
        if(!allgou.length)return false;
        for(var i=0;i<allgou.length;i++){
            if(!allgou[i].checked){                         //只要有一个没有选中
                return false;
            }
        }
        return true;
    }


    function GouFn(){                                       //调用勾选
        var allgou = $('.gou').get();
        var allSelected = $('.allSelected').get();
        for (var i = 0; i < allgou.length; i++) {
            $(allgou[i]).on('click',function(){
                allSelected = getNum();
                JustFn(this);
                Rename(this);
            })   
        };
    }



    function JustFn(This){                                      //上面的循环
        if(This.checked == false){
            $(This).parent().next().next().next().hide();
            $('.allSelected').attr('checked',false);
        }else{
            $(This).parent().next().next().next().show();
        }
    }


    PullFn();
    function PullFn(){                                             //框选加拖拽
        $('#content').on('mousedown',function(ev){
            var e = ev || window.event;
            var diy = ev.pageY-$('#header').height()-$('#nav').height()-$('#bar').height();
            var dix = ev.pageX ;
            var Div = $('<div class="Pull"></div>');
            
            $('#content').append(Div);
            $('#content').on('mousemove',function(ev){
                var arr = [];
                var Wi = Math.abs(ev.pageX - dix);
                var Hi = Math.abs(ev.pageY - diy-$('#header').height()-$('#nav').height()-$('#bar').height());
                    $(Div).addClass('left');
                    $(Div).css({
                        left:dix,
                        top:diy,
                        width: Wi,
                        height: Hi
                    })                                 
            });
            $('#content').on('mouseup',function(ev){
                $(Div).remove();

            });
        })
    }
    
    function TouchTn(obj1,obj2){
        var left1 = obj1.offsetLeft;
        var right1 = left1 + obj1.offsetWidth;
        var top1 = obj1.offsetTop;
        var bom1 = top1 + obj1.offsetHeight;
        var left2 = obj2.offsetLeft;
        var right2 = left2 + obj2.offsetWidth;
        var top2 = obj2.offsetTop;
        var bom2 = top2 + obj2.offsetHeight;
        if(right1 < left2 || bom1 < top2 || left1 > right2 || top1 > bom2){ //没碰到
            return false;
        }else{
            //碰到
            return true;
        }
    }


    document.addEventListener("keydown", function(e){            //全屏状态
        if (e.keyCode == 13) {
            toggleFullScreen();
        }
    }, false);
    function toggleFullScreen() {
        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    
    
    
    
    

//star法则

})();	











