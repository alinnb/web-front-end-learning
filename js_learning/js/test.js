
var log = console.log.bind(console)

var w = window.innerWidth 
|| window.document.documentElement.clientWidth 
|| window.document.body.clientWidth

var h = window.innerHeight
|| window.document.documentElement.clientHeight
|| window.document.body.clientHeight

log(w, h)

var header = document.getElementsByClassName("navbar")
log(header)

log(screen.availWidth, screen.availHeight)

log(location)

// location.assign("http://www.w3school.com.cn")

log(history)
log(navigator)
log(window.opera)

function back() {
    history.back()
}

function forward() {
    history.forward()
}

function showConfirm() {
    var r = confirm()
}

log($("#page-top"))
log($(document))

var logo = $(".logo")
log(logo)

log(document.images)
log(document.links)

$(document).ready(function () {
    log("ready!")

    var obb = $(".header-des")
    obb.hover(
        function(){
            log("你进入了 p1!");
        },
        function(){
            log("拜拜! 现在你离开了 p1!");
        }
    )
    obb.click(function(){
        log("obb.click")
        // obb.children().slideUp()
    })

    log("----")
    var booChildren = obb.children()
    for(var i = 0; i < booChildren.length; i++)
    {
        log(booChildren[i].text())
        // booChildren[i].hide()
    }
    // obb.append("aaaaaaaa")

    // log(obb.css("background-color"))
    // log(obb.parent())
    // log(obb.parents())
    // log(obb.children())

    // $("a").addClass("f-a")
    // $("a").taggleClass("active")

    // $(".logo").hide();
    // var btns = $(":button")
    // log(btns[0])
    // // btns[0].hide()
    // btns[0].onclick = function (){
    //     alert("Back is replaced")
    // }
    // log(btns[0])
})

// window.open()
// window.close()