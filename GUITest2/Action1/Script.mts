Device("Device").App("AOSR").Launch

Device("Device").App("AOSR").MobileWebView("MobileWebView").Page("AO Surgery Reference").Link("Overview_2").Check CheckPoint("Overview")

Device("Device").App("AOSR").MobileWebView("MobileWebView").Page("AO Surgery Reference").Link("Diagnosis").Click


Device("Device").Home()

