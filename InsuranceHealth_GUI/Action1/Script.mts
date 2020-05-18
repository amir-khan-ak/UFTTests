'CreateObject("WScript.Shell").Run "cmd /K ""C:\Users\khanamir\Downloads\ClaimProcessingDemo\run-real.bat"""

'SystemUtil.Run "C:\Users\khanamir\Downloads\ClaimProcessingDemo\run-virtualized-gui.bat", , "C:\Users\khanamir\Downloads\ClaimProcessingDemo"

Window("Health Insurance Demo").Activate

Window("Health Insurance Demo").WinObject("Enter Claim").Highlight()
Window("Health Insurance Demo").WinObject("Enter Claim").Click

UIAWindow("Health Insurance Demo").UIAEdit("textResponse").Check CheckPoint("textResponse")
'Window("Health Insurance Demo").Close

