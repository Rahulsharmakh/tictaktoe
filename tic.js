var flag = 1;

function b1ck() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;

        bcheck();
        flag = 0;

    } else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;

        bcheck();
        flag = 1;

    }

}

function b2ck() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        bcheck();
        flag = 0;

    } else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        bcheck();
        flag = 1;

    }

}

function b3ck() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        bcheck();
        flag = 0;

    } else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        bcheck();
        flag = 1;

    }

}

function b4ck() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        bcheck();
        flag = 0;

    } else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        bcheck();
        flag = 1;

    }

}

function b5ck() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        bcheck();
        flag = 0;

    } else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        bcheck();
        flag = 1;

    }

}

function b6ck() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        bcheck();
        flag = 0;

    } else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        bcheck();
        flag = 1;

    }

}

function b7ck() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        bcheck();
        flag = 0;

    } else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        bcheck();
        flag = 1;

    }

}

function b8ck() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        bcheck();
        flag = 0;

    } else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        bcheck();
        flag = 1;

    }

}

function b9ck() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        bcheck();
        flag = 0;

    } else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        bcheck();
        flag = 1;

    }

}

function bcheck() {
    if (flag == 1) {
        var pname = "Player 1";
        var smb = "X";
        var bl1 = document.getElementById("b1").value;
        var bl2 = document.getElementById("b2").value;
        var bl3 = document.getElementById("b3").value;
        var bl4 = document.getElementById("b4").value;
        var bl5 = document.getElementById("b5").value;
        var bl6 = document.getElementById("b6").value;
        var bl7 = document.getElementById("b7").value;
        var bl8 = document.getElementById("b8").value;
        var bl9 = document.getElementById("b9").value;
        var a1 = document.getElementById("b1");
        var a2 = document.getElementById("b2");
        var a3 = document.getElementById("b3");
        var a4 = document.getElementById("b4");
        var a5 = document.getElementById("b5");
        var a6 = document.getElementById("b6");
        var a7 = document.getElementById("b7");
        var a8 = document.getElementById("b8");
        var a9 = document.getElementById("b9");
        if (bl1 == smb && bl2 == smb && bl3 == smb) {
            document.getElementById("k1").innerHTML = "Player 1 Won";
            a1.style.backgroundColor = "lime";
            a2.style.backgroundColor = "lime";
            a3.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl4 == smb && bl5 == smb && bl6 == smb) {
            document.getElementById("k1").innerHTML = "Player 1 Won";
            a4.style.backgroundColor = "lime";
            a5.style.backgroundColor = "lime";
            a6.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl7 == smb && bl8 == smb && bl9 == smb) {
            document.getElementById("k1").innerHTML = "Player 1 Won";
            a7.style.backgroundColor = "lime";
            a8.style.backgroundColor = "lime";
            a9.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl1 == smb && bl4 == smb && bl7 == smb) {
            document.getElementById("k1").innerHTML = "Player 1 Won";
            a1.style.backgroundColor = "lime";
            a4.style.backgroundColor = "lime";
            a7.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl2 == smb && bl5 == smb && bl8 == smb) {
            document.getElementById("k1").innerHTML = "Player 1 Won";
            a2.style.backgroundColor = "lime";
            a5.style.backgroundColor = "lime";
            a8.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl1 == smb && bl5 == smb && bl9 == smb) {
            document.getElementById("k1").innerHTML = "Player 1 Won";
            a1.style.backgroundColor = "lime";
            a5.style.backgroundColor = "lime";
            a9.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl3 == smb && bl5 == smb && bl7 == smb) {
            document.getElementById("k1").innerHTML = "Player 1 Won";
            a3.style.backgroundColor = "lime";
            a5.style.backgroundColor = "lime";
            a7.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl3 == smb && bl6 == smb && bl9 == smb) {
            document.getElementById("k1").innerHTML = "Player 1 Won";
            a3.style.backgroundColor = "lime";
            a6.style.backgroundColor = "lime";
            a9.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }

    } else if (flag == 0) {
        var pname = "Player 2";
        var smb = "0";
        var bl1 = document.getElementById("b1").value;
        var bl2 = document.getElementById("b2").value;
        var bl3 = document.getElementById("b3").value;
        var bl4 = document.getElementById("b4").value;
        var bl5 = document.getElementById("b5").value;
        var bl6 = document.getElementById("b6").value;
        var bl7 = document.getElementById("b7").value;
        var bl8 = document.getElementById("b8").value;
        var bl9 = document.getElementById("b9").value;
        var a1 = document.getElementById("b1");
        var a2 = document.getElementById("b2");
        var a3 = document.getElementById("b3");
        var a4 = document.getElementById("b4");
        var a5 = document.getElementById("b5");
        var a6 = document.getElementById("b6");
        var a7 = document.getElementById("b7");
        var a8 = document.getElementById("b8");
        var a9 = document.getElementById("b9");
        if (bl1 == smb && bl2 == smb && bl3 == smb) {
            document.getElementById("k1").innerHTML = "Player 2 Won";
            a1.style.backgroundColor = "lime";
            a2.style.backgroundColor = "lime";
            a3.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl4 == smb && bl5 == smb && bl6 == smb) {
            document.getElementById("k1").innerHTML = "Player 2 Won";
            a4.style.backgroundColor = "lime";
            a5.style.backgroundColor = "lime";
            a6.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl7 == smb && bl8 == smb && bl9 == smb) {
            document.getElementById("k1").innerHTML = "Player 2 Won";
            a7.style.backgroundColor = "lime";
            a8.style.backgroundColor = "lime";
            a9.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl1 == smb && bl4 == smb && bl7 == smb) {
            document.getElementById("k1").innerHTML = "Player 2 Won";
            a1.style.backgroundColor = "lime";
            a4.style.backgroundColor = "lime";
            a7.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl2 == smb && bl5 == smb && bl8 == smb) {
            document.getElementById("k1").innerHTML = "Player 2 Won";
            a2.style.backgroundColor = "lime";
            a5.style.backgroundColor = "lime";
            a8.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl1 == smb && bl5 == smb && bl9 == smb) {
            document.getElementById("k1").innerHTML = "Player 2 Won";
            a1.style.backgroundColor = "lime";
            a5.style.backgroundColor = "lime";
            a9.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl3 == smb && bl5 == smb && bl7 == smb) {
            document.getElementById("k1").innerHTML = "Player 2 Won";
            a3.style.backgroundColor = "lime";
            a5.style.backgroundColor = "lime";
            a7.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }
        if (bl3 == smb && bl6 == smb && bl9 == smb) {
            document.getElementById("k1").innerHTML = "Player 2 Won";
            a3.style.backgroundColor = "lime";
            a6.style.backgroundColor = "lime";
            a9.style.backgroundColor = "lime";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
        }


    }
}

function cgame() {
    flag = 1;
    var a1 = document.getElementById("b1");
    var a2 = document.getElementById("b2");
    var a3 = document.getElementById("b3");
    var a4 = document.getElementById("b4");
    var a5 = document.getElementById("b5");
    var a6 = document.getElementById("b6");
    var a7 = document.getElementById("b7");
    var a8 = document.getElementById("b8");
    var a9 = document.getElementById("b9");

    document.getElementById("b1").value = "";
    document.getElementById("b1").disabled = false;

    document.getElementById("k1").innerHTML = "";
    document.getElementById("b2").value = "";
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").value = "";
    document.getElementById("b3").disabled = false;
    document.getElementById("b4").value = "";
    document.getElementById("b4").disabled = false;
    document.getElementById("b5").value = "";
    document.getElementById("b5").disabled = false;
    document.getElementById("b6").value = "";
    document.getElementById("b6").disabled = false;
    document.getElementById("b7").value = "";
    document.getElementById("b7").disabled = false;
    document.getElementById("b8").value = "";
    document.getElementById("b8").disabled = false;
    document.getElementById("b9").value = "";
    document.getElementById("b9").disabled = false;
    a1.style.backgroundColor = "white";
    a2.style.backgroundColor = "white";
    a3.style.backgroundColor = "white";
    a4.style.backgroundColor = "white";
    a5.style.backgroundColor = "white";
    a6.style.backgroundColor = "white";
    a7.style.backgroundColor = "white";
    a8.style.backgroundColor = "white";
    a9.style.backgroundColor = "white";
}