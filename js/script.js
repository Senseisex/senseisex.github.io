$(document).ready(function () {
    $('#add_vizitka').on("click", function () {
        document.location.href = '/';
    });
    $('#signup').on("click", function () {
        document.location.href = "/signup/";
    });
    $('#userbutton').on("click", function () {
        const login = $("#login").val();
        document.location.href = login;
    });
    $('#signin').on("click", function () {
        document.location.href = "/signin/";
    });
    $('#nouser').on("click", function () {
        $(this).css("display", "none");
        $("#authlog").css("display", "none");
        $(".email1").css("display", "block");
        $("#inputEmail").attr("data-type", "email1");
    });
    $('#logout').on("click", function () {
        $.ajax({
            url: "/logout/",
            type: "GET",
            dataType: "text",
            success: function (data) {
                const t = JSON.parse(data);
                document.location.href = t[0] || '/';
            }
        });
    });

    ['err', 'errsend', 'sucsend', 'imgerr', 'errbutton', 'errdelprofile',
        'delprofile', 'analitycs', 'success', 'share'].forEach(cls => {
        $(`.close_${cls}`).on('click', () => {
            $(`#modal_${cls}`).modal('hide');
        });
    });

    const width = document.body.clientWidth;
    const ids = ["#inputEmail", "#inputEmail2", "#inputAddr", "#inputPass", "#inputPass2", "#inputEmlog",]
    if (width < 400) {
        ids.forEach(id => $(id).removeClass('input-lg'));

        $("#restorepass").removeClass('btn-lg');
        $("#authbutton").removeClass('btn-lg');
        $("#getstarted").removeClass('btn-lg');
        $(".st-container").removeClass('st-menu-open');
        $("#viewmenu").css("display", "block");
    } else {
        ids.forEach(id => $(id).addClass('input-lg'));
        $("#restorepass").addClass('btn-lg');
        $("#authbutton").addClass('btn-lg');
        $("#getstarted").addClass('btn-lg');

        if (!$("div").is(".noeffect")) {
            const newwidth2 = width - 344;
            const newwidth3 = width - 327;
            $(".leftpanel").css("width", newwidth2);
            $(".st-container").addClass('st-menu-open');
            $("#bg-color").css({"width": newwidth3 + "px", "overflow": "hidden"});
            setTimeout(function () {
                $("#bg-color").css("overflow-y", "scroll");
            }, 500);
        }
    }

    $(".ya-share2__icon").css({"width": "50px", "height": "50px"});
    $(".ya-share2__container_size_m .ya-share2__counter").css({"font-size": "16px", "padding": "14px 8px"});

    $(window).resize(function () {
        var width = document.body.clientWidth;

        if (width > 400) {
            if (!$("div").is(".noeffect")) {
                var newwidth2 = width - 344;
                var newwidth3 = width - 327;
                $(".leftpanel").css("width", newwidth2);
                $("#bg-color").css({"width": newwidth3 + "px", "overflow": "hidden"});
                $(".st-container").addClass('st-menu-open');
                setTimeout(function () {
                    $("#bg-color").css("overflow-y", "scroll");
                }, 500);
            }
        }
    });

    window.addEventListener("orientationchange", function () {
        var width = document.body.clientWidth;

        if (width > 400) {
            if (!$("div").is(".noeffect")) {
                const newwidth2 = width - 344;
                const newwidth3 = width - 327;
                $(".leftpanel").css("width", newwidth2);
                $("#bg-color").css({"width": newwidth3 + "px", "overflow": "hidden"});
                $(".st-container").addClass('st-menu-open');
                setTimeout(function () {
                    $("#bg-color").css("overflow-y", "scroll");
                }, 500);
            }
        }
    });

    $("#viewmenu").on('click', function () {
        var width2 = document.body.clientWidth;
        var newwidth = width2 - 344;
        var newwidth2 = width2 - 327;
        $(".st-container").addClass('bg-color');
        if (width2 > 400) {
            $(".st-content").removeClass('rightpanel');
            $(".st-content").addClass("leftpanel");

            $("#bg-color").css({"width": newwidth2 + "px", "overflow": "hidden"});
            $(".leftpanel").animate({width: newwidth + "px"}, 500);
            setTimeout(function () {
                $("#bg-color").css("overflow-y", "scroll");
            }, 500);
        }
    });

    setTimeout(function () {
        $(".child2").css("display", "block");
        $(".child22").css("display", "block");
    }, 500);

    $("#closemenu").on('click', function () {
        var width2 = document.body.clientWidth;
        var newwidth = width2 + 17;
        $(".st-container").addClass('bg-color');
        if (width2 > 400) {
            $(".st-content").removeClass('leftpanel');
            $(".st-content").addClass("rightpanel");
            $("#bg-color").css({"width": newwidth + "px", "overflow": "hidden"});

            //$(".rightpanel").css("width", width2+"px");
            $(".rightpanel").animate({width: width2 + "px"}, 500);
            setTimeout(function () {
                $("#bg-color").css("overflow-y", "scroll");
            }, 500);
        }
    });

    $(document).on("click", ".close_img", function (e) {
        $('.demo-wrap').removeClass('fix');
        $('.upload-demo-wrap').css('display', 'none');
        $('.close_img').remove();
        $('.upload-demo').removeClass('ready');
    });

    // Variables
    var clickedTab = $(".tabs > .active");
    var tabWrapper = $(".tab__content");
    var activeTab = tabWrapper.find(".active");
    var activeTabHeight = "1000px";

    // Show tab on page load
    activeTab.show();
    // Set height of wrapper on page load
    tabWrapper.height(activeTabHeight);
    $(".tabs > li").on("click", function () {
        // Remove class from active tab
        $(".tabs > li").removeClass("active");
        // Add class active to clicked tab
        $(this).addClass("active");
        // Update clickedTab variable
        clickedTab = $(".tabs .active");
        // fade out active tab
        activeTab.fadeOut(5, function () {
            // Remove active class all tabs
            $(".tab__content > li").removeClass("active");
            // Get index of clicked tab
            var clickedTabIndex = clickedTab.index();
            // Add class active to corresponding tab
            $(".tab__content > li").eq(clickedTabIndex).addClass("active");
            // update new active tab
            activeTab = $(".tab__content > .active");
            // Update variable
            activeTabHeight = "1000px";
            // Animate height of wrapper to new tab height
            tabWrapper.stop().delay(5).animate({
                height: activeTabHeight
            }, 5, function () {
                // Fade in active tab
                activeTab.delay(5).fadeIn(5);
            });
        });
    });
    $(".colors > li").removeClass("active-color");

    // Variables
    var colorButton = $(".colors li");

    $.each(colorButton, function (i) {
        if ($(colorButton[i]).attr("data-color") == $("#bginput").text() || $(colorButton[i]).attr("data-color1") == $("#bginput").text()) {
            $(colorButton[i]).addClass("active-color");
        }
    });

    colorButton.on("click", function () {
        // Remove class from currently active button
        $(".colors > li").removeClass("active-color");
        // Add class active to clicked button
        $(this).addClass("active-color");
        // Get background color of clicked
        const newColor = $(this).attr("data-color");
        const newColordb = newColor ? newColor : $(this).attr("data-color1");
        // Change background of everything with class .bg-color
        $(".bg-color").css("background", newColordb);
        $.ajax({
            url: "/api/profile/",
            type: "POST",
            dataType: "text",
            data: {setColor: newColordb},
            success: (data) => {
                const t = JSON.parse(data);
                return t[0] === "error"
            }
        });
    });

    //page lk/////////////////////////////////////////////////
    $('#nameprofile').on("focus", function () {
        length_check(30, '#nameprofile', 'counter0');
        $("#counter0_block").css("display", "block");
        $("#save_namediv").css("display", "block");
    });
    $('#nameprofile').on("focusout", function () {
        setTimeout(function () {
            $("#counter0_block").css("display", "none");
            $("#save_namediv").css("display", "none");
            $("#nameprofile").val($("#nameprofile2").val());
            $("#loginpr").text($("#nameprofile2").val());
        }, 300);
    });
    $('#cancel_name').on("click", function () {
        $("#nameprofile").blur();
        $("#save_namediv").css("display", "none");
        $("#nameprofile").val($("#nameprofile2").val());
        $("#loginpr").text($("#nameprofile2").val());
    });
    $('#save_name').on("click", function () {
        $('#smtxt_savename1').css("display", "none");
        $('#smtxt_savename2').css("display", "none");
        const namepr = $('#nameprofile').val();
        $.ajax({
            url: "../api/profile/",
            type: "POST",
            dataType: "text",
            data: {namepr: namepr},
            success: function (data) {
                const t = JSON.parse(data);
                if (t[0] == "error") {
                    $('#smtxt_savename1').css("display", "block");
                } else {
                    const name = $("#nameprofile").val();
                    $("#save_namediv").css("display", "none");
                    $("#nameprofile2").val(name);
                    $("#loginpr").text(name);
                    $('#smtxt_savename2').css("display", "block");
                    setTimeout(function () {
                        $('#smtxt_savename2').css("display", "none");
                    }, 2000);
                }
            }
        });
    });
    $('#nameprofile').on("keyup", function (e) {
        if (e.keyCode != 13) {
            $(this).val($(this).val().replace(/[^a-zA-Zа-яА-Я0-9_ ]+/g, ''));
            length_check(30, '#nameprofile', 'counter0');
            var addr = $(this).val();
            $("#loginpr").text(addr);
        }
    });
    $('#desc_text').on("focus", function () {
        length_check(249, '#desc_text', 'counter1');
        $("#counter1_block").css("display", "block");
        $("#save_descdiv").css("display", "block");
    });
    $('#desc_text').on("focusout", function () {
        setTimeout(function () {
            $("#counter1_block").css("display", "none");
            $("#save_descdiv").css("display", "none");
            var desc = $("#desc_text").val();
            // $("#desc_text").val(desc);
            $.ajax({
                url: "../api/profile/",
                type: "POST",
                dataType: "text",
                data: ("description=" + desc),
                success: function (data) {
                    var t = JSON.parse(data);
                    $("#descpr").html(desc);
                }
            });
        }, 300);
    });
    $('#cancel_desc').on("click", function () {
        $("#desc_text").blur();
        $("#counter1_block").css("display", "none");
        $("#save_descdiv").css("display", "none");
        $("#desc_text").val($("#desc_text2").val());
        $("#descpr").html($("#desc_text2").val());
    });
    $("#save_desc").on("click", function () {
        $('#smtxt_desc1').css("display", "none");
        $('#smtxt_desc2').css("display", "none");
        var desc = $('#desc_text').val();
        $.ajax({
            url: "../api/profile/",
            type: "POST",
            dataType: "text",
            data: ("description=" + desc),
            success: function (data) {
                var t = JSON.parse(data);
                if (t[0] == "error") {
                    $('#smtxt_desc1').css("display", "block");
                    setTimeout(function () {
                        $('#smtxt_desc1').css("display", "none");
                    }, 2000);
                } else {
                    $("#counter1_block").css("display", "none");
                    $("#save_descdiv").css("display", "none");
                    $('#smtxt_desc2').css("display", "block");
                    $("#desc_text2").val(t[1]);
                    setTimeout(function () {
                        $('#smtxt_desc2').css("display", "none");
                        $("#desc").blur();
                    }, 2000);
                }
            }
        });
    });
    $('#desc_text').on("keyup", function (e) {
        length_check(249, '#desc_text', 'counter1');
        const desc = $(this).val();
        $.ajax({
            url: "../api/profile/",
            type: "POST",
            dataType: "text",
            data: {description: desc},
            success: function (data) {
                $("#descpr").html(desc);
            }
        });
    });

    $('#addrprofile').on("focus", function () {
        $("#save_addrdiv").css("display", "block");
    });
    $('#addrprofile').on("focusout", function () {
        setTimeout(function () {
            $("#save_addrdiv").css("display", "none");
            $("#addrprofile").val($("#addrprofile2").val());
            $('#addrprofile').parent().parent('div').removeClass('has-success').removeClass('has-error');
            $('.glyphicon-remove').remove();
            $('.glyphicon-ok').remove();
            $('#inputSuccess2Status').remove();
            $('#inputError2Status').remove();
            $('#smtxt_addpr1').css("display", "none");
            $('#smtxt_addpr2').css("display", "none");
            $('#smtxt_addpr3').css("display", "none");
            $('#smtxt_addpr4').css("display", "none");
            $('#smtxt_addpr5').css("display", "none");
            $('#smtxt_addpr6').css("display", "none");
            $('#smtxt_addpr7').css("display", "none");
        }, 300);
    });
    $('#cancel_addr').on("click", function () {
        $("#addrprofile").blur();
        $("#save_addrdiv").css("display", "none");
        $("#addrprofile").val($("#addrprofile2").val());
        $('#addrprofile').parent().parent('div').removeClass('has-success').removeClass('has-error');
        $('.glyphicon-remove').remove();
        $('.glyphicon-ok').remove();
        $('#inputSuccess2Status').remove();
        $('#inputError2Status').remove();
    });

    var clipboard = new ClipboardJS('.copy_addr');
    clipboard.on('success', function (e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);

        e.clearSelection();
    });

    clipboard.on('error', function (e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });

    $(document).on("click", ".copy_addr", function () {
        $("#save_addrdiv").css("display", "none");
        $('#smtxt_addpr8').css("display", "block");
        setTimeout(function () {
            $('#smtxt_addpr8').css("display", "none");
        }, 2000);
    });

    $('#save_addr').on("click", function () {
        $('#smtxt_addpr1').css("display", "none");
        $('#smtxt_addpr2').css("display", "none");
        $('#smtxt_addpr3').css("display", "none");
        $('#smtxt_addpr4').css("display", "none");
        $('#smtxt_addpr5').css("display", "none");
        $('#smtxt_addpr6').css("display", "none");
        $('#smtxt_addpr7').css("display", "none");
        var addr = $('#addrprofile').val();
        var siteaddress = $('#addrprofile3').val();
        if (addr.length < 3) {
            $('#smtxt_addpr5').css("display", "block");
            $('#smtxt_addpr1').css("display", "none");
            $('#smtxt_addpr2').css("display", "none");
            $('#smtxt_addpr3').css("display", "none");
            $('#smtxt_addpr4').css("display", "none");
            $('#smtxt_addpr6').css("display", "none");
            $('#smtxt_addpr7').css("display", "none");
        } else {
            $.ajax({
                url: "../api/profile/",
                type: "POST",
                dataType: "text",
                data: ("addr=" + addr),
                success: function (data) {
                    var t = JSON.parse(data);
                    if (t[0] == "error") {
                        $('#smtxt_addpr1').css("display", "block");
                    } else if (t[0] == "error2") {
                        $('#smtxt_addpr2').css("display", "block");
                    } else {
                        window.location.pathname = addr;
                        $("#save_addrdiv").css("display", "none");
                        $("#addrprofile").val(addr);
                        $("#addrprofile2").val(addr);
                        $("#addrprofilehidden").val(siteaddress + addr);
                        $('#addrprofile').parent().parent('div').parent('div').removeClass('has-success').removeClass('has-error');
                        $('.glyphicon-remove').remove();
                        $('.glyphicon-ok').remove();
                        $('#inputSuccess2Status').remove();
                        $('#inputError2Status').remove();
                        $('#smtxt_addpr3').css("display", "block");
                        setTimeout(function () {
                            $('#smtxt_addpr3').css("display", "none");
                        }, 2000);
                    }
                }
            });
        }
    });
    $('#addrprofile').on("keyup", function (e) {
        if (e.keyCode != 13) {
            $(this).val($(this).val().replace(/[^a-z0-9_\/:.]+/g, ''));
            var addr = $(this).val();

            if (addr.length == 0) {
                $('#smtxt_addpr5').css("display", "block");
                $('#smtxt_addpr1').css("display", "none");
                $('#smtxt_addpr2').css("display", "none");
                $('#smtxt_addpr3').css("display", "none");
                $('#smtxt_addpr4').css("display", "none");
                $('#smtxt_addpr6').css("display", "none");
                $('#smtxt_addpr7').css("display", "none");
            }
        }
    });

    $('#updemail').on("focus", function () {
        $("#save_emaildiv").css("display", "block");
    });
    $('#updemail').on("focusout", function () {
        setTimeout(function () {
            $("#save_emaildiv").css("display", "none");
            $("#updemail").val($("#updemail2").val());
        }, 300);
    });
    $('#cancel_email').on("click", function () {
        $("#updemail").blur();
        $("#save_emaildiv").css("display", "none");
        $("#updemail").val($("#updemail2").val());
    });
    $('#save_email').on("click", function () {
        $('#smtxt_updemail1').css("display", "none");
        $('#smtxt_updemail2').css("display", "none");
        var updemail = $('#updemail').val();
        $.ajax({
            url: "../api/profile/",
            type: "POST",
            dataType: "text",
            data: ("user_email=" + updemail),
            success: function (data) {
                var t = JSON.parse(data);
                if (t[0] == "error") {
                    $('#smtxt_updemail1').css("display", "block");
                } else {
                    $("#save_emaildiv").css("display", "none");
                    $("#updemail").val(t[1]);
                    $("#updemail2").val(t[1]);
                    $('#smtxt_updemail2').css("display", "block");
                    setTimeout(function () {
                        $('#smtxt_updemail2').css("display", "none");
                    }, 2000);
                }
            }
        });
    });

    $('#updpass').on("focus", function () {
        $("#save_passdiv").css("display", "block");
    });
    $('#updpass').on("focusout", function () {
        setTimeout(function () {
            $("#save_passdiv").css("display", "none");
            $("#updpass").val("");
        }, 300);
    });
    $('#cancel_pass').on("click", function () {
        $("#updpass").blur();
        $("#save_passdiv").css("display", "none");
        $("#updpass").val("");
    });
    $('#save_pass').on("click", function () {
        $('#smtxt_savepass1').css("display", "none");
        $('#smtxt_savepass2').css("display", "none");
        $('#smtxt_savepass3').css("display", "none");
        var updpass = $('#updpass').val();
        var login = $("#vizuser").val();
        $.ajax({
            url: "../api/user/",
            type: "POST",
            dataType: "text",
            data: ("updpass=" + updpass + "&login=" + login),
            success: function (data) {
                var t = JSON.parse(data);
                if (t[0] == "error") {
                    $('#smtxt_savepass1').css("display", "block");
                } else if (t[0] == "error2") {
                    $('#smtxt_savepass2').css("display", "block");
                } else {
                    $("#save_passdiv").css("display", "none");
                    $('#smtxt_savepass3').css("display", "block");
                    setTimeout(function () {
                        $('#smtxt_savepass3').css("display", "none");
                    }, 2000);
                }
            }
        });
    });

    // PROFILE FIELDS

    $('#whatsappinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="whatsappsave">OK</div>');
        if ($("#whatsappinput2").val() == "") {
            $("#whatsappinput").val("+");
        }
    });

    $('#whatsappinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#whatsappinput').next().remove();
            if ($("#whatsappinput2").val() != "") {
                $("#whatsappinput").val("+" + $("#whatsappinput2").val());
            } else {
                if ($("#whatsappinput").val().length != 0) {
                    $("#whatsappinput").val("");
                }
            }
            if ($("#whatsappinput").val() == "+") {
                $("#whatsappinput").val("");
            }
        }
    });

    $(document).on("mouseout", "#whatsappsave", function () {
        $("#whatsappsave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#whatsappsave", function () {
        $("#whatsappsave").addClass('hover_div');
    });

    $(document).on("click", "#whatsappsave", function () {
        $("#whatsappsave").removeClass('hover_div');
        let value0 = $('#whatsappinput2').val();
        let value1 = $('#whatsappinput').val();
        value1 = value1.replace("+", "");
        addbutton(value0, value1, "whatsapp");
    });

    $('#whatsappinput').on("keyup", function (e) {
        if (e.keyCode != 13) {
            $(this).val($(this).val().replace(/[^0-9+]+/g, ''));
        }
    });

    $('#viberinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="vibersave">OK</div>');
        if ($("#viberinput2").val() == "") {
            $("#viberinput").val("+");
        }
    });

    $('#viberinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#viberinput').next().remove();
            if ($("#viberinput2").val() != "") {
                $("#viberinput").val("+" + $("#viberinput2").val());
            } else {
                if ($("#viberinput").val().length != 0) {
                    $("#viberinput").val("");
                }
            }
            if ($("#viberinput").val() == "+") {
                $("#viberinput").val("");
            }
        }
    });

    $(document).on("mouseout", "#vibersave", function () {
        $("#vibersave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#vibersave", function () {
        $("#vibersave").addClass('hover_div');
    });

    $(document).on("click", "#vibersave", function () {
        $("#vibersave").removeClass('hover_div');
        var value0 = $('#viberinput2').val();
        var value1 = $('#viberinput').val();
        value1 = value1.replace("+", "");
        addbutton(value0, value1, "viber");
    });

    $('#viberinput').on("keyup", function (e) {
        if (e.keyCode != 13) {
            $(this).val($(this).val().replace(/[^0-9+]+/g, ''));
        }
    });

    $('#instagraminput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="instagramsave">OK</div>');
    });

    $('#instagraminput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#instagraminput').next().remove();
            if ($("#instagraminput2").val() != "") {
                $("#instagraminput").val($("#instagraminput2").val());
            } else {
                if ($("#instagraminput").val().length != 0) {
                    $("#instagraminput").val("");
                }
            }
        }
    });

    $(document).on("mouseout", "#instagramsave", function () {
        $("#instagramsave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#instagramsave", function () {
        $("#instagramsave").addClass('hover_div');
    });

    $(document).on("click", "#instagramsave", function () {
        $("#instagramsave").removeClass('hover_div');
        var value0 = $('#instagraminput2').val();
        var value1 = $('#instagraminput').val();
        addbutton(value0, value1, "instagram");
    });

    $('#instagraminput').on("keyup", function (e) {
        if (e.keyCode != 13) {
            $(this).val($(this).val().replace(/[^A-Za-z0-9_.]+/g, ''));
        }
    });

    $('#vkinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="vksave">OK</div>');
    });

    $('#vkinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#vkinput').next().remove();
            if ($("#vkinput2").val() != "") {
                $("#vkinput").val($("#vkinput2").val());
            } else {
                if ($("#vkinput").val().length != 0) {
                    $("#vkinput").val("");
                }
            }
        }
    });

    $(document).on("mouseout", "#vksave", function () {
        $("#vksave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#vksave", function () {
        $("#vksave").addClass('hover_div');
    });

    $(document).on("click", "#vksave", function () {
        $("#vksave").removeClass('hover_div');
        var value0 = $('#vkinput2').val();
        var value1 = $('#vkinput').val();
        var pos = value1.lastIndexOf("/");
        value1 = value1.substr(pos + 1);
        addbutton(value0, value1, "vk");
    });

    $('#vkinput').on("keyup", function (e) {
        if (e.keyCode != 13) {
            $(this).val($(this).val().replace(/[^A-Za-z0-9_\/:.]+/g, ''));
        }
    });

    $('#telegraminput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="telegramsave">OK</div>');
    });

    $('#telegraminput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#telegraminput').next().remove();
            if ($("#telegraminput2").val() != "") {
                $("#telegraminput").val($("#telegraminput2").val());
            } else {
                if ($("#telegraminput").val().length != 0) {
                    $("#telegraminput").val("");
                }
            }
        }
    });

    $(document).on("mouseout", "#telegramsave", function () {
        $("#telegramsave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#telegramsave", function () {
        $("#telegramsave").addClass('hover_div');
    });

    $(document).on("click", "#telegramsave", function () {
        $("#telegramsave").removeClass('hover_div');
        var value0 = $('#telegraminput2').val();
        var value1 = $('#telegraminput').val();
        var pos = value1.lastIndexOf("/");
        value1 = value1.substr(pos + 1);
        addbutton(value0, value1, "telegram");
    });

    $('#telegraminput').on("keyup", function (e) {
        if (e.keyCode != 13) {
            $(this).val($(this).val().replace(/[^A-Za-z0-9_\/:.]+/g, ''));
        }
    });

    $('#okinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="oksave">OK</div>');
    });

    $('#okinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#okinput').next().remove();
            if ($("#okinput2").val() != "") {
                $("#okinput").val($("#okinput2").val());
            } else {
                if ($("#okinput").val().length != 0) {
                    $("#okinput").val("");
                }
            }
        }
    });

    $(document).on("mouseout", "#oksave", function () {
        $("#oksave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#oksave", function () {
        $("#oksave").addClass('hover_div');
    });

    $(document).on("click", "#oksave", function () {
        $("#oksave").removeClass('hover_div');
        var value0 = $('#okinput2').val();
        var value1 = $('#okinput').val();
        var pos = value1.lastIndexOf("/");
        value1 = value1.substr(pos + 1);
        addbutton(value0, value1, "ok");
    });

    $('#okinput').on("keyup", function (e) {
        if (e.keyCode != 13) {
            $(this).val($(this).val().replace(/[^A-Za-z0-9_\/:.]+/g, ''));
        }
    });

    $('#facebookinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="facebooksave">OK</div>');
    });

    $('#facebookinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#facebookinput').next().remove();
            if ($("#facebookinput2").val() !== "") {
                $("#facebookinput").val($("#facebookinput2").val());
            } else {
                if ($("#facebookinput").val().length != 0) {
                    $("#facebookinput").val("");
                }
            }
        }
    });

    $(document).on("mouseout", "#facebooksave", function () {
        $("#facebooksave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#facebooksave", function () {
        $("#facebooksave").addClass('hover_div');
    });

    $(document).on("click", "#facebooksave", function () {
        $("#facebooksave").removeClass('hover_div');
        var value0 = $('#facebookinput2').val();
        var value1 = $('#facebookinput').val();
        var pos = value1.lastIndexOf("/");
        value1 = value1.substr(pos + 1);
        addbutton(value0, value1, "facebook");
    });

    $('#facebookinput').on("keyup", function (e) {
        if (e.keyCode != 13) {
            $(this).val($(this).val().replace(/[^A-Za-z0-9_\/:.]+/g, ''));
        }
    });

    $('#twitterinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="twittersave">OK</div>');
    });

    $('#twitterinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#twitterinput').next().remove();
            if ($("#twitterinput2").val() != "") {
                $("#twitterinput").val($("#twitterinput2").val());
            } else {
                if ($("#twitterinput").val().length != 0) {
                    $("#twitterinput").val("");
                }
            }
        }
    });

    $(document).on("mouseout", "#twittersave", function () {
        $("#twittersave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#twittersave", function () {
        $("#twittersave").addClass('hover_div');
    });

    $(document).on("click", "#twittersave", function () {
        $("#twittersave").removeClass('hover_div');
        var value0 = $('#twitterinput2').val();
        var value1 = $('#twitterinput').val();
        var pos = value1.lastIndexOf("/");
        value1 = value1.substr(pos + 1);
        addbutton(value0, value1, "twitter");
    });

    $('#twitterinput').on("keyup", function (e) {
        if (e.keyCode != 13) {
            $(this).val($(this).val().replace(/[^A-Za-z0-9_\/:.]+/g, ''));
        }
    });

    $('#skypeinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="skypesave">OK</div>');
    });

    $('#skypeinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#skypeinput').next().remove();
            if ($("#skypeinput2").val() != "") {
                $("#skypeinput").val($("#skypeinput2").val());
            } else {
                if ($("#skypeinput").val().length != 0) {
                    $("#skypeinput").val("");
                }
            }
        }
    });

    $(document).on("mouseout", "#skypesave", function () {
        $("#skypesave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#skypesave", function () {
        $("#skypesave").addClass('hover_div');
    });

    $(document).on("click", "#skypesave", function () {
        $("#skypesave").removeClass('hover_div');
        var value0 = $('#skypeinput2').val();
        var value1 = $('#skypeinput').val();
        var pos = value1.lastIndexOf("/");
        value1 = value1.substr(pos + 1);
        addbutton(value0, value1, "skype");
    });

    $('#skypeinput').on("keyup", function (e) {
        if (e.keyCode != 13) {
            $(this).val($(this).val().replace(/[^A-Za-z0-9_\/:.]+/g, ''));
        }
    });

    $('#youtubeinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="youtubesave">OK</div>');
    });

    $('#youtubeinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#youtubeinput').next().remove();
            if ($("#youtubeinput2").val() != "") {
                $("#youtubeinput").val($("#youtubeinput2").val());
            } else {
                if ($("#youtubeinput").val().length != 0) {
                    $("#youtubeinput").val("");
                }
            }
        }
    });

    $(document).on("mouseout", "#youtubesave", function () {
        $("#youtubesave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#youtubesave", function () {
        $("#youtubesave").addClass('hover_div');
    });

    $(document).on("click", "#youtubesave", function () {
        $("#youtubesave").removeClass('hover_div');
        var value0 = $('#youtubeinput2').val();
        var value1 = $('#youtubeinput').val();
        var pos = value1.lastIndexOf("/");
        value1 = value1.substr(pos + 1);
        value1 = value1.replace("?view_as=subscriber", "");
        addbutton(value0, value1, "youtube");
    });

    /*$('#youtubeinput').on("keyup", function (e) {
		if(e.keyCode!=13)
		{
			$(this).val($(this).val().replace(/[^A-Za-z0-9_.]+/g,''));
		}
	});*/

    $('#googleplayinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="googleplaysave">OK</div>');
    });

    $('#googleplayinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#googleplayinput').next().remove();
            if ($("#googleplayinput2").val() != "") {
                $("#googleplayinput").val($("#googleplayinput2").val());
            } else {
                if ($("#googleplayinput").val().length != 0) {
                    $("#googleplayinput").val("");
                }
            }
        }
    });

    $(document).on("mouseout", "#googleplaysave", function () {
        $("#googleplaysave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#googleplaysave", function () {
        $("#googleplaysave").addClass('hover_div');
    });

    $(document).on("click", "#googleplaysave", function () {
        $("#googleplaysave").removeClass('hover_div');
        var value0 = $('#googleplayinput2').val();
        var value1 = $('#googleplayinput').val();
        addbutton(value0, value1, "googleplay");
    });

    /*$('#googleplayinput').on("keyup", function (e) {
		if(e.keyCode!=13)
		{
			$(this).val($(this).val().replace(/[^A-Za-z0-9_]+/g,''));
		}
	});*/

    $('#appstoreinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="appstoresave">OK</div>');
    });

    $('#appstoreinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#appstoreinput').next().remove();
            if ($("#appstoreinput2").val()) {
                $("#appstoreinput").val($("#appstoreinput2").val());
            } else {
                if ($("#appstoreinput").val().length) {
                    $("#appstoreinput").val("");
                }
            }
        }
    });

    $(document).on("mouseout", "#appstoresave", function () {
        $("#appstoresave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#appstoresave", function () {
        $("#appstoresave").addClass('hover_div');
    });

    $(document).on("click", "#appstoresave", function () {
        $("#appstoresave").removeClass('hover_div');
        var value0 = $('#appstoreinput2').val();
        var value1 = $('#appstoreinput').val();
        addbutton(value0, value1, "appstore");
    });


    $('#siteinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="sitesave">OK</div>');
    });

    $('#siteinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#siteinput').next().remove();
            if ($("#siteinput2").val() != "") {
                $("#siteinput").val($("#siteinput2").val());
            } else {
                if ($("#siteinput").val().length != 0) {
                    $("#siteinput").val("");
                }
            }
        }
    });

    $(document).on("mouseout", "#sitesave", function () {
        $("#sitesave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#sitesave", function () {
        $("#sitesave").addClass('hover_div');
    });

    $(document).on("click", "#sitesave", function () {
        $("#sitesave").removeClass('hover_div');
        var value0 = $('#siteinput2').val();
        var value1 = $('#siteinput').val();
        addbutton(value0, value1, "site");
    });

    /*$('#siteinput').on("keyup", function (e) {
		if(e.keyCode!=13)
		{
			$(this).val($(this).val().replace(/[^A-Za-z0-9_]+/g,''));
		}
	});*/

    $('#phoneinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="phonesave">OK</div>');
        if ($("#phoneinput2").val() === "") {
            $("#phoneinput").val("+");
        }
    });

    $('#phoneinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#phoneinput').next().remove();
            if ($("#phoneinput2").val() !== "") {
                $("#phoneinput").val("+" + $("#phoneinput2").val());
            } else {
                if ($("#phoneinput").val().length !== 0) {
                    $("#phoneinput").val("");
                }
            }
            if ($("#phoneinput").val() === "+") {
                $("#phoneinput").val("");
            }
        }
    });

    $(document).on("mouseout", "#phonesave", function () {
        $("#phonesave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#phonesave", function () {
        $("#phonesave").addClass('hover_div');
    });

    $(document).on("click", "#phonesave", function () {
        $("#phonesave").removeClass('hover_div');
        var value0 = $('#phoneinput2').val();
        var value1 = $('#phoneinput').val();
        value1 = value1.replace("+", "");
        addbutton(value0, value1, "phone");
    });

    $('#phoneinput').on("keyup", function (e) {
        if (e.keyCode != 13) {
            $(this).val($(this).val().replace(/[^0-9+]+/g, ''));
        }
    });

    $('#locationinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="locationsave">OK</div>');
    });

    $('#locationinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#locationinput').next().remove();
            if ($("#locationinput2").val() != "") {
                $("#locationinput").val($("#locationinput2").val());
            } else {
                if ($("#locationinput").val().length != 0) {
                    $("#locationinput").val("");
                }
            }
        }
    });

    $(document).on("mouseout", "#locationsave", function () {
        $("#locationsave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#locationsave", function () {
        $("#locationsave").addClass('hover_div');
    });

    $(document).on("click", "#locationsave", function () {
        $("#locationsave").removeClass('hover_div');
        var value0 = $('#locationinput2').val();
        var value1 = $('#locationinput').val();
        addbutton(value0, value1, "location");
    });

    $('#emailinput').on("focus", function () {
        $(this).parent('div').append('<div class="input-group-addon" id="emailsave">OK</div>');
    });

    $('#emailinput').on("focusout", function () {
        if (!$("div").is(".hover_div")) {
            $('#emailinput').next().remove();
            if ($("#emailinput2").val() != "") {
                $("#emailinput").val($("#emailinput2").val());
            } else {
                if ($("#emailinput").val().length != 0) {
                    $("#emailinput").val("");
                }
            }
        }
    });

    $(document).on("mouseout", "#emailsave", function () {
        $("#emailsave").removeClass('hover_div');
    });

    $(document).on("mouseover", "#emailsave", function () {
        $("#emailsave").addClass('hover_div');
    });

    $(document).on("click", "#emailsave", function () {
        $("#emailsave").removeClass('hover_div');
        var value0 = $('#emailinput2').val();
        var value1 = $('#emailinput').val();
        addbutton(value0, value1, "email");
    });

    /*$('#emailinput').on("keyup", function (e) {
		if(e.keyCode!=13)
		{
			$(this).val($(this).val().replace(/[^0-9+]+/g,''));
		}
	});*/

    $(document).on("click", "#zakaz_call_modal", function () {
        $('#modal_zakazcall').modal('show');
    });

    $('#phonef').on("keyup", function (e) {
        if (e.keyCode != 13) {
            $(this).val($(this).val().replace(/[^0-9+]+/g, ''));
        }
    });

    $('#phonef').on("focus", function () {
        $(this).val("+");
    });

    $('#phonef').on("focusout", function () {
        if ($(this).val() === "+") {
            $("#phonef").val("");
        }
    });

    $(document).on("click", "#zakaz_call", function () {
        $("#succes_send").css("display", "none");
        $("#error_send1").css("display", "none");
        $("#error_send2").css("display", "none");
        $("#error_send3").css("display", "none");
        $("#error_send4").css("display", "none");
        var phone = $("#phonef").val();

        var agreement_check = $("#checkBox").prop("checked");
        var socbutton = "zakaz_call";
        var login = $("#vizuser").val();
        var url = location.pathname.substring(1);
        if (phone.length == 0 && agreement_check) {
            $("#error_send1").css("display", "block");
        } else if (phone.length != 0 && !agreement_check) {
            $("#error_send2").css("display", "block");
        } else if (phone.length == 0 && !agreement_check) {
            $("#error_send3").css("display", "block");
        } else {
            $.ajax({
                url: `../call/${url}`,
                type: "POST",
                dataType: "text",
                data: {phone: phone, login: login, socbutton: socbutton},
                success: function (data) {
                    $("#succes_send").css("display", "block");
                    setTimeout(function () {
                        $("#modal_zakazcall").modal("hide");
                    }, 2000);
                },
                error: function () {
                    $("#error_send4").css("display", "block");
                }
            });
        }
    });

    //Delete profile
    $("#delpr").on("click", function () {
        $('#modal_delprofile').modal('show');
    });

    $("#delprofile").on("click", function () {
        const login = $("#addrprofile2").val();
        $.ajax({
            url: "../api/profile/",
            type: "DELETE",
            dataType: "text",
            data: {delprofile: login},
            success: (data) => {
                const t = JSON.parse(data);
                if (t[0] === "error") {
                    $('#modal_errdelprofile').modal('show');
                    return false;
                } else {
                    document.location.href = t[1];
                }
            }
        });
    });

    // Analitics
    $("#analitycs").on("click", function () {
        $('#modal_analitycs').modal('show');
    });

    $(".socbutton").on("click", function () {
        const socbutton = $(this).attr("id");
        const login = $("#vizuser").val();
        $.ajax({
            url: "../api/analytics/",
            type: "POST",
            dataType: "text",
            data: {socbutton: socbutton, login: login},
            success: function (data) {
                return true;
            }
        });
    });

    // $("#subscribe").on("click", function () {
    //     var subemail = $("#subemail").val();
    //     $.ajax({
    //         url: "../ajax.php",
    //         type: "POST",
    //         dataType: "text",
    //         data: {subscribe: subscribe, subemail: subemail},
    //         success: function (data) {
    //             var t = JSON.parse(data);
    //             if (t[0] == "error") {
    //                 $('#modal_err').modal('show');
    //                 return false;
    //             }
    //             else {
    //                 $('#modal_success').modal('show');
    //                 $('#subdiv').css("display", "none");
    //                 $('#subdiv2').css("display", "block");
    //                 $('#subbutton').remove();
    //             }
    //         }
    //     });
    // });

    $("#share").on("click", function () {
        $('#modal_share').modal('show');
    });

    $("#activatezakazcall").on("click", function () {
        const namecompany = $("#namecompany").val();
        const addrcompany = $("#addrcompany").val();
        const greeting = $("#greeting").val();
        const calltoaction = $("#calltoaction").val();
        if (!namecompany.length || !addrcompany.length || !greeting.length || !calltoaction.length) {
            $("#smtxt_act1").css("display", "block");
            $("#smtxt_act2").css("display", "none");
        } else {
            $.ajax({
                url: "../api/profile/",
                type: "POST",
                dataType: "text",
                data: {
                    namecompany: namecompany, addrcompany: addrcompany,
                    greeting: greeting, calltoaction: calltoaction
                },
                success: function (data) {
                    var t = JSON.parse(data);
                    if (t[0] == "error") {
                        $('#modal_err').modal('show');
                        return false;
                    } else {
                        $("#smtxt_act2").css("display", "block");
                        $("#smtxt_act1").css("display", "none");
                        $("#chkzcall").css("display", "inline");
                        var namebtn1 = $("#namebtn").val();
                        $("#activatezakazcall").html(namebtn1);
                        $(".chkact").css("display", "none");
                        $("#namecompany2").val(namecompany);
                        $("#addrcompany2").val(addrcompany);
                        $("#greeting2").html(greeting);
                        $("#calltoaction2").html(calltoaction);
                        var sitecompany = $("#sitecompany").val();
                        if (sitecompany.length != 0) {
                            $(".chkact2").css("display", "none");
                            $("#wjcode").css("display", "block");
                            $("#wjsettings").removeClass("wjsettings2");
                            $("#wjsettings").addClass("wjsettings1");
                            $("#wjtop").removeClass("wjtop2");
                            $("#wjtop").addClass("wjtop1");
                            var namebtn2 = $("#namebtn2").val();
                            $("#activatewj").html(namebtn2);
                        } else {
                            var namebtn2 = $("#namebtn3").val();
                            $("#activatewj").html(namebtn2);
                        }
                        setTimeout(function () {
                            $('#smtxt_act2').css("display", "none");
                            $("#smtxt_wj1").css("display", "none");
                            $("#smtxt_wj2").css("display", "none");
                            $("#smtxt_wj3").css("display", "none");
                            $("#smtxt_wj4").css("display", "none");
                            $("#smtxt_wj5").css("display", "none");
                            $("#smtxt_wj6").css("display", "none");
                            $("#smtxt_wj7").css("display", "none");
                            $("#smtxt_wj8").css("display", "none");
                        }, 2000);
                    }
                }
            });
        }
    });

    $("#activatewj").on("click", function () {
        const namecompany = $("#namecompany2").val();
        const addrcompany = $("#addrcompany2").val();
        const sitecompany = $("#sitecompany").val();

        $("#smtxt_wj1").css("display", "none");
        $("#smtxt_wj2").css("display", "none");
        $("#smtxt_wj3").css("display", "none");
        $("#smtxt_wj4").css("display", "none");
        $("#smtxt_wj5").css("display", "none");
        $("#smtxt_wj6").css("display", "none");
        $("#smtxt_wj7").css("display", "none");
        $("#smtxt_wj8").css("display", "none");
        if (!namecompany.length && addrcompany.length && sitecompany.length) {
            $("#smtxt_wj1").css("display", "block");
        } else if (namecompany.length && !addrcompany.length && sitecompany.length) {
            $("#smtxt_wj2").css("display", "block");
        } else if (namecompany.length && addrcompany.length && !sitecompany.length) {
            $("#smtxt_wj3").css("display", "block");
        } else if (!namecompany.length && !addrcompany.length && sitecompany.length) {
            $("#smtxt_wj4").css("display", "block");
        } else if (!namecompany.length && addrcompany.length && !sitecompany.length) {
            $("#smtxt_wj5").css("display", "block");
        } else if (namecompany.length && !addrcompany.length && !sitecompany.length) {
            $("#smtxt_wj6").css("display", "block");
        } else if (!namecompany.length && !addrcompany.length && !sitecompany.length) {
            $("#smtxt_wj7").css("display", "block");
        } else {
            $.ajax({
                url: "../api/profile/",
                type: "POST",
                dataType: "text",
                data: {namecompany2: namecompany, addrcompany2: addrcompany, sitecompany: sitecompany},
                success: function (data) {
                    const t = JSON.parse(data);
                    if (t[0] === "error") {
                        $('#modal_err').modal('show');
                        return false;
                    } else {
                        $("#smtxt_wj8").css("display", "block");
                        $("#smtxt_wj7").css("display", "none");
                        const namebtn2 = $("#namebtn2").val();
                        $("#activatewj").html(namebtn2);
                        $(".chkact").css("display", "none");
                        $(".chkact2").css("display", "none");
                        $("#wjcode").css("display", "block");
                        $("#sitebtn_div").css("display", "block");
                        $("#site").attr("href", sitecompany);
                        $("#siteinput").val(sitecompany);
                        $("#wjsettings").removeClass("wjsettings2");
                        $("#wjsettings").addClass("wjsettings1");
                        $("#wjtop").removeClass("wjtop2");
                        $("#wjtop").addClass("wjtop1");
                        $("#namecompany").val(namecompany);
                        $("#addrcompany").val(addrcompany);
                        const namebtn1 = $("#namebtn").val();
                        $("#activatezakazcall").html(namebtn1);
                        $("#chkzcall").css("display", "inline");
                        setTimeout(() => {
                            $('#smtxt_wj8').css("display", "none");
                        }, 2000);
                    }
                }
            });
        }
    });
});


// function change_language() {
//     $('#smtxt_newpass1').css("display", "none");
//     $('#smtxt_newpass2').css("display", "none");
//     var newpass = $("#inputPass3").val();
//     var user_id = $("#user_id").val();
//     if (newpass.length === 0) {
//         $('#smtxt_newpass1').css("display", "block");
//     }
//     else {
//         $.ajax({
//             url: "../restore.php",
//             type: "POST",
//             dataType: "text",
//             data: ("newpass=" + newpass + "&user_id=" + user_id),
//             success: function (data) {
//                 var t = JSON.parse(data);
//                 if (t[0] === "error") {
//                     $('#smtxt_newpass2').css("display", "block");
//                 }
//                 else {
//                     document.location.href = t[1];
//                 }
//             }
//         });
//     }
// }

function addbutton(value0, value, button) {
    let newhref, sPhone;
    if (value0.length) {
        if (button === "phone") {
            const phonevalue = "tel:" + value;
            const href = $("#" + button).attr("href");
            newhref = href.replace(value0, phonevalue);
        } else if (button === "location") {
            const href = $("#" + button).text();
            newhref = href.replace(value0, value);
        } else {
            const href = $("#" + button).attr("href");
            newhref = href.replace(value0, value);
        }
    }
    $.ajax({
        url: "../api/profile/",
        type: "POST",
        dataType: "text",
        data: {addbutton: value, button: button},
        success: function (data) {
            const t = JSON.parse(data);
            if (button === "phone") {
                const clearPhone = value.replace(/[^0-9]+/g, '');
                const sCountry = clearPhone.substr(0, 1);
                const sArea = clearPhone.substr(1, 3);
                const sPrefix = clearPhone.substr(4, 3);
                const sNumber = clearPhone.substr(7);
                sPhone = `+${sCountry}(${sArea})${sPrefix}-${sNumber}`;
            }
            if (t[0] === "error") {
                $('#modal_errbutton').modal('show');
                return false;
            } else {
                $(`#${button}save`).remove();
                $(`#${button}input`).parent('div').addClass('has-success');
                $(`#${button}input`).parent('div').prepend(`
                    <span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                    <span id="inputSuccess2Status" class="sr-only">ok</span>`);
                const obj3 = {
                    'whatsapp': 'WhatsApp',
                    'viber': 'Viber',
                    'instagram': 'Instagram',
                    'vk': 'VK',
                    'telegram': 'Telegram',
                    'ok': 'Odnoklassniki',
                    'facebook': 'facebook',
                    'twitter': 'Twitter',
                    'skype': 'Skype',
                    'youtube': 'YouTube',
                    'googleplay': 'Google Play',
                    'appstore': 'App Store',
                    'email2': 'Email',
                    'site': 'l',
                    'phone': 'Phone',
                    'location': 'Address'
                };
                if (value0 !== 0) {
                    $("#" + button).attr('href', newhref);
                    if (button === "phone") {
                        $("#" + button).html(sPhone);
                    }
                    if (button === "location") {
                        $("#" + button).html(newhref);
                    }
                } else {
                    var obj = {
                        'whatsapp': 'https://api.whatsapp.com/send?phone=',
                        'viber': 'viber://chat?number=',
                        'instagram': 'https://www.instagram.com/',
                        'vk': 'https://vk.me/',
                        'telegram': 'https://t.me/',
                        'ok': 'https://ok.ru/',
                        'facebook': 'https://m.me/',
                        'twitter': 'https://twitter.com/',
                        'skype': 'skype:',
                        'youtube': 'https://www.youtube.com/channel/',
                        'googleplay': '',
                        'appstore': '',
                        'email2': ''
                    };
                    var obj2 = {
                        'whatsapp': 'WhatsApp',
                        'viber': 'Viber',
                        'instagram': 'Instagram',
                        'vk': 'VK',
                        'telegram': 'Telegram',
                        'ok': 'OK',
                        'facebook': 'facebook',
                        'twitter': 'Twitter',
                        'skype': 'Skype',
                        'youtube': 'YouTube',
                        'googleplay': 'Google Play',
                        'appstore': 'App Store',
                        'email2': 'Email'
                    };
                    let soclink = "";
                    if (button === "skype") {
                        soclink = obj[button] + value + '?call';
                        $("#social_linkdiv").append(`
                            <div class="social_link">
                                <a href="${soclink}" target="_blank" id="${button}" title="${obj2[button]}">
                                    <img class="socialimg" src="/static/img/soc/${button}.png" width="60px"/>
                                </a>
                                <br/><small>${obj2[button]}</small>
                            </div>`);
                    } else if (button === "site") {
                        $("#sitebtn_div").css("display", "block");
                        $("#site").attr("href", value);
                    } else if (button === "phone") {
                        $("#phone_div").css("display", "block");
                        var phonehref = 'tel:' + value;
                        $("#phone").attr("href", phonehref);
                        $("#phone").text(sPhone);
                    } else if (button === "location") {
                        $("#location_div").css("display", "block");
                        $("#location").html(value);
                    } else {
                        soclink = obj[button] + value;
                        $("#social_linkdiv").append(`
                            <div class="social_link">
                                <a href="${soclink}" target="_blank" id="${button}" title="${obj2[button]}">
                                    <img src="/static/img/soc/${button}.png" width="60px" />
                                </a>
                                <br />
                                <small>${obj2[button]}</small>
                            </div>`);
                    }
                }
                if (!value) {
                    $(`#${button}input2`).val('');
                    $(`#${button}input`).attr('placeholder', obj3[button]);
                    if (button === "site") {
                        $("#sitebtn_div").css("display", "none");
                        $("#wjcode").css("display", "none");
                        $("#sitecompany").val("");
                        $("#wjsettings").removeClass("wjsettings1");
                        $("#wjsettings").addClass("wjsettings2");
                        $("#wjtop").removeClass("wjtop1");
                        $("#wjtop").addClass("wjtop2");
                        $(".chkact2").css("display", "block");
                        const namebtn = $("#namebtn3").val();
                        $("#activatewj").html(namebtn);
                        [1, 2, 3, 4, 5, 6, 7, 8].forEach(num => $(`#smtxt_wj${num}`).css("display", "none"));
                    } else if (button === "phone") {
                        $("#phone_div").css("display", "none");
                    } else if (button === "location") {
                        $("#location_div").css("display", "none");
                    } else {
                        $("#" + button).parent('div').remove();
                    }
                } else {
                    if (["whatsapp", "viber", "phone"].includes(button)) {
                        $(`#${button}input`).val("+" + value);
                    } else if (button === "site") {
                        var namecompany2 = $("#namecompany2").val();
                        var addrcompany2 = $("#addrcompany2").val();
                        $(".chkact2").css("display", "none");
                        var namebtn = $("#namebtn2").val();
                        $("#activatewj").html(namebtn);
                        if (!namecompany2.length && !addrcompany2.length) {
                            $("#wjcode").css("display", "none");
                            $("#wjsettings").removeClass("wjsettings1");
                            $("#wjsettings").addClass("wjsettings2");
                            $("#wjtop").removeClass("wjtop1");
                            $("#wjtop").addClass("wjtop2");
                        } else {
                            $("#wjcode").css("display", "block");
                            $("#wjsettings").removeClass("wjsettings2");
                            $("#wjsettings").addClass("wjsettings1");
                            $("#wjtop").removeClass("wjtop2");
                            $("#wjtop").addClass("wjtop1");
                        }
                        [1, 2, 3, 4, 5, 6, 7, 8].forEach(num => $(`#smtxt_wj${num}`).css("display", "none"));
                    } else {
                        $(`#${button}input`).val(value);
                    }
                    $(`#${button}input2`).val(value);
                }
                setTimeout(function () {
                    $('.glyphicon-ok').remove();
                    $('#inputSuccess2Status').remove();
                    $('#' + button + 'input').parent('div').removeClass('has-success');
                }, 1000);
            }
        }
    });
}

function length_check(len_max, field_id, counter_id) {
    const len_current = $(field_id).val().length;
    let rest = len_max - len_current;
    if (rest < 0) rest = 0;
    if (len_current > len_max) {
        $(field_id).val($(field_id).val().substr(0, len_max));
    } else {
        document.getElementById(counter_id).firstChild.data = rest + ' / ' + len_max;
    }
}