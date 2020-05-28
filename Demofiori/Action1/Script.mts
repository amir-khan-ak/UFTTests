'SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
'browser("index:=0").Navigate "https://www.sapsolutionmanagerdemo.com/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html#Shell-home"
Browser("index:=0").Sync()

AiUtil.SetContext Browser("index:=0")

'*Login
If AIUtil("text_box", "User").Exist() = True Then
	AIUtil("text_box", "User").Type "DASILVAPE"
else
	AIUtil("text_box", "U88!""").Type "DASILVAPE"
End If
AIUtil("text_box", "Password").Type "Solman72"
AIUtil.FindTextBlock("Log On").Click


Browser("index:=0").Sync()
wait 5'Click on profile
AIUtil("profile").Click


wait 5
'Signout
AIUtil.FindTextBlock("Sign out").Click


AIUtil.FindTextBlock("OK").Click
wait 3
browser("index:=0").Close



