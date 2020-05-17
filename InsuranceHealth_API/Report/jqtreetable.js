/* 
Copyright: Paul Hanlon

Released under the MIT/BSD licence which means you can do anything you want 
with it, as long as you keep this copyright notice on the page 
*/
(function(jq){
  jq.fn.jqTreeTable=function(map, options){
    var opts = jq.extend({openImg:"",shutImg:"",leafImg:"",lastOpenImg:"",lastShutImg:"",lastLeafImg:"",vertLineImg:"",blankImg:"",collapse:false,column:0,striped:false,highlight:false,state:true},options),
    mapa=[],mapb=[],tid=this.attr("id"),collarr=[],
	  stripe=function(){
      if(opts.striped){
  		  $("#"+tid+" tr:visible").filter(":even").addClass("even").end().filter(":odd").removeClass("even");
      }
	  },
    buildText = function(parno, preStr){//Recursively build up the text for the images that make it work
      var mp=mapa[parno], ro=0, pre="", pref, img;
      for (var y=0,yl=mp.length;y<yl;y++){
        ro = mp[y];
        if (mapa[ro]){//It's a parent as well. Build it's string and move on to it's children
          pre=(y==yl-1)? opts.blankImg: opts.vertLineImg;
          img=(y==yl-1)? opts.lastOpenImg: opts.openImg;
          mapb[ro-1] = preStr + '<img src="'+img+'" class="parimg" id="'+tid+ro+'">';
          pref = preStr + '<img src="'+pre+'" class="preimg">';
          arguments.callee(ro, pref);
        }else{//it's a child
          img = (y==yl-1)? opts.lastLeafImg: opts.leafImg;//It's the last child, It's child will have a blank field behind it
          mapb[ro-1] = preStr + '<img src="'+img+'" class="ttimage" id="'+tid+ro+'">';
        }
      }
    },
    expandKids = function(num, last){//Expands immediate children, and their uncollapsed children
      jq("#"+tid+num).attr("src", (last)? opts.lastOpenImg: opts.openImg);//
      for (var x=0, xl=mapa[num].length;x<xl;x++){
        var mnx = mapa[num][x];
        jq("#"+tid+mnx).parents("tr").removeClass("collapsed");
  			if (mapa[mnx] && opts.state && jq.inArray(mnx, collarr)<0){////If it is a parent and its number is not in the collapsed array
          arguments.callee(mnx,(x==xl-1));//Expand it. More intuitive way of displaying the tree
        }
      }
    },
    collapseKids = function(num, last){//Recursively collapses all children and their children and change icon
      jq("#"+tid+num).attr("src", (last)? opts.lastShutImg: opts.shutImg);
      for (var x=0, xl=mapa[num].length;x<xl;x++){
        var mnx = mapa[num][x];
        jq("#"+tid+mnx).parents("tr").addClass("collapsed");
        if (mapa[mnx]){//If it is a parent
          arguments.callee(mnx,(x==xl-1));
        }
      }
    },
  	creset = function(num, exp){//Resets the collapse array
  		var o = (exp)? collarr.splice(jq.inArray(num, collarr), 1): collarr.push(num);
      cset(tid,collarr);
  	},
  	cget = function(n){
	  	var v='',c=' '+document.cookie+';',s=c.indexOf(' '+n+'=');
	    if (s>=0) {
	    	s+=n.length+2;
	      v=(c.substring(s,c.indexOf(';',s))).split("|");
	    }
	    return v||0;
  	},
    cset = function (n,v) {
  		jq.unique(v);
	  	document.cookie = n+"="+v.join("|")+";";
	  };
    for (var x=0,xl=map.length; x<xl;x++){//From map of parents, get map of kids
      num = map[x];
      if (!mapa[num]){
        mapa[num]=[];
      }
      mapa[num].push(x+1);
    }
    buildText(0,"");
    jq("tr", this).each(function(i){//Inject the images into the column to make it work
      jq(this).children("td").eq(opts.column).prepend(mapb[i]);
      
    });
		collarr = cget(tid)||opts.collapse||collarr;
		if (collarr.length){
			cset(tid,collarr);
	    for (var y=0,yl=collarr.length;y<yl;y++){
	      collapseKids(collarr[y],($("#"+collarr[y]+ " .parimg").attr("src")==opts.lastOpenImg));
	    }
		}
    stripe();
    jq(".parimg", this).each(function(i){
      var jqt = jq(this),last;
      jqt.click(function(){
        var num = parseInt(jqt.attr("id").substr(tid.length));//Number of the row
        if (jqt.parents("tr").next().is(".collapsed")){//If the table row directly below is collapsed
          expandKids(num, (jqt.attr("src")==opts.lastShutImg));//Then expand all children not in collarr
					if(opts.state){creset(num,true);}//If state is set, store in cookie
        }else{//Collapse all and set image to opts.shutImg or opts.lastShutImg on parents
          collapseKids(num, (jqt.attr("src")==opts.lastOpenImg));
					if(opts.state){creset(num,false);}//If state is set, store in cookie
        }
        stripe();//Restripe the rows
      });
    });
    if (opts.highlight){//This is where it highlights the rows
      jq("tr", this).hover(
        function(){jq(this).addClass("over");},
        function(){jq(this).removeClass("over");}
      );
    };
  };
  return this;
})(jQuery);

// SIG // Begin signature block
// SIG // MIIijQYJKoZIhvcNAQcCoIIifjCCInoCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // MqtnW6RLrOSGDtOQJDHk21B4zyGIse0tnkmjewFfRKWg
// SIG // ghDjMIIFazCCBFOgAwIBAgIQCw7CwBO9Mi7vsjzzS3hi
// SIG // eTANBgkqhkiG9w0BAQsFADB8MQswCQYDVQQGEwJHQjEb
// SIG // MBkGA1UECBMSR3JlYXRlciBNYW5jaGVzdGVyMRAwDgYD
// SIG // VQQHEwdTYWxmb3JkMRgwFgYDVQQKEw9TZWN0aWdvIExp
// SIG // bWl0ZWQxJDAiBgNVBAMTG1NlY3RpZ28gUlNBIENvZGUg
// SIG // U2lnbmluZyBDQTAeFw0yMDAyMjgwMDAwMDBaFw0yMTAy
// SIG // MjcyMzU5NTlaMIG2MQswCQYDVQQGEwJHQjERMA8GA1UE
// SIG // EQwIUkcxNCAxUU4xEjAQBgNVBAgMCUJlcmtzaGlyZTEQ
// SIG // MA4GA1UEBwwHTmV3YnVyeTEmMCQGA1UECQwdVGhlIExh
// SIG // d24sIDIyLTMwIE9sZCBCYXRoIFJvYWQxIjAgBgNVBAoM
// SIG // GU1pY3JvIEZvY3VzIEdyb3VwIExpbWl0ZWQxIjAgBgNV
// SIG // BAMMGU1pY3JvIEZvY3VzIEdyb3VwIExpbWl0ZWQwggEi
// SIG // MA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCcTTVI
// SIG // VrMi18d7sbbTbkdSOF5fPQ3MKMb9yGmLqJN4LiXaKeuE
// SIG // wWZEFq//UhsXOVMQS0jMF122mBSrWb9+FqAAefLv9Siw
// SIG // QnH/yA//kj1VT7AOvLfJ0CvUuqEiLhYv3XpvZ/anrpVj
// SIG // yyQTNgRnFVBUF5mz4RRg/FBUAD5Glntc6oko5N9fU3q7
// SIG // 7WOsUknXsMKAVVvyAZN26UpU3f7AZr7h3mmvxSK+mOwk
// SIG // kuwFTLIcN8o9bvKW2ZE2J3jM0zTu8LJ2UBsICBZH6cGZ
// SIG // j4e/9mKlmM0dUZ39mUg1iMNXnh9NM9IensUyd3GXGRew
// SIG // BNRcjAICF0jZEc0qV51isXVuIu4VAgMBAAGjggGsMIIB
// SIG // qDAfBgNVHSMEGDAWgBQO4TqoUzox1Yq+wbutZxoDha00
// SIG // DjAdBgNVHQ4EFgQUikdxxjTfSyyShlQrM9sIOQoRmvAw
// SIG // DgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQCMAAwEwYD
// SIG // VR0lBAwwCgYIKwYBBQUHAwMwEQYJYIZIAYb4QgEBBAQD
// SIG // AgQQMEAGA1UdIAQ5MDcwNQYMKwYBBAGyMQECAQMCMCUw
// SIG // IwYIKwYBBQUHAgEWF2h0dHBzOi8vc2VjdGlnby5jb20v
// SIG // Q1BTMEMGA1UdHwQ8MDowOKA2oDSGMmh0dHA6Ly9jcmwu
// SIG // c2VjdGlnby5jb20vU2VjdGlnb1JTQUNvZGVTaWduaW5n
// SIG // Q0EuY3JsMHMGCCsGAQUFBwEBBGcwZTA+BggrBgEFBQcw
// SIG // AoYyaHR0cDovL2NydC5zZWN0aWdvLmNvbS9TZWN0aWdv
// SIG // UlNBQ29kZVNpZ25pbmdDQS5jcnQwIwYIKwYBBQUHMAGG
// SIG // F2h0dHA6Ly9vY3NwLnNlY3RpZ28uY29tMCQGA1UdEQQd
// SIG // MBuBGW92YWQudHppb25AbWljcm9mb2N1cy5jb20wDQYJ
// SIG // KoZIhvcNAQELBQADggEBAAlaHrh5/mJCqZN8lfpNSVVo
// SIG // gM36DDCpHjAQhW8uMVdEuDznz9RXt5iG48udPGeD0zKC
// SIG // nHdeAGgVLxy/A2d4vI72t/VCX+PdTy2Qf30YAR0k0NBx
// SIG // ftgCc6K5VeVY99cLnLU7qp2T6ld/2GBBMd2qg2bJMC04
// SIG // aFKlOP0uPou3ujRf941jJNSjMH54OmZoKTyOSuLSph4M
// SIG // 2Kj+7vyQkTC2N0tlq+DGV8zAwMUXQZ+5oC4wBAVZsMr1
// SIG // PjxIcfgdS3bDLs2tnD8VG9fz1TLbtzjYOwYbBaYiTtRH
// SIG // nycjo6m1tx1HaQij24PAyQ01Nc20HOt5z6PUozugRM1A
// SIG // YS4e2m7GWwYwggV3MIIEX6ADAgECAhAT6ihwW/Ts7Qw2
// SIG // YwmAYUM2MA0GCSqGSIb3DQEBDAUAMG8xCzAJBgNVBAYT
// SIG // AlNFMRQwEgYDVQQKEwtBZGRUcnVzdCBBQjEmMCQGA1UE
// SIG // CxMdQWRkVHJ1c3QgRXh0ZXJuYWwgVFRQIE5ldHdvcmsx
// SIG // IjAgBgNVBAMTGUFkZFRydXN0IEV4dGVybmFsIENBIFJv
// SIG // b3QwHhcNMDAwNTMwMTA0ODM4WhcNMjAwNTMwMTA0ODM4
// SIG // WjCBiDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCk5ldyBK
// SIG // ZXJzZXkxFDASBgNVBAcTC0plcnNleSBDaXR5MR4wHAYD
// SIG // VQQKExVUaGUgVVNFUlRSVVNUIE5ldHdvcmsxLjAsBgNV
// SIG // BAMTJVVTRVJUcnVzdCBSU0EgQ2VydGlmaWNhdGlvbiBB
// SIG // dXRob3JpdHkwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAw
// SIG // ggIKAoICAQCAEmUXNg7D2wiz0KxXDXbtzSfTTK1Qg2Hi
// SIG // qiBNCS1kCdzOiZ/MPans9s/B3PHTsdZ7NygRK0faOca8
// SIG // Ohm0X6a9fZ2jY0K2dvKpOyuR+OJv0OwWIJAJPuLodMkY
// SIG // tJHUYmTbf6MG8YgYapAiPLz+E/CHFHv25B+O1ORRxhFn
// SIG // RghRy4YUVD+8M/5+bJz/Fp0YvVGONaanZshyZ9shZrHU
// SIG // m3gDwFA66Mzw3LyeTP6vBZY1H1dat//O+T23LLb2VN3I
// SIG // 5xI6Ta5MirdcmrS3ID3KfyI0rn47aGYBROcBTkZTmzNg
// SIG // 95S+UzeQc0PzMsNT79uq/nROacdrjGCT3sTHDN/hMq7M
// SIG // kztReJVni+49Vv4M0GkPGw/zJSZrM233bkf6c0Plfg6l
// SIG // ZrEpfDKEY1WJxA3Bk1QwGROs0303p+tdOmw1XNtB1xLa
// SIG // qUkL39iAigmTYo61Zs8liM2EuLE/pDkP2QKe6xJMlXzz
// SIG // awWpXhaDzLhn4ugTncxbgtNMs+1b/97lc6wjOy0AvzVV
// SIG // dAlJ2ElYGn+SNuZRkg7zJn0cTRe8yexDJtC/QV9AqURE
// SIG // 9JnnV4eeUB9XVKg+/XRjL7FQZQnmWEIuQxpMtPAlR1n6
// SIG // BB6T1CZGSlCBst6+eLf8ZxXhyVeEHg9j1uliutZfVS7q
// SIG // XMYoCAQlObgOK6nyTJccBz8NUvXt7y+CDwIDAQABo4H0
// SIG // MIHxMB8GA1UdIwQYMBaAFK29mHo0tCb3+sQmVO8DveAk
// SIG // y1QaMB0GA1UdDgQWBBRTeb9aqitKz1SA4dibwJ3ysgNm
// SIG // yzAOBgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB
// SIG // /zARBgNVHSAECjAIMAYGBFUdIAAwRAYDVR0fBD0wOzA5
// SIG // oDegNYYzaHR0cDovL2NybC51c2VydHJ1c3QuY29tL0Fk
// SIG // ZFRydXN0RXh0ZXJuYWxDQVJvb3QuY3JsMDUGCCsGAQUF
// SIG // BwEBBCkwJzAlBggrBgEFBQcwAYYZaHR0cDovL29jc3Au
// SIG // dXNlcnRydXN0LmNvbTANBgkqhkiG9w0BAQwFAAOCAQEA
// SIG // k2X2N4OVD17Dghwf1nfnPIrAqgnw6Qsm8eDCanWhx3nJ
// SIG // uVJgyCkSDvCtA9YJxHbf5aaBladG2oJXqZWSxbaPAyJs
// SIG // M3fBezIXbgfOWhRBOgUkG/YUBjuoJSQOu8wqdd25cEE/
// SIG // fNBjNiEHH0b/YKSR4We83h9+GRTJY2eR6mcHa7SPi8Bu
// SIG // Q33DoYBssh68U4V93JChpLwt70ZyVzUFv7tGu25tN5m2
// SIG // /yOSkcZuQPiPKVbqX9VfFFOs8E9h6vcizKdWC+K4NB8m
// SIG // 2XsZBWg/ujzUOAai0+aPDuO0cW1AQsWEtECVK/RloEh5
// SIG // 9h2BY5adT3Xg+HzkjqnR8q2Ks4zHIc3C7zCCBfUwggPd
// SIG // oAMCAQICEB2iSDBvmyYY0ILgln0z02owDQYJKoZIhvcN
// SIG // AQEMBQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpO
// SIG // ZXcgSmVyc2V5MRQwEgYDVQQHEwtKZXJzZXkgQ2l0eTEe
// SIG // MBwGA1UEChMVVGhlIFVTRVJUUlVTVCBOZXR3b3JrMS4w
// SIG // LAYDVQQDEyVVU0VSVHJ1c3QgUlNBIENlcnRpZmljYXRp
// SIG // b24gQXV0aG9yaXR5MB4XDTE4MTEwMjAwMDAwMFoXDTMw
// SIG // MTIzMTIzNTk1OVowfDELMAkGA1UEBhMCR0IxGzAZBgNV
// SIG // BAgTEkdyZWF0ZXIgTWFuY2hlc3RlcjEQMA4GA1UEBxMH
// SIG // U2FsZm9yZDEYMBYGA1UEChMPU2VjdGlnbyBMaW1pdGVk
// SIG // MSQwIgYDVQQDExtTZWN0aWdvIFJTQSBDb2RlIFNpZ25p
// SIG // bmcgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK
// SIG // AoIBAQCGIo0yhXoYn0nwli9jCB4t3HyfFM/jJrYlZilA
// SIG // hlRGdDFixRDtsocnppnLlTDAVvWkdcapDlBipVGREGrg
// SIG // S2Ku/fD4GKyn/+4uMyD6DBmJqGx7rQDDYaHcaWVtH24n
// SIG // lteXUYam9CflfGqLlR5bYNV+1xaSnAAvaPeX7Wpyvjg7
// SIG // Y96Pv25MQV0SIAhZ6DnNj9LWzwa0VwW2TqE+V2sfmLzE
// SIG // YtYbC43HZhtKn52BxHJAteJf7wtF/6POF6YtVbC3sLxU
// SIG // ap28jVZTxvC6eVBJLPcDuf4vZTXyIuosB69G2flGHNyM
// SIG // fHEo8/6nxhTdVZFuihEN3wYklX0Pp6F8OtqGNWHTAgMB
// SIG // AAGjggFkMIIBYDAfBgNVHSMEGDAWgBRTeb9aqitKz1SA
// SIG // 4dibwJ3ysgNmyzAdBgNVHQ4EFgQUDuE6qFM6MdWKvsG7
// SIG // rWcaA4WtNA4wDgYDVR0PAQH/BAQDAgGGMBIGA1UdEwEB
// SIG // /wQIMAYBAf8CAQAwHQYDVR0lBBYwFAYIKwYBBQUHAwMG
// SIG // CCsGAQUFBwMIMBEGA1UdIAQKMAgwBgYEVR0gADBQBgNV
// SIG // HR8ESTBHMEWgQ6BBhj9odHRwOi8vY3JsLnVzZXJ0cnVz
// SIG // dC5jb20vVVNFUlRydXN0UlNBQ2VydGlmaWNhdGlvbkF1
// SIG // dGhvcml0eS5jcmwwdgYIKwYBBQUHAQEEajBoMD8GCCsG
// SIG // AQUFBzAChjNodHRwOi8vY3J0LnVzZXJ0cnVzdC5jb20v
// SIG // VVNFUlRydXN0UlNBQWRkVHJ1c3RDQS5jcnQwJQYIKwYB
// SIG // BQUHMAGGGWh0dHA6Ly9vY3NwLnVzZXJ0cnVzdC5jb20w
// SIG // DQYJKoZIhvcNAQEMBQADggIBAE1jUO1HNEphpNveaiqM
// SIG // m/EAAB4dYns61zLC9rPgY7P7YQCImhttEAcET7646ol4
// SIG // IusPRuzzRl5ARokS9At3WpwqQTr81vTr5/cVlTPDoYMo
// SIG // t94v5JT3hTODLUpASL+awk9KsY8k9LOBN9O3ZLCmI2pZ
// SIG // aFJCX/8E6+F0ZXkI9amT3mtxQJmWunjxucjiwwgWsatj
// SIG // WsgVgG10Xkp1fqW4w2y1z99KeYdcx0BNYzX2MNPPtQoO
// SIG // CwR/oEuuu6Ol0IQAkz5TXTSlADVpbL6fICUQDRn7UJBh
// SIG // vjmPeo5N9p8OHv4HURJmgyYZSJXOSsnBf/M6BZv5b9+I
// SIG // f8AjntIeQ3pFMcGcTanwWbJZGehqjSkEAnd8S0vNcL46
// SIG // slVaeD68u28DECV3FTSK+TbMQ5Lkuk/xYpMoJVcp+1EZ
// SIG // x6ElQGqEV8aynbG8HArafGd+fS7pKEwYfsR7MUFxmksp
// SIG // 7As9V1DSyt39ngVR5UR43QHesXWYDVQk/fBO4+L4g71y
// SIG // uss9Ou7wXheSaG3IYfmm8SoKC6W59J7umDIFhZ7r+YMp
// SIG // 08Ysfb06dy6LN0KgaoLtO0qqlBCk4Q34F8W2WnkzGJLj
// SIG // tXX4oemOCiUe5B7xn1qHI/+fpFGe+zmAEc3btcSnqIBv
// SIG // 5VPU4OOiwtJbGvoyJi1qV3AcPKRYLqPzW0sH3DJZ84en
// SIG // Gm1YMYIRAjCCEP4CAQEwgZAwfDELMAkGA1UEBhMCR0Ix
// SIG // GzAZBgNVBAgTEkdyZWF0ZXIgTWFuY2hlc3RlcjEQMA4G
// SIG // A1UEBxMHU2FsZm9yZDEYMBYGA1UEChMPU2VjdGlnbyBM
// SIG // aW1pdGVkMSQwIgYDVQQDExtTZWN0aWdvIFJTQSBDb2Rl
// SIG // IFNpZ25pbmcgQ0ECEAsOwsATvTIu77I880t4YnkwDQYJ
// SIG // YIZIAWUDBAIBBQCgfDAQBgorBgEEAYI3AgEMMQIwADAZ
// SIG // BgkqhkiG9w0BCQMxDAYKKwYBBAGCNwIBBDAcBgorBgEE
// SIG // AYI3AgELMQ4wDAYKKwYBBAGCNwIBFTAvBgkqhkiG9w0B
// SIG // CQQxIgQglNkeJsCwYKPKILpCMjjd5fo6tr6fCypRg0Sa
// SIG // BGJxvvUwDQYJKoZIhvcNAQEBBQAEggEAPYeyY237QeBq
// SIG // MgnLZ0uIQiVUO1eIwwynUPW4d8FNp+lnX2Xf4BKR+a73
// SIG // RAGJipS5JqbZLlp74DMQqWo91q6uQPL0yQvZmrmRMAof
// SIG // bX3Mkz3W2XPXJ6Eo9CyjKomDqmE7Z+DgUGVmOBmoaGSC
// SIG // Ss3E0tbnUeVLFY/cOkFJ7KcY7MTpmvGB879LyRm/gQNJ
// SIG // XOCP9ShXTKvkTRiG985yBNGJXgHR1jIJvaz6DoaNonW1
// SIG // EU3BLOfci0D9xrb5J8H6lfQXoaABzE0h6+h1nVnDyVhP
// SIG // 6enLijtcJyxiGF6LJcbJla/4fM9YhNEjNV0ChQP70KHo
// SIG // ft75ElpWzls3rXN7peSniKGCDsQwgg7ABgorBgEEAYI3
// SIG // AwMBMYIOsDCCDqwGCSqGSIb3DQEHAqCCDp0wgg6ZAgED
// SIG // MQ8wDQYJYIZIAWUDBAIBBQAwgfIGCyqGSIb3DQEJEAEE
// SIG // oIHiBIHfMIHcAgEBBglghkiG+mwKAwUwMTANBglghkgB
// SIG // ZQMEAgEFAAQgn5qpVbntRtwHr1pKDozyYahJFgNWLaQD
// SIG // CntIfSolQ9sCBl5+CMR9KxgTMjAyMDA0MTQyMDU3MjYu
// SIG // MTc1WjAEgAIB9KB2pHQwcjELMAkGA1UEBhMCQ0ExEDAO
// SIG // BgNVBAgTB09udGFyaW8xDzANBgNVBAcTBk90dGF3YTEW
// SIG // MBQGA1UEChMNRW50cnVzdCwgSW5jLjEoMCYGA1UEAxMf
// SIG // RW50cnVzdCBUaW1lIFN0YW1waW5nIEF1dGhvcml0eaCC
// SIG // CiQwggUJMIID8aADAgECAhEAq91nZfJa71AAAAAAVZHp
// SIG // DDANBgkqhkiG9w0BAQsFADCBsjELMAkGA1UEBhMCVVMx
// SIG // FjAUBgNVBAoTDUVudHJ1c3QsIEluYy4xKDAmBgNVBAsT
// SIG // H1NlZSB3d3cuZW50cnVzdC5uZXQvbGVnYWwtdGVybXMx
// SIG // OTA3BgNVBAsTMChjKSAyMDE1IEVudHJ1c3QsIEluYy4g
// SIG // LSBmb3IgYXV0aG9yaXplZCB1c2Ugb25seTEmMCQGA1UE
// SIG // AxMdRW50cnVzdCBUaW1lc3RhbXBpbmcgQ0EgLSBUUzEw
// SIG // HhcNMTgxMDA1MjAzMDI3WhcNMzAwMTA1MjEwMDI3WjBy
// SIG // MQswCQYDVQQGEwJDQTEQMA4GA1UECBMHT250YXJpbzEP
// SIG // MA0GA1UEBxMGT3R0YXdhMRYwFAYDVQQKEw1FbnRydXN0
// SIG // LCBJbmMuMSgwJgYDVQQDEx9FbnRydXN0IFRpbWUgU3Rh
// SIG // bXBpbmcgQXV0aG9yaXR5MIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAq72ujI9Cy5VZXGIn+UC4/1Wi
// SIG // QEpl/9vtp6GIbkAaLtlr1UrtAVliVMRzFqPWhG7ugELq
// SIG // VQiYcBk/Jp7E1qao66upJD0LV1hk/PDaGDLZsde6cwFL
// SIG // DpEx771ImonDguIJePOiGy6NzQ7vibN6uvIcmDOlcPh7
// SIG // TuwSCOyzn0+MS77XfIBnVv5cPgfahqIpQBswyo/NF0mi
// SIG // 1OvNXlByGRlwRyudCuCAwykHASUkXM32BtQdEYbKNfYU
// SIG // pL+vbkGDKWuSf0SHjNuEUKCRvAlTf/SsvsM3h6PESgsQ
// SIG // M223AYPxxUdpnxTDz838fQEp40XOj5mOZKkNPIsg4gOG
// SIG // y1REQTe16QIDAQABo4IBVzCCAVMwDgYDVR0PAQH/BAQD
// SIG // AgeAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMIMEEGA1Ud
// SIG // IAQ6MDgwNgYKYIZIAYb6bAoDBTAoMCYGCCsGAQUFBwIB
// SIG // FhpodHRwOi8vd3d3LmVudHJ1c3QubmV0L3JwYTAJBgNV
// SIG // HRMEAjAAMGgGCCsGAQUFBwEBBFwwWjAjBggrBgEFBQcw
// SIG // AYYXaHR0cDovL29jc3AuZW50cnVzdC5uZXQwMwYIKwYB
// SIG // BQUHMAKGJ2h0dHA6Ly9haWEuZW50cnVzdC5uZXQvdHMx
// SIG // LWNoYWluMjU2LmNlcjAxBgNVHR8EKjAoMCagJKAihiBo
// SIG // dHRwOi8vY3JsLmVudHJ1c3QubmV0L3RzMWNhLmNybDAf
// SIG // BgNVHSMEGDAWgBTDwnHSe9doBa47OZs0JQxiA8dXaDAd
// SIG // BgNVHQ4EFgQUIJB53ibLFdoHQvuKFQ1xnhloiCwwDQYJ
// SIG // KoZIhvcNAQELBQADggEBAMSyYtmyy6moYNtBptNAPWG9
// SIG // +u/3lLVIzW5y1YblGKmxQYmYrwQVq32r9RUCxGvAqUko
// SIG // LVjXUwxZBzbOqgt46WXAxCMRNNTAapj7gfOsmGC09z4A
// SIG // dHCFcjC2wmkxWzwGbgT/QeRFlF5wilI7DsqHYWxASFYP
// SIG // HcEn6vJeYCD8hvo0V8Q/4qVKi7sG82sdCQJQ3fgXS9J0
// SIG // Iaz5n0n37ErYOlX5VenFj20iBFlKUz0dU6KqM3ttARW+
// SIG // fqW6n7JR3Xdx2LGC6ll9ja0+TUaM/jglp/yk3hO+/hDS
// SIG // 8JY35Y8cqazT2GpupVbcJlrpX4HdkE+YaYhNz4KUqmL1
// SIG // nwTm/b9mmsIwggUTMIID+6ADAgECAgxY2hP/AAAAAFHO
// SIG // DfcwDQYJKoZIhvcNAQELBQAwgbQxFDASBgNVBAoTC0Vu
// SIG // dHJ1c3QubmV0MUAwPgYDVQQLFDd3d3cuZW50cnVzdC5u
// SIG // ZXQvQ1BTXzIwNDggaW5jb3JwLiBieSByZWYuIChsaW1p
// SIG // dHMgbGlhYi4pMSUwIwYDVQQLExwoYykgMTk5OSBFbnRy
// SIG // dXN0Lm5ldCBMaW1pdGVkMTMwMQYDVQQDEypFbnRydXN0
// SIG // Lm5ldCBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eSAoMjA0
// SIG // OCkwHhcNMTUwNzIyMTkwMjU0WhcNMjkwNjIyMTkzMjU0
// SIG // WjCBsjELMAkGA1UEBhMCVVMxFjAUBgNVBAoTDUVudHJ1
// SIG // c3QsIEluYy4xKDAmBgNVBAsTH1NlZSB3d3cuZW50cnVz
// SIG // dC5uZXQvbGVnYWwtdGVybXMxOTA3BgNVBAsTMChjKSAy
// SIG // MDE1IEVudHJ1c3QsIEluYy4gLSBmb3IgYXV0aG9yaXpl
// SIG // ZCB1c2Ugb25seTEmMCQGA1UEAxMdRW50cnVzdCBUaW1l
// SIG // c3RhbXBpbmcgQ0EgLSBUUzEwggEiMA0GCSqGSIb3DQEB
// SIG // AQUAA4IBDwAwggEKAoIBAQDZI+YUpOh8S4VxWPv4geZy
// SIG // i11Gw4gAHzjQiuHWblYw5a/aZFB9whM5+71mtNqE+4PQ
// SIG // KB/LduhgUGmb885PE+LBPsHfEssyo/heRCIOzDrpjUm5
// SIG // YHTI3lQ9QV5DXyhGqaa3yhArIrxbTVuMF2UShv0sd9XF
// SIG // oIzKwoPgR1d853CuYkUnMRgK1MCkGFVS92DGBEuz3Wgy
// SIG // bhAfNBG4Enhk8e6p4PfjsSKPNFply4r04UVQdN+Tl6Y0
// SIG // 5tBMO583SVKnU06fLmdc7Zb8pb90UYjjqo692bEvX1Aw
// SIG // FvRRYCJrmcv/4VQ7uftEOKUIOSObaUf6PMTQ56rfRrLs
// SIG // 8ooZrCmyOJV1AgMBAAGjggEjMIIBHzASBgNVHRMBAf8E
// SIG // CDAGAQH/AgEAMA4GA1UdDwEB/wQEAwIBBjA7BgNVHSAE
// SIG // NDAyMDAGBFUdIAAwKDAmBggrBgEFBQcCARYaaHR0cDov
// SIG // L3d3dy5lbnRydXN0Lm5ldC9ycGEwMwYIKwYBBQUHAQEE
// SIG // JzAlMCMGCCsGAQUFBzABhhdodHRwOi8vb2NzcC5lbnRy
// SIG // dXN0Lm5ldDAyBgNVHR8EKzApMCegJaAjhiFodHRwOi8v
// SIG // Y3JsLmVudHJ1c3QubmV0LzIwNDhjYS5jcmwwEwYDVR0l
// SIG // BAwwCgYIKwYBBQUHAwgwHQYDVR0OBBYEFMPCcdJ712gF
// SIG // rjs5mzQlDGIDx1doMB8GA1UdIwQYMBaAFFXkgdERgL7Y
// SIG // ibkIozH5oSQJFrlwMA0GCSqGSIb3DQEBCwUAA4IBAQAd
// SIG // JOeadFuqcPyxDjFF1ywAf2Y6K6CaNKqsY22J+Z/fDXf9
// SIG // JCP8T5y3b4/z9B+2wf3WHMSMiGbBY426V3fTuBoeyFGt
// SIG // zGA2GodqKOoRZd7MPCyMdLfoUEPTzCjoFWwRKp8UlSnJ
// SIG // BVe1ZzboPKmD70HBIRbTfvctEUdmdmCCEmmMdlVzD98v
// SIG // S13pbCP4B/a1fdZpRZxYfWEu/HhLQ06JkUZELKBTqEWh
// SIG // 9hZYu5ET8kvF3wvA564per1Fs+dwMOc0jut69tO10d5r
// SIG // E5lGs4vSTZN1tfFvv9wAKMIlv7zno2U07D8NHZeM+qqI
// SIG // IqQYNdsFjnbjEMgpj2PQrqwY2drEn1ESMYIDZDCCA2AC
// SIG // AQEwgcgwgbIxCzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1F
// SIG // bnRydXN0LCBJbmMuMSgwJgYDVQQLEx9TZWUgd3d3LmVu
// SIG // dHJ1c3QubmV0L2xlZ2FsLXRlcm1zMTkwNwYDVQQLEzAo
// SIG // YykgMjAxNSBFbnRydXN0LCBJbmMuIC0gZm9yIGF1dGhv
// SIG // cml6ZWQgdXNlIG9ubHkxJjAkBgNVBAMTHUVudHJ1c3Qg
// SIG // VGltZXN0YW1waW5nIENBIC0gVFMxAhEAq91nZfJa71AA
// SIG // AAAAVZHpDDANBglghkgBZQMEAgEFAKCCAWwwGgYJKoZI
// SIG // hvcNAQkDMQ0GCyqGSIb3DQEJEAEEMC8GCSqGSIb3DQEJ
// SIG // BDEiBCC9YxVCydWSjNfbkV08PmlVW6syuCWk1tiPrjmc
// SIG // 7y0kfzCCARsGCyqGSIb3DQEJEAIMMYIBCjCCAQYwggEC
// SIG // MIHnBBTA9ZQXZWnXgKsOz9/b4qnBr2RO3jCBzjCBuKSB
// SIG // tTCBsjELMAkGA1UEBhMCVVMxFjAUBgNVBAoTDUVudHJ1
// SIG // c3QsIEluYy4xKDAmBgNVBAsTH1NlZSB3d3cuZW50cnVz
// SIG // dC5uZXQvbGVnYWwtdGVybXMxOTA3BgNVBAsTMChjKSAy
// SIG // MDE1IEVudHJ1c3QsIEluYy4gLSBmb3IgYXV0aG9yaXpl
// SIG // ZCB1c2Ugb25seTEmMCQGA1UEAxMdRW50cnVzdCBUaW1l
// SIG // c3RhbXBpbmcgQ0EgLSBUUzECEQCr3Wdl8lrvUAAAAABV
// SIG // kekMMBYEFB5NkMnhD221gI+pRTWU1mMNmPE6MA0GCSqG
// SIG // SIb3DQEBCwUABIIBABB33CUlqQ2Qo3tn4bwJ1iMWgY7r
// SIG // MkRMcTwsfugH2hWPnv5touT4UECwP9rVCTwU4Zdkjv7S
// SIG // 9Pqst9M7bvjTnyMzgpTgY/D2Qc+Xaz9H2dluZZgyc/LT
// SIG // hwgSsOSC5pjfGkcMwapnUVp8bB9ChxXIZp8FpE4ZMLae
// SIG // 8/cMGsbxF2tI5O2EB8qa3YYy215xCHIRFu5T+5ELQEWm
// SIG // /C50Y4guR7I7+HeIAjsgqJQXrWUwrox+OQ+DHzBJPhjV
// SIG // Di8/ca+YgRVj+g8GBrmvvR4gUXNu3NHBjrPsDCqlEdL5
// SIG // F/jygDXe2ENB53QPszILMz9aNKZm7iv3AG+OQY4+S9wm
// SIG // iRzKSjY=
// SIG // End signature block
