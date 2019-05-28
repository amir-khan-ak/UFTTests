SystemUtil.Run "notepad.exe"
Reporter.ReportEvent micPass, "Step 1 executed", "Step Description"
Reporter.ReportEvent micPass, "Step 2 executed", "Step Description"

SystemUtil.CloseProcessByName "notepad.exe"
SystemUtil.Run "notepad.exe"
Reporter.ReportEvent micPass, "Step 1 executed", "Step Description"
Reporter.ReportEvent micPass, "Step 2 executed", "Step Description"

SystemUtil.CloseProcessByName "notepad.exe"
