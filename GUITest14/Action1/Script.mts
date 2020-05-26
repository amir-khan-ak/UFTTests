SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"

Browser("index:=0").Navigate "http://advantageonlineshopping.com/"
Browser("index:=0").Sync

AIUtil.SetContext Browser("index:=0")
AIUtil("profile").Click

AIUtil("input", "Usemame").Type "Amir"
AIUtil("input", "Password").Type "%$E§W!2q!"

AIUtil("button", "SIGN IN").Click


Browser("index:=0").Close

Reporter.ReportEvent micPass, "Test" , "Test"
