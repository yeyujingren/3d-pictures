$(function () {
    let imgL = $('.pic img').length;
    let deg = 360 / imgL;
    var xN,yN;
    // let roY = 0;
    // let roX = 0;
    $('div.pic img').each(function (i) {
        $(this).css({
            'transform': 'rotateY('+ i * deg +'deg) translateZ(350px)'
        })
        // $(this).ondragstart = 'return false'
        $(this).attr('ondragstart','return false');
    })
    $(document).mousedown(function (ev) {
        // console.log('a')
        // 初始化按下点的坐标
        var x_ = ev.clientX;
        var y_ = ev.clientY;

        $(this).bind('mousemove',function (ev) {
            // console.log('b');
            // 移动后的坐标
            var x = ev.clientX;
            var y = ev.clientY;
            console.log('移动后：'+x,y)
            xN = x - x_;
            yN = y_ - y;
            console.log('差值：'+xN,yN)
            // roY += xN * 0.2;
            // roX -= yN * 0.1;
            // console.log(roY,roX)
            // $('body').append('')

            $('div.pic').css({
                'transform': 'perspective(800px) rotateX('+ yN * 0.1 +'deg) rotateY('+ xN * 0.2 +'deg)'
            })

            var x = ev.clientX;
            var y = ev.clientY;
            // console.log('移动后：'+x,y)

        })
    }).mouseup(function () {
        $(this).unbind('mousemove');
        // let timer = setInterval(function () {
        //     xN *= 0.95;
        //     yN *= 0.95;
        //     if(Math.abs(xN) < 1 && Math.abs(yN) < 1) {
        //         clearInterval(timer);
        //     }
        //     $('div.pic').css({
        //         'transform': 'perspective(800px) rotateX('+ yN * 0.1 +'deg) rotateY('+ xN * 0.2 +'deg)'
        //     })
        // },30);
        
    })
})