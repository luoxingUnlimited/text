$(function () {
    var flag = false;//控制动画
    var k = $(window).height();//获取当前浏览器 的高度
    $('.next').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    })
    //fullpage插件的入口函数 一定要记得写，要调用才行
    $('#fullPage').fullpage({//fullpage()方法 接收json对象形式的参数
        navigation: true,//是否显示项目导航（默认false）
        //loopBottom: true,
        //loopTop: true
        //navigationColor: "#f44",//写了没反应
        scrollingSpeed: 1000,
        //回调函数
        //
        afterLoad: function (anchorLink, index) {
            if (index === 2/*  && flag === false */) {
                $('.next').fadeOut();//隐藏 （执行动画前，继续向下先隐藏，动画执行完毕再显示）
                $('.search').show().animate({'right':370}, 1500, function() {
                    //盒子进来 沙发显示
                    $('.search_words').animate({'opacity':1}, 500, function () {
                        //图片往右上角走 沙发变从右下角变大 白色文字显示出来
                        $('.search').hide();
                        $('.search01').show().animate({'height':30, 'right':250, 'bottom':450}, 1000/* , function() {
                            flag = true;
                        } */);//滑动回来的时候隐藏的图片会显示出来 给了flag= false就不会出现了
                        $('.goods02').show().animate({'height':218}, 1000);
                        $('.words02').animate({'opacity':1}, 1000, function () {
                            $('.next').fadeIn();//显示
                        });
                    });
                });
            }
        },
        //回调函数 onLeave
        
        onLeave: function (index, nextIndex, direction) {
            //第二屏到第三屏
            if(index === 2 && nextIndex === 3 /* && flag === true */) {
                $('.next').fadeOut();
                $('.shirt').show().animate({'bottom': - (k - 250), 'width':207, 'left':260}, 2000, function () {
                    $('.img_01').animate({'opacity':1}, 500, function() {
                        $('.btn_01').animate({'opacity':1}, 500, function () {
                            $('.next').fadeIn();
                        });
                    });
                })
                $('.cover').show();
            }
            //第三屏到第四屏
            if(index === 3 && nextIndex === 4) {
                $('.next').fadeOut();
                $('.shirt').hide();
                /* 沙发的距离： 当前屏幕高度 - 沙发距离盒子底部的高度 - 盒子距离屏幕底部的高度 + 第三屏幕沙发到底部的距离50*/
                $('.shirt_04').show().animate({'bottom': - ((k - 250) + 50), 'left':260}, 2000, function () {
                    //动画结束，自己隐藏
                    $(this).hide();
                    $('.shirt_05').show();
                    //购物车往右走
                    $('.car').animate({'left':'200%'}, 3000, 'easeInElastic', function () {
                        $('.note').show();
                        $('.note_img, .word_01').animate({'opacity':1}, 2000,function () {
                            $('.next').fadeIn();
                        });
                    });
                    
                });
            }
            //第四屏到第五屏
            if (index === 4 && nextIndex === 5) {
                $('.next').fadeOut();
                $('.hand_05').animate({'bottom':0}, 1500, function () { 
                    $('.t1f_05').animate({'bottom':70}, 1000, function () {
                        $('.order_05').animate({'bottom':395}, 500, function () {
                            //给第五页的文字添加类名执行css动画
                            $('.word_05').addClass('word_05_a');
                            $('.next').fadeIn();
                        });
                    });
                });
                $('.mouse_05').animate({'opacity':1}, 2000);//fadeIn()显示
            }
            //第五屏到第六屏
            if (index === 5 && nextIndex === 6) {
                $('.next').fadeOut();
                //沙发的距离 = 当前屏幕的高度 - 盒子的高度 
                $('.t1f_05').animate({'bottom': - (k - 500),'left':'40%', 'width':65}, 1500, function () {
                    $('.t1f_05').hide();
                });
                $('.box').animate({'left':'38%'}, 1500, function () {
                    $('.box').animate({'bottom':40}, 1000, function () {
                        $('.box').hide(); 
                        /* 背景移动 */
                        $('.section6').animate({'backgroundPositionX':'100%'}, 4000, function () {
                            //小人出来
                            $('.man').animate({'height':305, 'bottom':116}, 1000, function () {
                                $(this).animate({'right':500}, 500, function () {
                                    $('.door').animate({'opacity':1}, 500, function () {
                                        $('.women').show().animate({'right':350, 'height':305}, 500, function () {
                                            $('.pop_06').show();
                                            $('.next').fadeIn();
                                        });
                                    }); 
                                });
                                
                            })
                        });
                        $('.words_06').show().animate({'left':'30%'}, 500, 'easeInOutElastic');
                        $('.pop').show();
                    })
                });
            }
            //第六屏到第七屏
            if (index === 6 && nextIndex === 7) {
                $('.next').fadeOut();
                setTimeout(function () {
                    $('.star').animate({'width':120}, 500, function () {
                        $('.good').show();
                        $('.next').fadeIn();
                    });
                }, 1000);
            }

            //第八屏
            $('.beginShopping').hover(function () {//鼠标经过 离开
                $('.btn_08_a').show();
            }, function () {
                $('.btn_08_a').hide();
            });
            /* $('.beginShopping').hover(function () {//鼠标经过 离开
                $('.btn_08_a').toggle();//toggle显示和隐藏切换
            }); */
            //hand跟随鼠标移动
            $(document).on('mousemove', function (event) {
                var x = event.pageX - $('.hand_08').width() / 2;
                var y = event.pageY + 10;
                //hand不能小于的值
                var minY = k - 499;
                if (y < minY) {
                    y = minY;
                }
                $('.hand_08').css({'left':x, 'top':y})
            });

            //点击再来一次，返回第一屏且返回动画未执行的样子(做过动画的元素，都是给他们添加行内样式)，也就是清除行内样式
            $('.again').on('click', function () {
                $.fn.fullpage.moveTo(1);
                //给有动画的盒子添加move类名
                $('img, .move').attr('style','');
            })
            
        }
    });
})